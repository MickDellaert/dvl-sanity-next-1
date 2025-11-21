"use client";

import StickyTitle from "@/components/shared/sticky-title";

import { ThreeArtParkQueryResult } from "@/sanity.types";
import { useScroll } from "motion/react";
import { useRef } from "react";
import ThreeArtParkIllustration from "./three-art-park-illustration";
import ThreeArtParkTitle from "./three-art-park-title";
import ThreeArtParkDescription from "./three-art-park-description";

const colSpanMap: Record<number, string> = {
  0: "md:order-2 col-span-5 col-start-1 mt-12 md:mt-0 order-3 md:col-span-3 md:col-start-10 md:row-span-2",
  1: "col-span-11 col-start-1 order-2 md:order-3 md:col-span-7 md:col-start-1 md:row-span-2 mt-12",
  2: "md:col-span-3 col-span-6 col-start-7 order-4 md:order-4 md:col-start-9 md:row-span-2",
  3: "md:col-span-4 md:order-5 col-span-8 col-start-4 order-5 md:col-start-2 md:row-span-3 md:mt-20 ",
};

export const getColSpan = (i: number) => colSpanMap[i] ?? "col-span-2";

export const inViewVariant = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { margin: "-2%", once: false },
  transition: { duration: 0.7 },
};

export default function ThreeArtParkInfo({
  threeArtParkData,
}: {
  threeArtParkData: ThreeArtParkQueryResult;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 50%", "end start"],
  });

  // const ySlow = useTransform(scrollYProgress, [0, 1], [`0%`, `80%`]);
  // const rotate = useTransform(scrollYProgress, [0, 1], ["-25deg", "-5deg"]);

  return (
    <div ref={ref} className="">
      <StickyTitle stickyTitle="About" />
      <div className="mb-28 mt-12 grid auto-rows-auto grid-cols-12 gap-1 gap-y-16 md:mb-0 md:mt-24 md:gap-y-20 xl:gap-4 xl:gap-y-40">
        <ThreeArtParkTitle
          threeArtParkData={threeArtParkData}
          scrollRef={ref}
          scrollYProgress={scrollYProgress}
          inViewVariant={inViewVariant}
        />
        {threeArtParkData?.threeArtIllustrations?.map(
          (threeArtIllustration, i: number) => (
            <ThreeArtParkIllustration
              key={i}
              threeArtIllustration={threeArtIllustration}
              scrollYProgress={scrollYProgress}
              index={i}
              inViewVariant={inViewVariant}
            />
          ),
        )}

        <ThreeArtParkDescription
          threeArtParkData={threeArtParkData}
          // scrollRef={ref}
          scrollYProgress={scrollYProgress}
          inViewVariant={inViewVariant}
        />
      </div>
    </div>
  );
}
