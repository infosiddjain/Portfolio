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
    text: "abusaid7388@gmail.com",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-15.svg",
  },
  {
    id: "phone",
    text: "+8801608797655",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-16.svg",
  },
  {
    id: "address",
    text: "Middle Badda, Dhaka, Bangladesh - 1212 ",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-17.svg",
  },
] as const;

export const socialLinksLarge: SocialLinkLarge[] = [
  {
    id: "github",
    href: "https://github.com/said7388",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-18.svg",
    alt: "",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/abu-said-bd/",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-19.svg",
    alt: "",
  },
  {
    id: "twitter",
    href: "https://twitter.com/said7388",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-20.svg",
    alt: "",
  },
  {
    id: "discord",
    href: "https://stackoverflow.com/users/16840768/abu-said",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-21.svg",
    alt: "",
  },
  {
    id: "facebook",
    href: "https://www.facebook.com/abusaid.riyaz/",
    iconSrc: "https://c.animaapp.com/mek409lvoDLlSz/assets/icon-22.svg",
    alt: "",
  },
] as const;
