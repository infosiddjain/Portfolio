import { skills } from "@/data/skills";
import React from "react";

export interface Skill {
  readonly id: string;
  readonly name: string;
  readonly iconSrc: string;
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="box-border">
      <div className="relative items-center box-border flex flex-col h-fit justify-center min-w-fit w-36 m-3 rounded-lg md:m-5">
        <div className="bg-slate-900 box-border h-full w-full border border-slate-800 rounded-lg">
          <div className="items-center box-border gap-x-3 flex flex-col justify-center gap-y-3 p-6">
            <div className="box-border h-8 md:h-10">
              <img
                alt={skill.name}
                src={skill.iconSrc}
                className="aspect-square box-border h-full max-w-full rounded-lg"
              />
            </div>
            <p className="text-sm box-border leading-5 md:text-lg md:leading-7">
              {skill.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <div className="relative box-border z-50 border-slate-800 my-12 border-t border-solid md:my-24">
      {/* violet blur background */}
      <div className="absolute bg-violet-100 box-border blur-3xl h-[100px] opacity-20 translate-x-[50%] w-[100px] rounded-full left-[42%] top-6"></div>

      {/* gradient line */}
      <div className="box-border flex justify-center -translate-y-px">
        <div className="box-border w-9/12">
          <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0),rgb(139,92,246),rgba(0,0,0,0))] box-border h-px w-full"></div>
        </div>
      </div>

      {/* section title */}
      <div className="box-border flex justify-center my-5 py-0 md:py-8">
        <div className="items-center box-border flex">
          <span className="bg-indigo-950 box-border block h-0.5 w-24"></span>
          <span className="text-xl bg-indigo-950 box-border block leading-7 w-fit px-5 py-2 rounded-md">
            Skills
          </span>
          <span className="bg-indigo-950 box-border block h-0.5 w-24"></span>
        </div>
      </div>

      {/* scrolling skill list */}
      <div className="box-border w-full my-12">
        <div className="relative box-border flex overflow-hidden w-full">
          <div className="flex animate-marquee-left">
            {/* First row */}
            <div className="flex shrink-0">
              {skills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
            {/* Duplicate row */}
            <div className="flex shrink-0">
              {skills.map((skill) => (
                <SkillCard key={`duplicate-${skill.id}`} skill={skill} />
              ))}
              s
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
