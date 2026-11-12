import "./globals.css";
import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Toaster } from "@/components/Toaster";
import { Cursor } from "@/components/motion/Cursor";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { DESCRIPTION, SITE_NAME, SITE_URL, TITLE } from "@/lib/site";

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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: TITLE, template: "%s · Siddharth Jain" },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Siddharth Jain",
    "infosiddjain",
    "Siddharth Jain developer",
    "Siddharth Jain portfolio",
    "React Native developer",
    "Next.js developer",
    "freelance React Native developer India",
    "freelance app developer Delhi NCR",
    "hire mobile app developer",
    "health app developer",
    "sports-tech app developer",
    "website development",
  ],
  authors: [{ name: "Siddharth Jain", url: SITE_URL }],
  creator: "Siddharth Jain",
  publisher: "Siddharth Jain",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@infosiddjain",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  category: "technology",
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
