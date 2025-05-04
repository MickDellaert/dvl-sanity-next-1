"use client";

import React from "react";
import StickyTitle from "../../shared/sticky-title";
import ThreeArtParkExhibitionsData from "./three-art-park-exhibitions-data";
import { ThreeArtParkQueryResult } from "@/sanity.types";

import dynamic from "next/dynamic";
import SeriesSkeleton from "../series/series-skeleton";

const DynamicThreeArtParkExhibitionsImagesMasonry = dynamic(
  () => import("./three-art-park-exhibitions-images-masonry"),
  {
    ssr: false,
    loading: () => <SeriesSkeleton />,
  },
);

export default function ThreeArtParkExhibitions({
  threeArtParkData,
}: {
  threeArtParkData: ThreeArtParkQueryResult;
}) {
  return (
    <section className="mt-24 md:mt-60">
      <StickyTitle stickyTitle="Recent Exhibition" />
      <div className="relative grid grid-cols-12 gap-x-4 xl:gap-x-4">
        {threeArtParkData?.threeArtParkExpo?.map((expo) => (
          <React.Fragment key={expo._id}>
            <ThreeArtParkExhibitionsData expo={expo} />
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <DynamicThreeArtParkExhibitionsImagesMasonry expo={expo} />
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
