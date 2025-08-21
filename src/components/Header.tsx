"use client";
import React, { useState } from "react";
import { navigationItems } from "@/data/navigation";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="box-border">
      <div className="items-center box-border flex justify-between py-5">
        <div className="items-center box-border flex shrink-0">
          <a
            href="/"
            className="text-teal-400 text-3xl font-bold box-border block leading-9"
          >
            SIDDHARTH JAIN
          </a>
        </div>
        <ul className="text-sm items-start box-border flex flex-col h-[1000px] leading-5 list-none max-h-0 opacity-0 w-full mt-4 pl-0 md:flex-row md:h-auto md:max-h-[1000px] md:opacity-100 md:w-auto md:mt-0">
          {navigationItems.map((item) => (
            <li
              key={item.id}
              className={
                item.id === "about"
                  ? "box-border text-left"
                  : "box-border text-left ml-0 md:ml-1"
              }
            >
              <a
                href={item.href}
                className="box-border block outline-transparent outline-offset-2 outline outline-2 px-4 py-2"
              >
                <div className="box-border">{item.label}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
