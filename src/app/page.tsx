"use client";

import { MainLayout } from "@/layouts";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-20">
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 font-montaga">
              Software Engineer
            </h1>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-poppins">
              Full Stack Developer and current Software Engineer with over 3+
              years of hands-on experience building scalable web and mobile
              applications using React.js, React Native, Node.js, and MongoDB.
              Proven track record of delivering high-performance, user-friendly
              products across full-time, freelance, and remote roles. Skilled in
              leading cross-functional teams, managing product lifecycles, and
              implementing clean UI/UX with tools like Figma and Tailwind CSS.
              Adept at aligning technology decisions with business goals,
              optimizing workflows, and driving innovation in fast-paced
              environments.
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-gray-600 text-xl">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            <FaXTwitter className="hover:text-black cursor-pointer" />
            <FaWhatsapp className="hover:text-green-600 cursor-pointer" />
            <FaEnvelope className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <Image src={Logo} alt="logo" className="object-contain" priority />
        </div>
      </div>
    </MainLayout>
  );
}
