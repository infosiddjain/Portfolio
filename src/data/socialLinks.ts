export interface SocialLink {
  readonly id: string;
  readonly href: string;
  readonly iconSrc: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    href: "https://github.com/infosiddjain",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-1.svg",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/infosiddjain/",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-2.svg",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/infosiddjain",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-3.svg",
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/infosiddjain/",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-4.svg",
  },
  {
    id: "twitter",
    href: "https://x.com/infosiddjain",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-5.svg",
  },
] as const;
