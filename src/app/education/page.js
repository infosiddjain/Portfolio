"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import { MainLayout } from "@/layouts";

const educationData = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Chaudhary Charan Singh University, Meerut",
    duration: "2017 - 2020",
    status: "Completed",
    score: "65%",
    icon: <FaUniversity className="text-indigo-600 text-3xl" />,
  },
  {
    title: "12th Pass",
    institution: "Tagore Public School Hapur",
    duration: "2015",
    score: "52%",
    icon: <FaGraduationCap className="text-pink-600 text-3xl" />,
  },
  {
    title: "10th Pass",
    institution: "Tagore Shiksha Sadan Inter College, Hapur",
    duration: "2013",
    score: "59%",
    icon: <FaSchool className="text-green-600 text-3xl" />,
  },
];

const EducationPage = () => {
  return (
    <MainLayout>
      <section className="min-h-screen  py-12 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-black">
          🎓 Education Timeline
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-start md:items-stretch gap-12 max-w-7xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white dark:bg-white-800 rounded-2xl shadow-lg p-6 w-full md:w-1/3 relative group hover:scale-[1.02] transition-all"
            >
              <div className="absolute -top-6 left-6 bg-white dark:bg-gray-900 rounded-full p-2 shadow-md">
                {edu.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-black mt-8">
                {edu.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-black-300">
                {edu.institution}
              </p>
              <div className="flex justify-between text-sm text-black-500 dark:text-black-400 mt-4">
                <span>{edu.duration}</span>
                {edu.status && <span>{edu.status}</span>}
                <span>{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default EducationPage;
