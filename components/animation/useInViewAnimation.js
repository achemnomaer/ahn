"use client";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useInViewAnimation = (
  initial = { opacity: 0, y: 50 },
  animate = { opacity: 1, y: 0 }
) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animates only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  if (inView) {
    controls.start(animate);
  }

  return [ref, controls];
};

export default useInViewAnimation;
