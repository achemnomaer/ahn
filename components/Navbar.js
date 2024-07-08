/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import NavContextProvider from "@/context/NavContext";
import navLinks from "@/lib/data/navLinks";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";
import MenuOpenButton from "./MenuOpenButton";
import MobileNavbar from "./MobileNavbar";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <NavContextProvider>
      <div className="w-full bg-neutral-100 dark:bg-neutral-900 shadow-md fixed  z-30 transition-transform duration-300">
        <div className=" w-full px-4 mx-auto max-w-6xl sm:px-6  xl:px-0">
          <nav className="relative py-4 flex flex-wrap items-center justify-between mx-auto ">
            {/* Logo  */}

            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              <Image
                src={`${
                  currentTheme === "light"
                    ? "/logo-light.svg"
                    : "/logo-dark.svg"
                }`}
                width={120}
                height={120}
                priority
                alt="logo"
              />
            </ScrollLink>

            {/* menu item */}
            <div className="flex gap-x-8">
              <div className="hidden md:flex text-center  items-center">
                <ul className="flex gap-x-6 w-full justify-between">
                  {navLinks.map((menu, index) => (
                    <li className="mr-3 nav__item" key={index}>
                      <ScrollLink
                        offset={-50}
                        spy={true}
                        activeClass="bg-primary px-3 py-1.5 rounded-md text-white hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white"
                        to={menu.href}
                        smooth={true}
                        duration={500}
                        className="cursor-pointer text-lg font-semibold hover:bg-gray-200  dark:hover:bg-gray-600 px-3 py-1.5 rounded-md"
                      >
                        {menu.title}
                      </ScrollLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-x-3 mr-3 space-x-4 md:flex nav__item">
                <span className="my-auto">
                  <ThemeSwitcher />
                </span>
                <span className="md:hidden my-auto">
                  <MenuOpenButton />
                </span>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <MobileNavbar />
    </NavContextProvider>
  );
};

export default Navbar;
