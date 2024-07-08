"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ProgressAnimation({ level }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  return (
    <motion.div
      ref={ref}
      className="bg-primary h-full rounded-sm"
      initial={{ width: 0 }}
      animate={{ width: inView ? `${level}%` : 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  );
}
