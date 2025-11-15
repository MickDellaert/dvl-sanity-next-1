"use client";

import SanityImage from "@/components/shared/sanity-image";
import { PortableText } from "next-sanity";
import { BioDavidQueryResult } from "@/sanity.types";
import { motion } from "framer-motion";

export default function AboutDavidBioContent({
  bioDavidData,
}: {
  bioDavidData: NonNullable<BioDavidQueryResult>;
}) {
  const { portrait, dimensions } = bioDavidData;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative order-last col-span-12 col-start-1 mt-16 self-start 
          lg:sticky lg:top-32 lg:order-2 lg:col-span-4 lg:col-start-1 2xl:col-span-3"
      >
        {portrait?.asset && (
          <SanityImage data={portrait} dimensions={dimensions} />
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative col-span-12 col-start-1 mt-16 self-start bg-gray-50 pt-8 text-xl before:absolute before:left-0 before:top-0 before:h-[4px] before:w-16 before:bg-black
                       before:content-[''] md:text-2xl lg:sticky lg:top-16 lg:order-3 lg:col-span-6 lg:col-start-6 lg:text-2xl lg:leading-snug 2xl:col-span-5 2xl:col-start-6"
      >
        <div className="mb-8 space-y-4">
          {bioDavidData?.description && (
            <PortableText value={bioDavidData.description} />
          )}
        </div>
      </motion.div>
    </>
  );
}
