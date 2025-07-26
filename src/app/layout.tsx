import "./globals.css";
import { Montaga, Poppins } from "next/font/google";

const montaga = Montaga({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-montaga",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Siddharth Jain Portfolio",
  description:
    "Explore Siddharth Jain's professional portfolio — including skills, projects, education, and certifications.",
  keywords: [
    "Siddharth Jain",
    "portfolio",
    "web developer",
    "full-stack developer",
    "projects",
    "skills",
    "resume",
  ],
  authors: [
    {
      name: "Siddharth Jain",
      url: "https://portfolio-five-brown-mafnjkhjpf.vercel.app/",
    },
  ],
  creator: "Siddharth Jain",
  metadataBase: new URL("https://portfolio-five-brown-mafnjkhjpf.vercel.app/"),
  openGraph: {
    title: "Siddharth Jain Portfolio",
    description: "Explore Siddharth Jain's projects, skills, and achievements.",
    url: "https://portfolio-five-brown-mafnjkhjpf.vercel.app/",
    siteName: "Siddharth Jain Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddharth Jain Portfolio",
    description: "Explore Siddharth Jain's skills, projects, resume, and more.",
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
      <body className={`${montaga.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
