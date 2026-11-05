export interface Testimonial {
  readonly quote: string;
  readonly name: string;
  readonly role: string;
  readonly company: string;
  /** Square photo in /public/testimonials, e.g. "/testimonials/jane.jpg". Optional. */
  readonly photo?: string;
  /** Which project this was for, e.g. "GameRun". Optional. */
  readonly project?: string;
}

/**
 * Real quotes only — the section stays hidden until this list has entries.
 *
 * Ask on LinkedIn:
 *   "Hi [name], I'm updating my portfolio. Could you write 2 lines about what it was like
 *    working together on [project]? Happy to send a draft you can edit."
 *
 * Example:
 *   { quote: "…", name: "Jane Smith", role: "Product Lead", company: "Completum Health", project: "Sahej Health" },
 */
export const testimonials: readonly Testimonial[] = [];
