"use client";
import { motion } from "framer-motion";
import useInViewAnimation from "./useInViewAnimation";

const ScrollAnimation = (props) => {
  const [ref, controls] = useInViewAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default ScrollAnimation;
