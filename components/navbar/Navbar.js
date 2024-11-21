"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FlipLink } from "./FlipLink";

export const Navbar = () => {
  return (
    <div className="w-full fixed top-4">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white dark:bg-neutral-900 p-1"
    >
      <FlipLink>Home</FlipLink>
      <FlipLink>About</FlipLink>

      <ScrollLink
        to="home"
        smooth={true}
        duration={500}
        className="cursor-pointer my-auto pl-6"
      >
        <Image
          src={`${
            currentTheme === "light" ? "/logo-light.svg" : "/logo-dark.svg"
          }`}
          width={120}
          height={120}
          priority
          alt="logo"
        />
      </ScrollLink>
      <FlipLink>Projects</FlipLink>
      <FlipLink>Contact</FlipLink>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
