"use client";

import Link from "next/link";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";

import { usePathname } from "next/navigation";

export default function Logo() {
  const path = usePathname();

  console.log(path);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const fontSize = useTransform(scrollYProgress, [0, 0.1], ["52px", "36px"]);

  return (
    <div className="w-6/12  2xl:w-1/3">
      {/* <Link href="/" className="text-2xl font-medium uppercase tracking-wider md:text-3xl"> */}
      {/* <Link href="/" className="text-4xl font-medium md:text-4xl mix-blend-difference invert z-20">
        David Van Loon
      </Link> */}
      <Link
        href="/"
        className="leading-12 z-20 text-5xl font-normal tracking-tight"
      >
        {path === "/" ? (
          <motion.h1
            initial={{ fontSize: "52px" }}
            style={{ fontSize: fontSize }}
          >
            David Van Loon
          </motion.h1>
        ) : (
          <motion.h1
            initial={{ fontSize: "52px" }}
            animate={{ fontSize: "36px" }}
          >
            David Van Loon
          </motion.h1>
        )}
      </Link>
      {path === "/" && (
        <motion.h2
          ref={ref}
          style={{ opacity: opacity, fontSize: fontSize }}
          className="leading-12 pb-12 text-5xl font-normal tracking-tight"
        >
          is an Antwerp and Mortehan based contemporary artist.
        </motion.h2>
      )}
    </div>
  );
}
