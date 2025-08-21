import React from "react";
import { projects } from "../data/projects";
import { ProjectCodeBlock } from "./ProjectCodeBlock";

export function ProjectsSection() {
  const stickyClasses = [
    "sticky box-border max-w-2xl w-full mx-auto top-16",
    "sticky box-border max-w-2xl w-full mx-auto top-32",
    "sticky box-border max-w-2xl w-full mx-auto top-48",
    "sticky box-border max-w-2xl w-full mx-auto top-64",
  ];

  return (
    <div className="relative box-border z-50 my-12 md:my-24">
      <div className="sticky box-border top-10">
        <div className="absolute bg-violet-100 box-border blur-3xl h-20 opacity-30 translate-x-[50.0%] w-20 rounded-full left-0 -top-3"></div>
        <div className="relative items-center box-border flex justify-start">
          <span className="absolute text-xl bg-indigo-950 box-border block leading-7 w-fit px-5 py-3 rounded-md left-0">
            PROJECTS
          </span>
          <span className="bg-indigo-950 box-border block h-0.5 w-full"></span>
        </div>
      </div>
      <div className="box-border pt-24">
        <div className="box-border gap-x-6 flex flex-col gap-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={
                stickyClasses[index] ||
                "sticky box-border max-w-2xl w-full mx-auto top-16"
              }
            >
              <div className="items-center shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.3)_0px_0px_30px_0px] box-border flex justify-center rounded-bl rounded-br rounded-tl rounded-tr">
                <div className="relative bg-[linear-gradient(to_right,rgb(13,18,36),rgb(10,13,55))] box-border w-full border border-blue-950/60 rounded-lg border-solid">
                  <div className="box-border flex">
                    <div className="bg-[linear-gradient(to_right,rgba(0,0,0,0),rgb(236,72,153),rgb(124,58,237))] box-border h-px w-full"></div>
                    <div className="bg-[linear-gradient(to_right,rgb(124,58,237),rgba(0,0,0,0))] box-border h-px w-full"></div>
                  </div>
                  <div className="relative box-border px-4 py-3 md:px-8 md:py-5">
                    <div className="absolute box-border flex translate-y-[-50.0%] top-2/4">
                      <div className="bg-red-400 box-border h-2 w-2 rounded-full md:h-3 md:w-3"></div>
                      <div className="bg-orange-400 box-border h-2 w-2 ml-1 rounded-full md:h-3 md:w-3 md:ml-2"></div>
                      <div className="bg-green-200 box-border h-2 w-2 ml-1 rounded-full md:h-3 md:w-3 md:ml-2"></div>
                    </div>
                    <p className="text-teal-400 text-base box-border leading-6 text-center ml-3 md:text-xl md:leading-7">
                      {project.name}
                    </p>
                  </div>
                  <ProjectCodeBlock project={project} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
