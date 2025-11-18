"use client";

import React from "react";
import StickyTitle from "../../shared/sticky-title";
import ThreeArtParkExhibitionsData from "./three-art-park-exhibitions-data";
import { ThreeArtParkQueryResult } from "@/sanity.types";

import dynamic from "next/dynamic";
import SeriesSkeleton from "../series/series-skeleton";
import { motion } from "motion/react";

const DynamicThreeArtParkExhibitionsImagesMasonry = dynamic(
  () => import("./three-art-park-exhibitions-images-masonry"),
  {
    ssr: false,
    loading: () => <SeriesSkeleton />,
  },
);

const inViewVariant = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { margin: "-12%", once: false },
  transition: { duration: 0.7 },
};

export default function ThreeArtParkExhibitions({
  threeArtParkData,
}: {
  threeArtParkData: ThreeArtParkQueryResult;
}) {
  return (
    <section className="mt-32 md:mt-28">
      <StickyTitle stickyTitle="Recent Exhibition" />
      <div className="relative grid grid-cols-12 gap-x-4 xl:gap-x-4">
        {threeArtParkData?.threeArtParkExpo?.map((expo) => (
          <React.Fragment key={expo._id}>
            <motion.div
              {...inViewVariant}
              key={expo._id}
              className="top-40 col-span-12 mb-8 flex flex-col gap-4 self-start md:sticky md:col-span-5"
            >
              <ThreeArtParkExhibitionsData expo={expo} />
            </motion.div>
            <motion.div
              {...inViewVariant}
              className="col-span-12 md:col-span-6 md:col-start-7"
            >
              <DynamicThreeArtParkExhibitionsImagesMasonry expo={expo} />
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
