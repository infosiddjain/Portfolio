"use client";
import React, { useRef, useState } from "react";
import { contactInfo, socialLinksLarge } from "@/data/contact";
import { toast } from "react-toastify";
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
  `bg-slate-900 border px-3 py-2 rounded-md outline-none transition-colors focus:border-purple-500 ${
    hasError ? "border-red-500" : "border-gray-700"
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
      toast.error("Please fix the highlighted fields.", { toastId: "contact-invalid" });
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Sending your message…");

    try {
      const result = await sendContact(formData);
      if (result.ok) {
        toast.update(toastId, {
          render: "Thanks! Your message has been sent. I'll get back to you soon.",
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setFormData(EMPTY_FORM);
        setErrors({});
        setTouched({});
      } else {
        if (result.fieldErrors) showErrors(result.fieldErrors);
        toast.update(toastId, {
          render: result.error,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (err) {
      console.error(err);
      toast.update(toastId, {
        render: "Something went wrong. Please try again.",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative box-border mt-24 mb-12 md:my-16">
      <div className="absolute items-center box-border hidden flex-col -right-8 top-24 md:flex">
        <span className="text-xl bg-indigo-950 box-border inline leading-7 w-fit px-5 py-2 rounded-md md:rotate-90">
          CONTACT
        </span>
        <span className="bg-indigo-950 box-border inline h-36 w-0.5"></span>
      </div>

      <div className="items-center box-border gap-x-8 grid grid-cols-1 gap-y-8 md:gap-x-16 md:grid-cols-2 md:gap-y-16">
        <div className="box-border">
          <p className="text-teal-400 text-xl font-medium uppercase mb-5">
            Contact with me
          </p>
          <div className="box-border max-w-screen-md border border-slate-600 p-3 rounded-lg md:p-5">
            <p className="text-slate-300 text-sm leading-5">
              If you have any questions or concerns, please don't hesitate to
              contact me. I am open to any work opportunities that align with my
              skills and interests.
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-y-4 mt-6"
            >
              <div className="flex flex-col gap-y-2">
                <label htmlFor="contact-name">Your Name: </label>
                <input
                  ref={(el) => {
                    fieldRefs.current.name = el;
                  }}
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  placeholder="Enter your name"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  maxLength={CONTACT_LIMITS.name.max}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className={inputClass(!!errors.name)}
                />
                <FieldError id="contact-name-error" message={errors.name} />
              </div>

              <div className="flex flex-col gap-y-2">
                <label htmlFor="contact-email">Your Email: </label>
                <input
                  ref={(el) => {
                    fieldRefs.current.email = el;
                  }}
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  placeholder="Enter your email"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  maxLength={CONTACT_LIMITS.email.max}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  className={inputClass(!!errors.email)}
                />
                <FieldError id="contact-email-error" message={errors.email} />
              </div>

              <div className="flex flex-col gap-y-2">
                <label htmlFor="contact-message">Your Message: </label>
                <textarea
                  ref={(el) => {
                    fieldRefs.current.message = el;
                  }}
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  placeholder="Enter your message"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  maxLength={CONTACT_LIMITS.message.max}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  className={`${inputClass(!!errors.message)} resize-y`}
                ></textarea>
                <div className="flex items-start justify-between gap-x-3">
                  <FieldError id="contact-message-error" message={errors.message} />
                  <span className="ml-auto text-xs text-slate-500">
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

              {/* Submit button */}
              <div className="flex flex-col items-center gap-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  className={`text-xs font-medium flex items-center justify-center gap-x-2 uppercase px-5 py-2.5 rounded-full md:text-sm md:font-semibold md:px-12 md:py-3 transition cursor-pointer ${
                    loading
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-pink-500 to-purple-600"
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && (
                    <img
                      src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-14.svg"
                      alt="Icon"
                      className="h-5 w-5"
                    />
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info + Social */}
        <div className="w-auto md:w-9/12">
          <div className="flex flex-col gap-y-5 md:gap-y-9">
            {contactInfo.map((info) => (
              <p
                key={info.id}
                className="flex items-center gap-x-3 text-sm md:text-xl"
              >
                <img
                  src={info.iconSrc}
                  alt="Icon"
                  className="h-9 w-9 p-2 rounded-full bg-gray-400"
                />
                <span className="text-sm md:text-xl">{info.text}</span>
              </p>
            ))}
          </div>

          <div className="flex gap-x-5 mt-8 md:gap-x-10 md:mt-16">
            {socialLinksLarge.map((link) => (
              <a key={link.id} href={link.href}>
                <img
                  src={link.iconSrc}
                  alt={link.alt || "Icon"}
                  className="h-12 w-12 p-3 rounded-full bg-gray-400"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
