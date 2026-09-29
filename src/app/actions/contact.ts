"use server";

import { type ContactErrors, type ContactField, validateContact } from "@/lib/contactValidation";

const CONTACT_FORM_ENDPOINT = "https://hub-form.vercel.app/api/f/ASLiajwxMe9e";

const CONTACT_FIELDS: ContactField[] = ["name", "email", "message"];

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
  _gotcha: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; error: string; fieldErrors?: ContactErrors };

// Runs on the server so HUB_FORM_KEY never reaches the browser.
export async function sendContact(
  payload: ContactPayload
): Promise<ContactResult> {
  // Spam trap filled in: pretend it worked so bots don't retry.
  if (payload._gotcha) return { ok: true };

  const fieldErrors = validateContact(payload);
  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, error: "Please fix the highlighted fields.", fieldErrors };
  }

  const key = process.env.HUB_FORM_KEY;
  if (!key) {
    console.error("HUB_FORM_KEY is not set");
    return { ok: false, error: "The contact form isn't available right now." };
  }

  try {
    const res = await fetch(CONTACT_FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        name: payload.name.trim(),
        email: payload.email.trim(),
        message: payload.message.trim(),
      }),
    });
    const data = await res.json().catch(() => null);

    if (res.ok && data?.ok === true) return { ok: true };

    console.error("hub-form rejected the message", res.status, data);

    // Show hub-form's own message whenever it sends one.
    if (typeof data?.error === "string" && data.error.trim()) {
      const field = CONTACT_FIELDS.find((f) => f === data.field);
      return {
        ok: false,
        error: data.error,
        fieldErrors: field ? { [field]: data.error } : undefined,
      };
    }
    return { ok: false, error: "Couldn't send your message. Please try again." };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      error: "Network error. Check your connection and try again.",
    };
  }
}
