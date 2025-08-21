"use client";

import React from "react";

const demoItems = [
  {
    link: "#",
    text: "MERN Stack Certification",
    locate: "Udemy (Online)",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "React Native Specialist Certification",
    image: "https://picsum.photos/600/400?random=2",
    locate: "Udemy (Online)",
  },
  {
    link: "#",
    text: "Digital Marketing Certification",
    image: "https://picsum.photos/600/400?random=3",
    locate: "Udemy (Online)",
  },
  {
    link: "#",
    text: "Web Development Bootcamp",
    image: "https://picsum.photos/600/400?random=4",
    locate: "Udemy (Online)",
  },
  {
    link: "#",
    text: "Hi-Tech Certification",
    image: "https://picsum.photos/600/400?random=5",
    locate: "Ghaziabad (Offline)",
  },
];

export function CertificatesSection() {
  return (
    <section className="relative my-16">
      <div className="box-border flex justify-center my-5 py-0 md:py-8">
        <div className="items-center box-border flex">
          <span className="bg-indigo-950 box-border block h-0.5 w-24"></span>
          <span className="text-xl bg-indigo-950 box-border block leading-7 w-fit px-5 py-2 rounded-md">
            Certificates
          </span>
          <span className="bg-indigo-950 box-border block h-0.5 w-24"></span>
        </div>
      </div>

      <div className="grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto">
        {demoItems.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300"
          >
            <div className="h-40 w-full overflow-hidden">
              <img
                src={item.image}
                alt={item.text}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.text}
              </h3>
              <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-2 py-1 rounded-md">
                {item.locate}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
