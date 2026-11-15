import { CONTACT } from "@/data/contact";
import { socialLinks } from "@/data/socialLinks";
import { PLAY_DEVELOPER_URL, playStoreApps } from "@/data/projects";

// Set NEXT_PUBLIC_SITE_URL (e.g. https://siddharthjain.dev) once a custom domain is live.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-five-brown-mafnjkhjpf.vercel.app").replace(/\/+$/, "");

export const SITE_NAME = "Siddharth Jain (infosiddjain)";
export const TITLE = "Siddharth Jain — React Native & Next.js Developer for Hire";
export const DESCRIPTION = `Siddharth Jain (infosiddjain) — freelance React Native & Next.js developer from Delhi NCR, India. I build mobile apps, web apps and business websites, specialising in health, fitness & sports-tech. ${playStoreApps.length} apps live on Google Play.`;

export const absoluteUrl = (path = "/") => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

/** schema.org Person + WebSite + ProfessionalService for the home page. */
export function homeJsonLd() {
  const sameAs = [...socialLinks.map((s) => s.href), PLAY_DEVELOPER_URL];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: CONTACT.name,
        alternateName: "infosiddjain",
        url: SITE_URL,
        image: absoluteUrl("/logo.jpg"),
        jobTitle: "React Native & Next.js Developer",
        email: `mailto:${CONTACT.email}`,
        address: { "@type": "PostalAddress", addressLocality: "Hapur", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
        knowsAbout: ["React Native", "Next.js", "Node.js", "MongoDB", "TypeScript", "Mobile app development", "Web development"],
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: "Siddharth Jain — App & Web Development",
        url: SITE_URL,
        image: absoluteUrl("/logo.jpg"),
        telephone: CONTACT.phone,
        email: CONTACT.email,
        areaServed: ["IN", "US", "Worldwide"],
        address: { "@type": "PostalAddress", addressLocality: "Hapur", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
        founder: { "@id": `${SITE_URL}/#person` },
        serviceType: ["Mobile app development", "Web app development", "Business websites", "Game development", "App maintenance"],
      },
    ],
  };
}

/** Safe way to embed JSON-LD in a <script> tag. */
export const jsonLdScript = (data: unknown) => ({ __html: JSON.stringify(data).replace(/</g, "\\u003c") });
