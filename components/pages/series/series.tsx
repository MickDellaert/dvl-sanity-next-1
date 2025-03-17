"use client";

import React from "react";
import SeriesDescription from "./series-description";
import { CategoryQueryResult } from "@/sanity.types";
import StickyTitle from "../../shared/sticky-title";
import dynamic from "next/dynamic";
import SeriesSkeleton from "./series-skeleton";
import SeriesNoMasonry from "./series-no-masonry";

const DynamicSeriesMasonry = dynamic(() => import("./series-masonry"), {
  ssr: false,
  loading: () => <SeriesSkeleton />,
});

export default function Series({
  categoryData,
}: {
  categoryData: CategoryQueryResult;
}) {
  return (
    <div className="">
      <StickyTitle stickyTitle="Series" />
      <div className="flex flex-col gap-y-12 lg:gap-y-64">
        {categoryData.map((category) => (
          <section key={category._id} className="grid grid-cols-12">
            <div className="top-32 col-span-12 col-start-1 mb-20 self-start md:col-span-10 lg:sticky lg:col-span-3 lg:mb-0">
              <SeriesDescription category={category} />
            </div>
            <div className="top-32 col-span-12 -mb-10 hidden h-fit lg:sticky lg:col-span-7 lg:col-start-6 lg:block">
              <DynamicSeriesMasonry category={category} />
            </div>
            <div className="top-32 col-span-12 lg:hidden">
              <SeriesNoMasonry category={category} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
