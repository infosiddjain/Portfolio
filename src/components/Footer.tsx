import React from "react";

export function Footer() {
  return (
    <div className="relative text-white bg-gray-900 box-border border-gray-700 border-t border-solid">
      <div className="box-border max-w-none mx-auto p-6 md:max-w-[1216px] md:px-12 md:py-10">
        <div className="box-border flex justify-center -z-40">
          <div className="absolute bg-[linear-gradient(to_right,rgba(0,0,0,0),rgb(139,92,246),rgba(0,0,0,0))] box-border h-px w-6/12 top-0"></div>
        </div>
        <div className="items-center box-border flex flex-col justify-between md:flex-row">
          <p className="text-sm box-border leading-5">
            © Developer Portfolio by{" "}
            <a
              href="https://www.linkedin.com/in/abu-said-bd/"
              className="text-teal-400 box-border"
            >
              Abu Said
            </a>
          </p>
          <div className="items-center box-border gap-x-5 flex gap-y-5">
            <a
              href="https://github.com/said7388/developer-portfolio"
              className="items-center box-border gap-x-2 flex gap-y-2 uppercase"
            >
              <img
                src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-24.svg"
                alt="Icon"
                className="box-border h-4 w-4"
              />
              <span className="box-border block">Star</span>
            </a>
            <a
              href="https://github.com/said7388/developer-portfolio/fork"
              className="items-center box-border gap-x-2 flex gap-y-2 uppercase"
            >
              <img
                src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-25.svg"
                alt="Icon"
                className="box-border h-4 w-4"
              />
              <span className="box-border block">Fork</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
