import React from "react";
import { educations } from "../data/educations";

export function EducationSection() {
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
            Educations
          </span>
          <span className="bg-indigo-950 box-border block h-0.5 w-24"></span>
        </div>
      </div>
      <div className="box-border py-8">
        <div className="box-border gap-x-8 grid grid-cols-[repeat(1,minmax(0px,1fr))] gap-y-8 md:gap-x-16 md:grid-cols-[repeat(2,minmax(0px,1fr))] md:gap-y-16">
          <div className="items-start box-border flex justify-center">
            <div className="box-border h-3/4 w-9/12">
              <div className="box-border w-[95%]">
                <img
                  src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-10.svg"
                  alt="Icon"
                  className="box-border h-full w-full"
                />
              </div>
            </div>
          </div>
          <div className="box-border">
            <div className="box-border gap-x-6 flex flex-col gap-y-6">
              {educations.map((education) => (
                <div key={education.id} className="box-border">
                  <article className="relative text-gray-200 bg-gray-900 box-border h-fit w-full border border-slate-700 rounded-xl border-solid">
                    <div className="absolute box-border blur-md inset-0"></div>
                    <div className="relative text-white box-border p-3">
                      <img
                        alt="Hero"
                        src="https://c.animaapp.com/mek409lvoDLlSz/assets/blur-23.svg"
                        className="absolute text-transparent aspect-[auto_1080_/_200] box-border max-w-full opacity-80 w-[1080px] bottom-0"
                      />
                      <div className="box-border flex justify-center">
                        <p className="text-teal-400 text-xs box-border leading-4 md:text-sm md:leading-5">
                          {education.period}
                        </p>
                      </div>
                      <div className="items-center box-border gap-x-8 flex px-3 py-5">
                        <div className="text-violet-500 box-border">
                          <img
                            src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-9.svg"
                            alt="Icon"
                            className="box-border h-9 w-9"
                          />
                        </div>
                        <div className="box-border">
                          <p className="text-base font-medium box-border leading-6 uppercase mb-2 md:text-xl md:leading-7">
                            {education.degree}
                          </p>
                          <p className="text-sm box-border leading-5 md:text-base md:leading-6">
                            {education.institution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
