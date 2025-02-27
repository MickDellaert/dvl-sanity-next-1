"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function HomepageSeriesTitleScroll() {
  const { scrollYProgress } = useScroll({
    // target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <div className="pb-8 mix-blend-difference invert">
      <div className="sticky top-8 z-20 flex flex-col self-start text-4xl">
        <motion.h2 className="whitespace-nowrap" style={{ opacity: opacity }}>
          Scroll down for
        </motion.h2>
        <h2 className="whitespace-nowrap leading-8">Painting Series</h2>
      </div>
    </div>
  );
}
