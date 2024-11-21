"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import ThemeSwitcher from "./ThemeSwitcher";

export const Navbar1 = () => {
  return (
    <div className="w-full fixed top-4 z-30  ">
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
      className="z-50 relative mx-auto flex w-fit rounded-full border-2 border-neutral-400 dark:border-neutral-500 bg-white dark:bg-neutral-900 p-1"
    >
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
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>About</Tab>

      <Tab setPosition={setPosition}>Projects</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>

      <span className="my-auto px-5">
        <ThemeSwitcher />
      </span>

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
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-sm font-medium uppercase text-gray-900 hover:text-white dark:text-white md:px-5 md:py-3 md:text-base"
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
      className="absolute z-0 h-7 rounded-full bg-primary text-white md:h-12"
    />
  );
};
