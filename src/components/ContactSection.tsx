"use client";
import React, { useRef, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { CONTACT } from "@/data/contact";
import { Magnetic } from "./motion/Magnetic";
import { notify } from "@/lib/notify";
import { sendContact } from "@/app/actions/contact";
import {
  CONTACT_LIMITS,
  type ContactErrors,
  type ContactField,
  validateContact,
  validateContactField,
} from "@/lib/contactValidation";

const EMPTY_FORM = { name: "", email: "", message: "", _gotcha: "" };
const FIELD_ORDER: ContactField[] = ["name", "email", "message"];

const inputClass = (hasError: boolean) =>
  `w-full border-0 border-b-2 bg-transparent px-0 py-3 text-lg text-white outline-none transition-colors placeholder:text-white/30 focus:border-lime ${
    hasError ? "border-red-400" : "border-white/20"
  }`;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-xs text-red-400">
      {message}
    </p>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [loading, setLoading] = useState(false);
  const fieldRefs = useRef<
    Partial<Record<ContactField, HTMLInputElement | HTMLTextAreaElement | null>>
  >({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Once a field has been visited, re-check it as the user types.
    if (touched[name as ContactField]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateContactField(name as ContactField, value),
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as ContactField;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors((prev) => ({
      ...prev,
      [field]: validateContactField(field, e.target.value),
    }));
  };

  const showErrors = (fieldErrors: ContactErrors) => {
    setErrors(fieldErrors);
    setTouched({ name: true, email: true, message: true });
    const firstInvalid = FIELD_ORDER.find((f) => fieldErrors[f]);
    if (firstInvalid) fieldRefs.current[firstInvalid]?.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const fieldErrors = validateContact(formData);
    if (Object.keys(fieldErrors).length > 0) {
      showErrors(fieldErrors);
      notify.error("Almost there", "Please fix the highlighted fields and try again.", undefined, "contact-invalid");
      return;
    }

    setLoading(true);
    const toastId = notify.loading("Sending your enquiry…", "This only takes a moment.");

    try {
      const result = await sendContact(formData);
      if (result.ok) {
        notify.success(
          `Thanks${formData.name.trim() ? `, ${formData.name.trim().split(" ")[0]}` : ""}! Message sent`,
          "I usually reply within a few hours (IST). Check your inbox soon.",
          toastId
        );
        setFormData(EMPTY_FORM);
        setErrors({});
        setTouched({});
      } else {
        if (result.fieldErrors) showErrors(result.fieldErrors);
        notify.error("Couldn't send", result.error, toastId);
      }
    } catch (err) {
      console.error(err);
      notify.error("Something went wrong", "Please try again, or message me on WhatsApp.", toastId);
    } finally {
      setLoading(false);
    }
  };

  const channels = [
    { icon: FaWhatsapp, label: "WhatsApp", value: "Chat now", href: CONTACT.whatsapp, ext: true },
    { icon: FiMail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}`, ext: false },
    { icon: FiPhone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref, ext: false },
    { icon: FaLinkedin, label: "LinkedIn", value: "in/infosiddjain", href: "https://www.linkedin.com/in/infosiddjain/", ext: true },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-electric/25 blur-[140px]" />
      <div aria-hidden className="absolute -bottom-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-lime/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-24 md:px-10 md:pt-32">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          <span className="pulse-dot h-2 w-2 rounded-full bg-success" /> Available for new projects
        </p>
        <h2 className="display mt-6 text-[clamp(3.4rem,11vw,11rem)]">
          Let&apos;s build
          <br />
          <span className="text-lime">something</span>{" "}
          <span className="text-outline-light">great.</span>
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Direct channels */}
          <div>
            <p className="max-w-md text-xl leading-relaxed text-white/70">
              Tell me what you want to build. You&apos;ll get a reply with next steps, a rough timeline and an
              estimate — no obligation.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="Chat"
                  className="grid h-36 w-36 place-items-center rounded-full bg-lime text-center text-ink transition-transform hover:scale-105 md:h-44 md:w-44"
                >
                  <span>
                    <FaWhatsapp className="mx-auto h-7 w-7" />
                    <span className="mt-2 block text-xs font-bold uppercase tracking-[0.18em]">WhatsApp me</span>
                  </span>
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="grid h-36 w-36 place-items-center rounded-full border border-white/25 text-center transition-colors hover:bg-white hover:text-ink md:h-44 md:w-44"
                >
                  <span>
                    <FiMail className="mx-auto h-7 w-7" />
                    <span className="mt-2 block text-xs font-bold uppercase tracking-[0.18em]">Email me</span>
                  </span>
                </a>
              </Magnetic>
            </div>

            <div className="mt-12 border-t border-white/15">
              {channels.map(({ icon: Icon, label, value, href, ext }) => (
                <a
                  key={label}
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 border-b border-white/15 py-4 transition-colors hover:text-lime"
                >
                  <Icon className="h-4 w-4 text-white/50 group-hover:text-lime" />
                  <span className="w-24 text-xs uppercase tracking-[0.18em] text-white/50">{label}</span>
                  <span className="flex-1 truncate font-medium">{value}</span>
                  <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
              ))}
            </div>
            <div className="mt-6 space-y-2 text-sm text-white/60">
              <p className="flex items-center gap-2">
                <FiClock className="h-4 w-4 text-lime" /> Usually replies within a few hours ({CONTACT.timezone})
              </p>
              <p className="flex items-center gap-2">
                <FiMapPin className="h-4 w-4 text-lime" /> {CONTACT.location} · clients worldwide
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">[ Project enquiry ]</p>
            <form onSubmit={handleSubmit} noValidate className="form-dark mt-6 flex flex-col gap-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Your name</label>
                  <input
                    ref={(el) => {
                      fieldRefs.current.name = el;
                    }}
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    placeholder="Jane Smith"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    maxLength={CONTACT_LIMITS.name.max}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    className={inputClass(!!errors.name)}
                  />
                  <FieldError id="contact-name-error" message={errors.name} />
                </div>
                <div className="flex flex-col gap-y-1">
                  <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Email</label>
                  <input
                    ref={(el) => {
                      fieldRefs.current.email = el;
                    }}
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    placeholder="jane@company.com"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    maxLength={CONTACT_LIMITS.email.max}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    className={inputClass(!!errors.email)}
                  />
                  <FieldError id="contact-email-error" message={errors.email} />
                </div>
              </div>

              <div className="flex flex-col gap-y-1">
                <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Project details</label>
                <textarea
                  ref={(el) => {
                    fieldRefs.current.message = el;
                  }}
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  placeholder="I need an Android & iOS app for… / a website for my business…"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  maxLength={CONTACT_LIMITS.message.max}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={`${inputClass(!!errors.message)} resize-y`}
                  data-lenis-prevent
                ></textarea>
                <div className="flex items-start justify-between gap-x-3">
                  <FieldError id="contact-message-error" message={errors.message} />
                  <span className="ml-auto text-xs text-white/40">
                    {formData.message.trim().length}/{CONTACT_LIMITS.message.max}
                  </span>
                </div>
              </div>

              {/* Spam trap: hidden from people, bots fill it */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleInputChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />

              <button
                type="submit"
                disabled={loading}
                aria-busy={loading}
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-lime py-2 pl-7 pr-2 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send enquiry"}
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-lime transition-transform group-hover:rotate-45">
                  <FiArrowUpRight className="h-5 w-5" />
                </span>
              </button>
              <p className="text-xs text-white/40">Your details are only used to reply to you.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
