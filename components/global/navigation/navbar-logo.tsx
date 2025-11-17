"use client";

import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "./device-size";
import { useEffect, useState } from "react";

export default function NavbarLogo({
  homepageDescription,
  openMenu,
}: {
  homepageDescription: string | null;
  openMenu: boolean;
}) {
  const path = usePathname();

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    // target: ref,
    offset: ["start start", "end start"],
  });

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const isMobile = useMediaQuery({ maxWidth: DeviceSize.md });

  const initialFontSize = isMobile ? "48px" : "60px";
  const targetFontSize = isMobile ? "30px" : "36px";

  const opacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  const fontSize = useTransform(
    scrollYProgress,
    [0, 0.06],
    [initialFontSize, targetFontSize],
  );

  // if (!hasMounted)
  //   return (
  //     <div className="w-10/12 text-balance text-[40px] leading-[1] md:w-8/12 md:text-[52px] xl:w-5/12 2xl:w-4/12">
  //       {/* <Link href="/" className="text-2xl font-medium uppercase tracking-wider md:text-3xl"> */}
  //       {/* <Link href="/" className="text-4xl font-medium md:text-4xl mix-blend-difference invert z-20">
  //     David Van Loon
  //   </Link> */}
  //       <Link href="/" className="relative z-[1000] ">
  //         {path === "/" ? (
  //           <h1 className="inline align-top  ">David van Loon</h1>
  //         ) : (
  //           <h1 className="inline align-top  ">David Van Loon</h1>
  //         )}
  //       </Link>
  //       {path === "/" && (
  //         <h2 ref={ref} className="inline pb-12 align-top">
  //           {""} is an Antwerp and Mortehan based contemporary artist.
  //         </h2>
  //       )}
  //     </div>
  //   );

  if (!hasMounted) return <div></div>;

  if (hasMounted)
    return (
      <motion.div
        className="w-10/12 text-balance leading-[1] md:w-8/12 xl:w-5/12 2xl:w-4/12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* <Link href="/" className="text-2xl font-medium uppercase tracking-wider md:text-3xl"> */}
        {/* <Link href="/" className="text-4xl font-medium md:text-4xl mix-blend-difference invert z-20">
        David Van Loon
      </Link> */}
        <Link href="/" className="relative z-[1000] ">
          {/* {path === "/" ? (
            <motion.h1
              initial={{ fontSize: initialFontSize }}
              style={{ fontSize: fontSize }}
              className="z-50 inline align-top "
            >
              David van Loon
            </motion.h1>
          ) : (
            <motion.h1
              initial={{ fontSize: initialFontSize }}
              animate={{ fontSize: targetFontSize }}
              className="z-50 inline align-top "
            >
              David Van Loon
            </motion.h1>
          )} */}

          <motion.h1
            initial={{ fontSize: initialFontSize }}
            animate={path === "/" ? undefined : { fontSize: targetFontSize }}
            style={path === "/" ? { fontSize: fontSize } : undefined}
            className="z-50 inline text-balance align-top"
          >
            {openMenu
              ? "David van Loon"
              : path === "/"
                ? "David van Loon"
                : path === "/3-art-park"
                  ? "3 Art Park"
                  : "David van Loon"}
          </motion.h1>
        </Link>
        {path === "/" && (
          <motion.h1
            ref={ref}
            style={{ opacity: opacity, fontSize: fontSize }}
            className="inline text-balance pb-12 align-top"
          >
            {/* {""} is an Antwerp and Mortehan based contemporary artist. */}
            {` ${homepageDescription}`}
          </motion.h1>
        )}
      </motion.div>
    );
}
