import { sanityFetch } from "@/sanity/lib/live";
import { exhibitionDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";
import StickyTitle from "../homepage/sticky-title";
import { ExhibitionDavidQueryResult } from "@/sanity.types";

export default async function AboutDavidExhibitions() {
  const { data: exhibitionDavidData } = (await sanityFetch({
    query: exhibitionDavidQuery,
  })) as { data: ExhibitionDavidQueryResult };

  if (!exhibitionDavidData) {
    notFound();
  }

  console.log(exhibitionDavidData);

  return (
    <div className="relative mt-24 grid grid-cols-12 gap-x-20">
      <StickyTitle stickyTitle="Exhibitions & Publications" />
      <div className="col-span-4 col-start-7 text-xl ">
        {/* {exhibitionDavidData?.name && (
        <PortableText value={aboutDavidData.educationText} />
      )} */}
        {exhibitionDavidData.map((exhibition) => (
          <div key={exhibition._id}>{exhibition.name}</div>
        ))}
      </div>
    </div>
  );
}
