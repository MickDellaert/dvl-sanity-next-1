import SanityImage from "@/components/shared/sanity-image";
import { ThreeArtParkQueryResult } from "@/sanity.types";
import { motion, MotionValue, useTransform, Variants } from "motion/react";
import React, { RefObject } from "react";

type ThreeArtParkTitleProps = {
  threeArtParkData: ThreeArtParkQueryResult;
  scrollRef: RefObject<null>;
  inViewVariant: Variants;
  scrollYProgress: MotionValue<number>;
};

export default function ThreeArtParkTitle({
  threeArtParkData,
  inViewVariant,
  scrollYProgress,
}: ThreeArtParkTitleProps) {
  const ySlow = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  return (
    <motion.div
      variants={inViewVariant}
      style={{ y: ySlow }}
      className="relative z-20 col-span-11 col-start-1 md:order-1 md:col-span-5 md:col-start-4 md:pt-8"
    >
      <p
        lang="nl"
        className="text-3xl leading-tight 2xl:text-[52px] 2xl:leading-[60px]"
      >
        {threeArtParkData?.titleText}
      </p>

      {threeArtParkData?.threeArtLogos?.[0] && (
        <div className="pointer-events-none absolute -bottom-48 -right-8 z-50 w-44 -rotate-0 md:-left-72 md:-top-4 md:h-64 md:w-64">
          <SanityImage
            data={threeArtParkData.threeArtLogos[0]}
            dimensions={{
              _type: "sanity.imageDimensions",
              width: 1200,
              height: 1200,
            }}
          />
        </div>
      )}
    </motion.div>
  );
}
