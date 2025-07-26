"use client";
import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiGitlab,
  SiFigma,
  SiRedux,
  SiTailwindcss,
  SiPostman,
  SiVscodium,
  SiNpm,
  SiJirasoftware,
} from "react-icons/si";
import { FaReact, FaPaintBrush } from "react-icons/fa";
import { motion } from "framer-motion";
import { MainLayout } from "@/layouts";

const skills = [
  { name: "React.js", icon: <SiReact className="text-sky-500" />, level: 90 },
  {
    name: "React Native",
    icon: <FaReact className="text-cyan-500" />,
    level: 80,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-black" />,
    level: 85,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    level: 88,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-400" />,
    level: 92,
  },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-600" />, level: 95 },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" />, level: 90 },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600" />,
    level: 85,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-700 dark:text-black" />,
    level: 83,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    level: 80,
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-black dark:text-black" />,
    level: 92,
  },
  { name: "GitLab", icon: <SiGitlab className="text-orange-600" />, level: 75 },
  { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 70 },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-purple-600" />,
    level: 80,
  },
  {
    name: "REST API",
    icon: <SiPostman className="text-orange-500" />,
    level: 85,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-400" />,
    level: 88,
  },
  {
    name: "UI/UX Design",
    icon: <FaPaintBrush className="text-rose-400" />,
    level: 75,
  },
  {
    name: "VS Code",
    icon: <SiVscodium className="text-blue-600" />,
    level: 90,
  },
  { name: "NPM", icon: <SiNpm className="text-red-500" />, level: 85 },
  {
    name: "Jira",
    icon: <SiJirasoftware className="text-blue-700" />,
    level: 70,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
};

const SkillsPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-black">
            My Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="bg-white dark:bg-white-800 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 flex flex-col cursor-pointer items-center group"
                title={`${skill.name} - ${skill.level}%`}
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-black-200 text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SkillsPage;
