"use client";

import { MainLayout } from "@/layouts";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/infosiddjain",
    color: "hover:text-blue-600",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/infosiddjain/",
    color: "hover:text-pink-500",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/infosiddjain/",
    color: "hover:text-blue-700",
    label: "LinkedIn",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/infosiddjain",
    color: "hover:text-black",
    label: "Twitter / X",
  },
  {
    icon: FaGithub,
    href: "https://github.com/infosiddjain",
    color: "hover:text-gray-800",
    label: "GitHub",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/919259457900",
    color: "hover:text-green-600",
    label: "WhatsApp",
  },
  {
    icon: FaEnvelope,
    href: "mailto:infosiddjain@gmail.com",
    color: "hover:text-red-600",
    label: "Email",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="relative min-h-screen w-full">
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 text-center md:text-left space-y-6  backdrop-blur-md  rounded-xl"
          >
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 font-montaga drop-shadow-md">
                Software Engineer
              </h1>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-poppins">
                Full Stack Developer and current Software Engineer with over 3+
                years of hands-on experience building scalable web and mobile
                applications using React.js, React Native, Node.js, and MongoDB.
                Proven track record of delivering high-performance,
                user-friendly products across full-time, freelance, and remote
                roles. Skilled in leading cross-functional teams, managing
                product lifecycles, and implementing clean UI/UX with tools like
                Figma and Tailwind CSS. Adept at aligning technology decisions
                with business goals, optimizing workflows, and driving
                innovation in fast-paced environments.
              </p>
              <div className="flex justify-center md:justify-start gap-4 mt-4 text-black text-xl">
                {socialLinks.map(({ icon: Icon, href, color, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`transition ${color}`}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
          >
            <Image
              src={Logo}
              alt="logo"
              width={500}
              height={500}
              className="object-contain drop-shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}
