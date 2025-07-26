"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleRoute = (path: string) => {
    setMenuOpen(false);
    router.push(path);
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Skills", path: "/skills" },
    { label: "Education", path: "/education" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Certificates", path: "/certificates" },
    { label: "Resume", path: "/resume" },
  ];

  return (
    <div className="relative w-full z-50">
      {/* Header bar */}
      <div className="flex justify-between items-center p-6 md:px-18  shadow-md">
        <h3 className="text-xl font-semibold lg:ml-2">Siddharth Jain</h3>

        {/* ✅ Desktop menu list */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleRoute(item.path)}
              className={`text-base font-medium cursor-pointer transition ${
                pathname === item.path
                  ? "text-orange-600 underline underline-offset-4"
                  : "text-gray-800 hover:text-orange-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ✅ Mobile hamburger only */}
        <button
          className="text-3xl font-bold text-black cursor-pointer md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          &#9776;
        </button>
      </div>

      {/* 🔘 Overlay on menu open */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-2xl font-bold cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col items-start px-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleRoute(item.path)}
              className={`text-base font-medium transition ${
                pathname === item.path
                  ? "text-orange-600 underline underline-offset-4"
                  : "text-gray-700 hover:text-orange-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
