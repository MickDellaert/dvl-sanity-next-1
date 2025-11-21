import { motion, useTransform, Variants, MotionValue } from "motion/react";
import { PortableText } from "next-sanity";
import SanityImage from "@/components/shared/sanity-image";
import ThreeArtParkSponsor from "./three-art-park-sponsor";
import { ThreeArtParkQueryResult } from "@/sanity.types";

type ThreeArtParkDescriptionType = {
  threeArtParkData: ThreeArtParkQueryResult;
  inViewVariant?: Variants;
  scrollYProgress: MotionValue<number>;
};

export default function ThreeArtParkDescription({
  threeArtParkData,
  inViewVariant,
  scrollYProgress,
}: ThreeArtParkDescriptionType) {
  const rotate: MotionValue<string> = useTransform(
    scrollYProgress,
    [0, 1],
    ["-25deg", "-5deg"],
  );

  return (
    <motion.div
      lang="nl"
      className="prose relative order-6 col-span-12 col-start-1 mt-24 hyphens-auto text-lg leading-normal text-stone-950 md:order-6 md:col-span-5 md:col-start-7 md:-mt-12 xl:ml-12 xl:pr-8 2xl:text-2xl 2xl:leading-normal"
    >
      {threeArtParkData?.description && (
        <motion.div>
          <PortableText value={threeArtParkData.description} />
        </motion.div>
      )}
      {threeArtParkData?.threeArtLogos?.[2] && (
        <motion.div
          variants={inViewVariant}
          className="pointer-events-none absolute -top-60 left-4 z-10 w-44 -rotate-12 md:-left-80 md:-top-72 md:h-72 md:w-72"
          style={{ rotate, originX: 0.5, originY: 0.5 }}
        >
          <SanityImage
            data={threeArtParkData.threeArtLogos[2]}
            dimensions={{
              _type: "sanity.imageDimensions",
              width: 1200,
              height: 1200,
            }}
            loading="eager"
          />
        </motion.div>
      )}
      <div className="mt-12 md:mt-20">
        <p className="mb-4 text-sm md:text-lg">In samenwerking met:</p>
        <ThreeArtParkSponsor
          threeArtSponsorLogos={threeArtParkData?.threeArtSponsorLogos ?? []}
        />
      </div>
    </motion.div>
  );
}
