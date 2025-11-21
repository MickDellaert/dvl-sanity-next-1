import SanityImage from "@/components/shared/sanity-image";
import {
  internalGroqTypeReferenceTo,
  SanityImageDimensions,
  ThreeArtParkQueryResult,
} from "@/sanity.types";
import { motion, MotionValue, useTransform, Variants } from "motion/react";
import { getColSpan } from "./three-art-park-info";

type ThreeArtIllustration = {
  asset: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  } | null;
  ref: string | null;
  imageDimensions: SanityImageDimensions | null;
};

type ThreeArtParkIllustrationProps = {
  threeArtIllustration: ThreeArtIllustration;
  scrollYProgress: MotionValue<number>;
  index: number;
  inViewVariant?: Variants;
};

export default function ThreeArtParkIllustration({
  threeArtIllustration,
  scrollYProgress,
  index,
  inViewVariant,
}: ThreeArtParkIllustrationProps) {
  const amplitude = 5 + index * 2;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`${amplitude}%`, `-${amplitude}%`],
  );

  return (
    <motion.div
      variants={inViewVariant}
      className={`${getColSpan(index)} relative`}
      style={{ y }}
    >
      <SanityImage
        data={threeArtIllustration}
        dimensions={threeArtIllustration.imageDimensions}
      />
    </motion.div>
  );
}
