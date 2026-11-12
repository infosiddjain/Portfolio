import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notes & articles",
  description: "Notes by Siddharth Jain (infosiddjain) on React Native, Next.js, shipping apps to Google Play and building a freelance career.",
  alternates: { canonical: "/blog" },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
