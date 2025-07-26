"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";
import { MainLayout } from "@/layouts";

const certificates = [
  {
    title: "MERN Stack Certification",
    provider: "Udemy",
  },
  {
    title: "React Native Specialist Certification",
    provider: "Udemy",
  },
  {
    title: "Digital Marketing Certification",
    provider: "Udemy",
  },
  {
    title: "Web Development Bootcamp",
    provider: "Udemy",
  },
  {
    title: "Hi-Tech Certification",
    provider: "Hi-Tech Ghaziabad",
  },
];

const CertificatesPage = () => {
  return (
    <MainLayout>
      <section className="min-h-screen py-12 px-6 ">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          🏅 Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-xl transition-shadow"
            >
              <div className="p-3 bg-indigo-100 rounded-full">
                <FaCertificate className="text-indigo-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500">{cert.provider}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default CertificatesPage;
