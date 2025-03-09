import React from "react";
import StickyTitle from "../../shared/sticky-title";
import { PortableText } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { bioDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import AboutDavidImage from "./about-david-image";

export default async function AboutDavidBio() {
  const { data: bioDavidData } = await sanityFetch({ query: bioDavidQuery });

  if (!bioDavidData) {
    notFound();
  }

  const { portrait, dimensions } = bioDavidData;

  return (
    <div className="relative grid grid-cols-12 gap-x-2 lg:gap-x-20">
      <StickyTitle stickyTitle="About" />
      <div className="relative order-last col-span-12 col-start-1 mt-16 self-start lg:sticky lg:top-32 lg:order-2 lg:col-span-5 lg:col-start-1">
        {portrait && (
          <AboutDavidImage data={portrait} dimensions={dimensions} />
        )}
      </div>
      <div
        className="relative col-span-12 col-start-1 mt-16 self-start bg-gray-50 pt-8 text-xl before:absolute before:left-0 before:top-0 before:h-[4px] before:w-16 before:bg-black
                   before:content-[''] md:text-2xl lg:sticky lg:top-16 lg:order-3 lg:col-span-5 lg:col-start-7 lg:text-3xl lg:leading-snug"
      >
        <div className="mb-8">
          {bioDavidData?.description && (
            <PortableText value={bioDavidData.description} />
          )}
        </div>
      </div>
    </div>
  );
}
