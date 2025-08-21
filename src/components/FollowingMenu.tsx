"use client";
import React from "react";
import { gsap } from "gsap";

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
  locate: string;
}

interface FlowingMenuProps {
  items?: MenuItemProps[];
}

const FlowingMenu: React.FC<FlowingMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <nav className="flex flex-col h-full m-0 p-0">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ link, text, image, locate }) => {
  const itemRef = React.useRef<HTMLDivElement>(null);
  const marqueeRef = React.useRef<HTMLDivElement>(null);
  const marqueeInnerRef = React.useRef<HTMLDivElement>(null);

  const animationDefaults = { duration: 0.6, ease: "expo" };

  const findClosestEdge = (
    mouseX: number,
    mouseY: number,
    width: number,
    height: number
  ): "top" | "bottom" => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist =
      Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  const animateIn = (x: number, y: number, rect: DOMRect) => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;
    const edge = findClosestEdge(
      x - rect.left,
      y - rect.top,
      rect.width,
      rect.height
    );
    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" })
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" });
  };

  const animateOut = (x: number, y: number, rect: DOMRect) => {
    if (!marqueeRef.current || !marqueeInnerRef.current) return;
    const edge = findClosestEdge(
      x - rect.left,
      y - rect.top,
      rect.width,
      rect.height
    );
    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" })
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" });
  };

  const handleMouseEnter = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = itemRef.current?.getBoundingClientRect();
    if (rect) animateIn(ev.clientX, ev.clientY, rect);
  };

  const handleMouseLeave = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = itemRef.current?.getBoundingClientRect();
    if (rect) animateOut(ev.clientX, ev.clientY, rect);
  };

  // 👉 Touch Support for mobile
  const handleTouchStart = (ev: React.TouchEvent<HTMLAnchorElement>) => {
    const rect = itemRef.current?.getBoundingClientRect();
    if (rect) animateIn(ev.touches[0].clientX, ev.touches[0].clientY, rect);
  };

  const handleTouchEnd = (ev: React.TouchEvent<HTMLAnchorElement>) => {
    const rect = itemRef.current?.getBoundingClientRect();
    if (rect)
      animateOut(
        ev.changedTouches[0].clientX,
        ev.changedTouches[0].clientY,
        rect
      );
  };

  return (
    <div
      className="flex-1 relative overflow-hidden text-center shadow-[0_-1px_0_0_#fff]"
      ref={itemRef}
    >
      <a
        className="flex items-center justify-center h-16 sm:h-20 relative cursor-pointer uppercase no-underline font-semibold text-white text-[2.5vh] sm:text-[4vh] px-2"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {text} <span className="ml-2 text-xs sm:text-sm">({locate})</span>
      </a>

      {/* Marquee */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none bg-white translate-y-[101%] hidden sm:block"
        ref={marqueeRef}
      >
        <div className="h-full w-[200%] flex" ref={marqueeInnerRef}>
          <div className="flex items-center relative h-full w-[200%] will-change-transform animate-marquee">
            <span className="text-[#060010] uppercase font-normal text-[3vh] leading-[1.2] px-2">
              {text}
            </span>
            <div
              className="w-[100px] h-[50px] mx-2 rounded-[20px] bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowingMenu;
