"use client";
import React from "react";
import SpotlightCard from "./SpotlightCard";
import { experiences } from "@/data/experiences";

const ExperienceSection: React.FC = () => {
  return (
    <div>
      <div className="box-border flex justify-center my-5 py-0 md:py-8">
        <div className="items-center box-border flex">
          <span className="bg-indigo-950 box-border block h-0.5 w-24"></span>
          <span className="text-xl bg-indigo-950 box-border block leading-7 w-fit px-5 py-2 rounded-md">
            Experiences
          </span>
          <span className="bg-indigo-950 box-border block h-0.5 w-24"></span>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp) => (
          <SpotlightCard
            key={exp.id}
            className="custom-spotlight-card cursor-pointer"
            // spotlightColor="rgba(0, 229, 255, 0.2)"
          >
            <div className="flex flex-col space-y-3">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-neutral-300">{exp.company}</p>
              </div>
              <div className="flex flex-col text-xs text-neutral-400">
                <span>{exp.period}</span>
                <span>{exp.location}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm text-neutral-300">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
