import React from "react";
import ChromaGrid from "./ChromaCard";

const items = [
  {
    image: "./logo.jpg",
    title: "Siddharth Jain",
    subtitle: "Frontend Developer",
    handle: "@infosiddjain",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://www.linkedin.com/in/infosiddjain/",
  },
];

export function AboutSection() {
  return (
    <div className="relative box-border my-12 md:my-16">
      <div className="absolute items-center box-border hidden flex-col -right-8 top-16 md:flex">
        <span className="text-xl bg-indigo-950 box-border inline leading-7 min-h-0 min-w-0 transform-none w-fit px-5 py-2 rounded-md md:block md:min-h-[auto] md:min-w-[auto] md:rotate-90">
          ABOUT ME
        </span>
        <span className="bg-indigo-950 box-border inline h-36 min-h-0 min-w-0 w-0.5 md:block md:min-h-[auto] md:min-w-[auto]"></span>
      </div>
      <div className="box-border gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:gap-x-16 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-16">
        <div className="box-border order-2 md:order-1">
          <p className="text-teal-400 text-xl font-medium box-border leading-7 uppercase mb-5">
            Who I am?
          </p>
          <p className="text-gray-200 text-sm box-border leading-5 md:text-lg md:leading-7">
            Full Stack Developer and current Software Engineer with over 4+
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
        <div className="box-border flex justify-center order-1 md:order-2">
          <div style={{ position: "relative" }}>
            <ChromaGrid
              items={items}
              radius={300}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
