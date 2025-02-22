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
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "./device-size";

export default function Logo() {
  const path = usePathname();

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // target: ref,
    offset: ["start start", "end start"],
  });

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.lg });
  const initialFontSize = isMobile ? "46px" : "52px";

  const opacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.06],
    [initialFontSize, "36px"],
  );

  return (
    <div className="w-11/12 md:w-10/12 xl:w-5/12 2xl:w-4/12 ">
      {/* <Link href="/" className="text-2xl font-medium uppercase tracking-wider md:text-3xl"> */}
      {/* <Link href="/" className="text-4xl font-medium md:text-4xl mix-blend-difference invert z-20">
        David Van Loon
      </Link> */}
      <Link href="/" className="leading-12 relative z-[1000] text-5xl">
        {path === "/" ? (
          <motion.h1
            initial={{ fontSize: initialFontSize }}
            style={{ fontSize: fontSize }}
            className="inline align-top"
          >
            David Van Loon
          </motion.h1>
        ) : (
          <motion.h1
            initial={{ fontSize: initialFontSize }}
            animate={{ fontSize: "36px" }}
            className="inline align-top"
          >
            David Van Loon
          </motion.h1>
        )}
      </Link>
      {path === "/" && (
        <motion.h2
          ref={ref}
          style={{ opacity: opacity, fontSize: fontSize }}
          className="inline pb-12 align-top text-5xl leading-[1.1]"
        >
          {""} is an Antwerp and Mortehan based contemporary artist.
        </motion.h2>
      )}
    </div>
  );
}
