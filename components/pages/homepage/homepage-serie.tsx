"use client";

import category from "@/sanity/schemas/documents/category-schema";
import Link from "next/link";
import Image from "next/image";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageDimensions,
  SanityImageHotspot,
  SanityImageMetadata,
} from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import { motion } from "framer-motion";
import duration from "@/sanity/schemas/objects/duration";

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

export default function HomepageSerie({
  category,
}: {
  category: HomepageCategory;
}) {
  const { urlFor } = useImageUrlBuilder();

  return (
    <div
      className="col-span-12 md:col-span-5 md:col-start-2 md:last:col-span-6 
    md:last:col-start-4 md:[&:nth-child(4n+2)]:col-span-3 md:[&:nth-child(4n+2)]:col-start-9 md:[&:nth-child(4n+3)]:col-span-5 md:[&:nth-child(4n+3)]:col-start-1
    md:[&:nth-child(4n+4)]:col-span-5 md:[&:nth-child(4n+4)]:col-start-8"
    >
      <Link className="" href={`series/${category.slug}`}>
        <div className="group cursor-pointer">
          <div className="relative z-10 overflow-hidden bg-gray-900">
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
              whileHover={{ opacity: 0.4 }}
              // className="absolute z-50 h-full w-full transition-all duration-700 group-hover:opacity-40 "
              className="absolute z-40 h-full w-full"
            ></motion.div>
            <h2
              className="absolute left-1/2 top-1/2 z-50 mb-4 mt-4 w-fit -translate-x-1/2 -translate-y-1/2 text-center text-5xl uppercase
           text-white opacity-0 transition-all duration-700 group-hover:opacity-90 "
            >
              {category.name}
            </h2>
            <motion.div className="">
              <Image
                // className="w-full transition-all duration-700 group-hover:scale-105 group-hover:opacity-70 group-hover:blur-sm"
                className="w-full"
                src={
                  category.projects?.projectImage
                    ? urlFor(category.projects.projectImage)
                        .width(
                          category.projects.projectImageDimensions?.width ||
                            400,
                        )
                        .height(
                          category.projects.projectImageDimensions?.height ||
                            400,
                        )
                        .fit("crop")
                        .url()
                    : "https://placehold.co/400x400/png"
                }
                alt="alt"
                width={400}
                height={400}
                // style={{
                //   backgroundColor:
                //     category.projects?.projectImagePalette ??
                //     "transparent",
                // }}
              />
            </motion.div>
          </div>

          <h2 className="relative mb-4 mt-4 w-fit text-center text-2xl uppercase text-black transition-all duration-700 group-hover:opacity-0 group-hover:invert">
            {category.name}
          </h2>
        </div>
      </Link>
    </div>
  );
}
