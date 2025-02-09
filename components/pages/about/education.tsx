import { sanityFetch } from "@/sanity/lib/live";
import { educationDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";
import StickyTitle from "../homepage/sticky-title";
import { PortableText } from "next-sanity";

export default async function Education() {
  const { data: educationDavidData } = await sanityFetch({
    query: educationDavidQuery,
  });

  if (!educationDavidData) {
    notFound();
  }

  return (
    <div className="relative mt-24 grid grid-cols-12 gap-x-20">
      <StickyTitle stickyTitle="Education" />
      <div className="col-span-4 col-start-7 text-xl [&_li:last-child]:mb-0 [&_li]:mb-4 ">
        {educationDavidData?.educationText && (
          <PortableText value={educationDavidData.educationText} />
        )}
      </div>
    </div>
  );
}
