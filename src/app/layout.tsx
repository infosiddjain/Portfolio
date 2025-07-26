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
  title: "Your Site",
  description: "Site description",
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
