"use client";

import { Link as ScrollLink } from "react-scroll";

export default function DrawOutlineButton() {
  return (
    <ScrollLink
      to="projects"
      smooth={true}
      duration={500}
      className="cursor-pointer relative  items-center justify-start inline-block px-5 py-3 overflow-hidden font-medium  group"
    >
      <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-primary opacity-[3%]"></span>
      <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
      <span className="relative w-full text-left text-black dark:text-white transition-colors duration-200 ease-in-out group-hover:text-white">
        See my work
      </span>
      <span className="absolute inset-0 border-2 border-black dark:border-white "></span>
    </ScrollLink>
  );
}
