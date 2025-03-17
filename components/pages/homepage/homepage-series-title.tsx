"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

export default function HomepageSeriesTitle() {
  const { scrollYProgress } = useScroll({
    // target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <>
      <div className="sticky top-4 z-20 -mt-[12svh] flex flex-row items-center mix-blend-difference invert md:top-8 md:-mt-[12svh] lg:-mt-[100px]">
        <div className="flex flex-col text-3xl md:text-4xl">
          <motion.h2 style={{ opacity: opacity }}>Scroll down for</motion.h2>
          <h2 className="z-50 leading-8 ">Painting Series</h2>
        </div>
      </div>
    </>
  );
}
