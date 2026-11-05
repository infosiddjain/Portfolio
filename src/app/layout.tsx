import "./globals.css";
import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Toaster } from "@/components/Toaster";
import { Cursor } from "@/components/motion/Cursor";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgress } from "@/components/motion/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const tight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-tight",
  display: "swap",
});

// Set NEXT_PUBLIC_SITE_URL (e.g. https://siddharthjain.dev) once the custom domain is live.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio-five-brown-mafnjkhjpf.vercel.app/";
const TITLE = "Siddharth Jain — React Native & Next.js Developer for Hire";
const DESCRIPTION =
  "Freelance React Native & Next.js developer. I design, build and launch mobile apps, SaaS platforms and business websites — 10 apps live on Google Play.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Siddharth Jain",
    "React Native developer",
    "Next.js developer",
    "freelance app developer India",
    "mobile app development",
    "website development",
    "hire developer",
  ],
  authors: [{ name: "Siddharth Jain", url: SITE_URL }],
  creator: "Siddharth Jain",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Siddharth Jain",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@infosiddjain",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${tight.variable}`}>
        <MotionProvider>
          <Cursor />
          <ScrollProgress />
          {children}
        </MotionProvider>
        <Toaster />
      </body>
    </html>
  );
}
