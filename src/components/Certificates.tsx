"use client";

import React from "react";
import FlowingMenu from "./FollowingMenu";

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
    image: "https://picsum.photos/600/400?random=4",
    locate: "Ghaziabad (Offline)",
  },
];

export function CertificatesSection() {
  return (
    <div className="relative box-border z-50 border-slate-800 my-12 border-t border-solid md:my-24">
      <img
        alt="Hero"
        src="https://c.animaapp.com/mek409lvoDLlSz/assets/section.svg"
        className="absolute text-transparent aspect-[auto_1572_/_795] box-border max-w-full w-[1572px] -z-10 top-0"
      />
      <div className="box-border flex justify-center -translate-y-px">
        <div className="box-border w-9/12">
          <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0),rgb(139,92,246),rgba(0,0,0,0))] box-border h-px w-full"></div>
        </div>
      </div>
      <div className="box-border flex justify-center my-5 py-0 md:py-8">
        <div className="items-center box-border flex">
          <span className="bg-indigo-950 box-border block h-0.5 w-24"></span>
          <span className="text-xl bg-indigo-950 box-border block leading-7 w-fit px-5 py-2 rounded-md">
            Certificates
          </span>
          <span className="bg-indigo-950 box-border block h-0.5 w-24"></span>
        </div>
      </div>
      <div className="box-border py-8">
        <div style={{ height: "600px", position: "relative" }}>
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </div>
  );
}
