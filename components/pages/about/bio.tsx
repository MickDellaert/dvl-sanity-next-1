import React from "react";
import StickyTitle from "../homepage/sticky-title";
import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { bioDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import AboutImage from "./about-image";

export default async function Bio() {
  const { data: bioDavidData } = await sanityFetch({ query: bioDavidQuery });

  if (!bioDavidData) {
    notFound();
  }

  const { portrait, dimensions } = bioDavidData;

  return (
    <div className="relative grid grid-cols-12 gap-x-2 lg:gap-x-20">
      <StickyTitle stickyTitle="About" />
      <div className="sticky top-32 order-last col-span-12 col-start-1 mt-16 self-start lg:order-2 lg:col-span-5 lg:col-start-1">
        {portrait && <AboutImage data={portrait} dimensions={dimensions} />}
      </div>
      <div
        className="sticky top-32 col-span-12 col-start-1 mt-16 self-start bg-gray-50 pt-8 text-3xl leading-normal before:absolute before:left-0
                   before:top-0 before:h-[4px] before:w-16 before:bg-black before:content-[''] lg:top-16 lg:order-3 lg:col-span-5 lg:col-start-7 "
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
