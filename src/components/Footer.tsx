import React from "react";

export function Footer() {
  return (
    <footer className="relative text-white bg-gray-900 border-t border-gray-700">
      {/* Gradient Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6/12 h-px bg-[linear-gradient(to_right,rgba(0,0,0,0),rgb(139,92,246),rgba(0,0,0,0))]" />

      <div className="max-w-6xl mx-auto px-6 py-8 md:flex md:items-center md:justify-between">
        {/* Left Side */}
        <p className="text-sm text-gray-400 text-center md:text-left mb-4 md:mb-0">
          © Developer Portfolio by{" "}
          <a
            href="https://www.linkedin.com/in/infosiddjain/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            Siddharth Jain
          </a>
        </p>

        {/* Right Side */}
        <div className="flex justify-center md:justify-end gap-6">
          <a
            href="https://github.com/infosiddjain"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 uppercase text-gray-300 hover:text-white transition-colors text-sm"
          >
            <img
              src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-24.svg"
              alt="GitHub Star"
              className="h-4 w-4"
            />
            Star
          </a>
          <a
            href="https://github.com/infosiddjain/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 uppercase text-gray-300 hover:text-white transition-colors text-sm"
          >
            <img
              src="https://c.animaapp.com/mek409lvoDLlSz/assets/icon-25.svg"
              alt="GitHub Fork"
              className="h-4 w-4"
            />
            Fork
          </a>
        </div>
      </div>
    </footer>
  );
}
