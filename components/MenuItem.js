"use client";

import { useNavContext } from "@/context/NavContext";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ menu }) => {
  const { setNavOpen } = useNavContext();
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
    >
      <ScrollLink
        spy={true}
        to={menu.href}
        smooth={true}
        duration={500}
        onClick={() => setNavOpen(false)}
        className="cursor-pointer text-3xl font-bold no-underline  text-neutral-900 dark:text-neutral-100 hover:text-primary focus:text-primary dark:hover:text-primary dark:focus:text-primary focus:outline-none"
      >
        {menu.title}
      </ScrollLink>
    </motion.li>
  );
};
