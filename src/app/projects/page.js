"use client";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { MainLayout } from "@/layouts";
import { projects } from "@/constants";

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
