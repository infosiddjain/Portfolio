export type SocialId = "github" | "linkedin" | "twitter";

export interface SocialLink {
  readonly id: SocialId;
  readonly label: string;
  readonly href: string;
}

export const socialLinks: readonly SocialLink[] = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/infosiddjain/" },
  { id: "github", label: "GitHub", href: "https://github.com/infosiddjain" },
  { id: "twitter", label: "X (Twitter)", href: "https://x.com/infosiddjain" },
];
