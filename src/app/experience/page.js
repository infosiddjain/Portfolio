"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaLaptopCode } from "react-icons/fa";
import { MainLayout } from "@/layouts";

const experienceData = [
  {
    role: "Software Engineer",
    company: "Trioford Technosys Pvt. Ltd.",
    duration: "Mar 2024 – Present",
    type: "Full-time | Remote",
    icon: <FaLaptopCode className="text-indigo-600 text-3xl" />,
    details: [
      "Leading full-stack development using React.js, React Native, Next.js, Node.js, Express.js, and MongoDB.",
      "Designed and developed the Learnz landing page, travel & transport website, student portal, and admin dashboard.",
      "Managed Figma-based UI/UX for all digital products ensuring responsive and accessible design.",
      "Oversaw the complete technical architecture and product roadmap aligning with business goals.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Binovative Pvt Ltd.",
    duration: "Aug 2023 – Nov 2023",
    type: "Freelance | Remote",
    icon: <FaBriefcase className="text-pink-500 text-3xl" />,
    details: [
      "Developed Wow Mom e-commerce web and mobile app using React.js and React Native.",
      "Integrated payment systems, product listings, cart, and order management.",
      "Ensured cross-platform performance, security, and user-friendly interfaces.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Wintej Pvt Ltd.",
    duration: "Aug 2023 – Oct 2023",
    type: "Freelance | Remote",
    icon: <FaBriefcase className="text-green-600 text-3xl" />,
    details: [
      "Built a fantasy gaming platform (similar to Dream11) and games like Ludo, Tambola, and Snake using React Native and React.js.",
      "Developed both web and mobile versions with live match tracking and betting logic.",
      "Focused on real-time user data flow, wallet integration, and secure gameplay",
    ],
  },
  {
    role: "Frontend Developer",
    company: "CompletumHealth Pvt Ltd.",
    duration: "Aug 2023 – Feb 2024",
    type: "Full-time | Remote",
    icon: <FaBriefcase className="text-blue-500 text-3xl" />,
    details: [
      "Developed Sahej App, a health management platform for diabetic patients using React Native",
      "Created full UI designs in Figma for mobile and web.",
      "Implemented user onboarding, health tracking dashboards, and notification system",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Dank Pvt Ltd. (London)",
    duration: "Feb 2023 – Aug 2023",
    type: "Full-time | Remote",
    icon: <FaBriefcase className="text-yellow-500 text-3xl" />,
    details: [
      "Built a LinkedIn-like social platform (web + mobile) with profiles, feeds, messaging, and search features",
      "Developed clean, scalable architecture for both mobile and web using React Native & React.js.",
      "Focused on UI/UX consistency and internationalization.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Aara Technology Pvt Ltd.",
    duration: "Aug 2022 – Feb 2023",
    type: "Full-time | Remote",
    icon: <FaBriefcase className="text-purple-500 text-3xl" />,
    details: [
      "Developed an e-commerce website, admin portal, and mobile application (My Pocket App) using React and React Native.",
      "Worked on Reward Dragon loyalty program platform using React.js.",
      "Implemented dashboards, payment flows, product listings, and user accounts.",
    ],
  },
  {
    role: "React Native Developer",
    company: "Qwerty Code Pvt Ltd.",
    duration: "May 2022 – Jul 2022",
    type: "Full-time | Onsite",
    icon: <FaBriefcase className="text-red-500 text-3xl" />,
    details: [
      "Built a crypto trading application (BAAP Network) from scratch in React Native.",
      "Integrated real-time crypto APIs, charts, and wallet features",
      "Focused on performance, security, and onboarding flows.",
    ],
  },
  {
    role: "Frontend Developer (React.js)",
    company: "Wonder Pillars Technology",
    duration: "Sept 2021 – Apr 2022",
    type: "Full-time | Remote",
    icon: <FaBriefcase className="text-teal-500 text-3xl" />,
    details: [
      "Contributed to React.js development for Vantana Taxi App, Stock Market Dashboard, and Fexicel Platform.",
      "Designed and integrated interactive UI components with API integration",
      "Optimized frontend performance and cross-browser compatibility.",
    ],
  },
];

const ExperiencePage = () => {
  return (
    <MainLayout>
      <section className="min-h-screen py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-black">
          💼 Professional Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white dark:bg-white-800 shadow-md rounded-xl p-6 relative group hover:shadow-lg transition-all"
            >
              <div className="absolute -top-6 left-6 bg-white rounded-full p-2 shadow-md">
                {exp.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mt-8">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-600">{exp.company}</p>
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>{exp.duration}</span>
                <span>{exp.type}</span>
              </div>

              <ul className="mt-4 text-sm text-gray-700 list-disc pl-5 space-y-1">
                {exp.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default ExperiencePage;
