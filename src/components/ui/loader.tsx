"use client";

import { motion } from "framer-motion";

export const LoaderOne = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      {[0, 1, 2, 3, 4].map((index) => (
        <motion.div
          key={index}
          className="w-2 h-8 bg-primary rounded-full"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: index * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
