"use client";

import { useNavContext } from "@/context/NavContext";
import navLinks from "@/lib/data/navLinks";
import { AnimatePresence, motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import Socials from "./_child/Socials";

const MobileNavbar = () => {
  const { navOpen } = useNavContext();

  const variants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {navOpen && (
        <motion.div
          className="md:hidden fixed top-[76px]  mx-4 sm:mx-6 left-0 right-0 bg-gray-50 dark:bg-neutral-900 z-30 overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
        >
          <ul className="font-medium flex flex-col gap-y-6 px-8 py-8 border border-gray-300 dark:border-gray-700 rounded-md shadow-md">
            {navLinks.map((menu, index) => (
              <MenuItem menu={menu} key={index} />
            ))}
            <li className="justify-end mt-4">
              <div className="w-full ">
                <Socials />
              </div>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
