export type SocialId = "github" | "linkedin" | "twitter" | "instagram" | "facebook";

export interface SocialLink {
  readonly id: SocialId;
  readonly label: string;
  readonly href: string;
}

export const socialLinks: readonly SocialLink[] = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/infosiddjain/" },
  { id: "github", label: "GitHub", href: "https://github.com/infosiddjain" },
  { id: "twitter", label: "X (Twitter)", href: "https://x.com/infosiddjain" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/infosiddjain/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/infosiddjain" },
];
