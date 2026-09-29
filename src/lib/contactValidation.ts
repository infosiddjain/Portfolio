// Shared by the contact form (instant feedback) and the server action (the real check).

export type ContactField = "name" | "email" | "message";
export type ContactErrors = Partial<Record<ContactField, string>>;

export const CONTACT_LIMITS = {
  name: { min: 2, max: 80 },
  email: { max: 254 },
  message: { min: 10, max: 2000 },
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContactField(field: ContactField, raw: string) {
  const value = raw.trim();

  switch (field) {
    case "name":
      if (!value) return "Please enter your name.";
      if (value.length < CONTACT_LIMITS.name.min)
        return `Name must be at least ${CONTACT_LIMITS.name.min} characters.`;
      if (value.length > CONTACT_LIMITS.name.max)
        return `Name must be under ${CONTACT_LIMITS.name.max} characters.`;
      return undefined;

    case "email":
      if (!value) return "Please enter your email.";
      if (value.length > CONTACT_LIMITS.email.max || !EMAIL_PATTERN.test(value))
        return "Please enter a valid email address.";
      return undefined;

    case "message":
      if (!value) return "Please enter a message.";
      if (value.length < CONTACT_LIMITS.message.min)
        return `Message must be at least ${CONTACT_LIMITS.message.min} characters.`;
      if (value.length > CONTACT_LIMITS.message.max)
        return `Message must be under ${CONTACT_LIMITS.message.max} characters.`;
      return undefined;
  }
}

export function validateContact(values: Record<ContactField, string>) {
  const errors: ContactErrors = {};
  for (const field of ["name", "email", "message"] as const) {
    const error = validateContactField(field, values[field] ?? "");
    if (error) errors[field] = error;
  }
  return errors;
}
