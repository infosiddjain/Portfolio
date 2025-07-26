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
    { label: "Skills", path: "/skills" },
    { label: "Education", path: "/education" },
    { label: "Experience", path: "/experience" },
    { label: "Certificates", path: "/certificates" },
  ];
  return (
    <div className="relative">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md md:px-10">
        <h3 className="text-xl font-semibold">Siddharth Jain</h3>
        <button
          className="text-3xl font-bold md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          &#9776;
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6">
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

      {/* Overlay Blur */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Slide-in Sidebar (Mobile Only) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-2xl font-bold"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
        </div>

        {/* Menu Items */}
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
