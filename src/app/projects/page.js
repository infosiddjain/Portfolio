"use client";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { MainLayout } from "@/layouts";

const projects = [
  {
    name: "Meta Blogger",
    url: "https://www.metablogger.in/",
  },
  {
    name: "Dil ki Bhakti",
    url: "https://www.dilkibhakti.in/",
  },
  {
    name: "Learn Refill",
    url: "https://www.learnrefill.com/",
  },
  {
    name: "Image Convertor",
    url: "https://www.imageconvertor.xyz/",
  },
  {
    name: "Wintej Gaming Platform",
    url: "https://www.wintej.com/",
  },
  {
    name: "Dank Social App (Play Store)",
    url: "https://play.google.com/store/apps/details?id=com.joindank.dankapp&pcampaignid=web_share",
  },
  {
    name: "Dhanu Web",
    url: "https://dhanucoin.in/",
  },
  {
    name: "Sahej Health App (iOS)",
    url: "https://apps.apple.com/in/app/sahej-health-app/id6469026236",
  },
];

const ProjectsPage = () => {
  return (
    <MainLayout>
      <div className="min-h-screen py-12 px-6 ">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          🚀 Projects
        </h2>

        <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="border border-gray-200 hover:border-indigo-500 p-5 rounded-xl shadow-sm hover:shadow-lg transition-all flex items-center justify-between gap-4 bg-gray-50"
            >
              <span className="text-lg font-medium text-gray-800">
                {project.name}
              </span>
              <FaExternalLinkAlt className="text-indigo-600" />
            </motion.a>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProjectsPage;
