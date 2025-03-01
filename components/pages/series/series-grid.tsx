import React from "react";
import SeriesDescription from "./series-description";
import SeriesMasonry from "./series-masonry";
import { CategoryQueryResult } from "@/sanity.types";
import StickyTitle from "../../shared/sticky-title";

export default function SeriesGrid({
  categoryData,
}: {
  categoryData: CategoryQueryResult;
}) {
  return (
    <div className="relative ">
      <StickyTitle stickyTitle="Series" />

      {categoryData.map((category) => (
        <section key={category._id} className="mb-44 mt-16 grid grid-cols-12">
          <div className="top-32 col-span-12 col-start-1 mb-32 self-start md:sticky md:col-span-3 md:mb-0">
            <SeriesDescription category={category} />
          </div>
          <div className="top-32 col-span-12 -mb-10 h-fit md:sticky md:col-span-7 md:col-start-6 lg:-mr-[80px]">
            <SeriesMasonry category={category} />
          </div>
        </section>
      ))}
    </div>
  );
}
