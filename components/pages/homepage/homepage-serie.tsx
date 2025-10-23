"use client";

import Link from "next/link";
import Image from "next/image";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageDimensions,
  SanityImageHotspot,
  SanityImageMetadata,
} from "@/sanity.types";

import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

type HomepageCategory = {
  _id: string;
  name: string | null;
  slug: string | null;
  projects: {
    projectImage: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: "image";
    } | null;
    projectImageDimensions: SanityImageDimensions | null;
    projectImageMetadata: SanityImageMetadata | null;
    projectImagePalette: string | null;
  } | null;
};

const subTitle = {
  initial: { opacity: 1 },
  animate: { opacity: 0 },
};

const imageTextHover = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

const imageColorHover = {
  initial: { opacity: 0 },
  animate: { opacity: 0.6 },
};

export default function HomepageSerie({
  category,
}: {
  category: HomepageCategory;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { margin: "-20px", once: true });
  const [isHovered, setIsHovered] = useState(false);
  const { urlFor } = useImageUrlBuilder();

  return (
    <motion.div
      className="col-span-12 flex justify-center md:col-span-5 md:col-start-2 md:block md:last:col-span-6 
    md:last:col-start-4 md:[&:nth-child(4n+2)]:col-span-4 md:[&:nth-child(4n+2)]:col-start-9 md:[&:nth-child(4n+3)]:col-span-5 md:[&:nth-child(4n+3)]:col-start-1
    md:[&:nth-child(4n+4)]:col-span-5 md:[&:nth-child(4n+4)]:col-start-8"
      // whileHover="animate"
    >
      <Link className="" href={`series/${category.slug}`}>
        <motion.div className="group inline-block text-left md:block">
          <motion.div
            className="relative z-50 justify-center md:max-h-full"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover="animate"
          >
            <motion.div
              style={{
                backgroundColor:
                  category.projects?.projectImagePalette ?? "transparent",
                opacity: 0,
              }}
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              viewport={{ margin: "-100px", once: true }}
              transition={{ duration: 0.7 }}
              whileHover="animate"
              // className="absolute z-50 h-full w-full transition-all duration-700 group-hover:opacity-40 "
              className="absolute z-0 h-full w-full"
              variants={imageColorHover}
            ></motion.div>
            <motion.h3
              className="pointer-events-none absolute left-1/2 top-1/2 z-50 mb-4 mt-4 hidden w-fit -translate-x-1/2 -translate-y-1/2 text-center text-3xl uppercase text-white 
                  opacity-0 md:block md:text-4xl xl:text-5xl"
              variants={imageTextHover}
            >
              {category.name}
            </motion.h3>
            {category.projects?.projectImage ? (
              <motion.div className="z-30" whileHover="animate">
                <Image
                  src={urlFor(category.projects.projectImage)
                    .width(
                      category.projects.projectImageDimensions?.width || 800,
                    )
                    .height(
                      category.projects.projectImageDimensions?.height || 800,
                    )
                    .fit("crop")
                    .url()}
                  alt="alt"
                  width={800}
                  height={800}
                  className="max-h-80 w-full object-contain md:max-h-full"
                />
              </motion.div>
            ) : (
              <div className="flex aspect-square flex-col items-center justify-center bg-stone-200">
                <p>series image not available</p>
              </div>
            )}
          </motion.div>
          <motion.h3
            ref={ref}
            className="mt-3 text-lg uppercase tracking-tight md:mt-6 md:text-3xl"
            // variants={subTitle}
            // animate={{ opacity: isHovered ? 0 : 1 }}
            animate={{ opacity: isHovered ? 0 : isInView ? 1 : 0 }}
            initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            viewport={{ margin: "-20px", once: true }}
            transition={{ duration: 0.6 }}
          >
            {category.name}
          </motion.h3>
        </motion.div>
      </Link>
    </motion.div>
  );
}
