export interface ContactInfo {
  readonly id: string;
  readonly text: string;
  readonly iconSrc: string;
}

export interface SocialLinkLarge {
  alt: string;
  readonly id: string;
  readonly href: string;
  readonly iconSrc: string;
}

export const contactInfo: ContactInfo[] = [
  {
    id: "email",
    text: "infosiddjain@gmail.com",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-15.svg",
  },
  {
    id: "phone",
    text: "+91 9259457900",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-16.svg",
  },
  {
    id: "address",
    text: "Near By Delhi, Hapur - 245101 ",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-17.svg",
  },
] as const;

export const socialLinksLarge: SocialLinkLarge[] = [
  {
    id: "github",
    href: "https://github.com/infosiddjain",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-18.svg",
    alt: "",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/infosiddjain/",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-19.svg",
    alt: "",
  },
  {
    id: "twitter",
    href: "https://x.com/infosiddjain",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-20.svg",
    alt: "",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/infosiddjain",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-22.svg",
    alt: "",
  },
] as const;
