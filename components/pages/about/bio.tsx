import React from "react";
import StickyTitle from "../homepage/sticky-title";
import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";
import { bioDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import BioImage from "./bioImage";

export default async function Bio() {
  const { data: bioDavidData } = await sanityFetch({ query: bioDavidQuery });

  if (!bioDavidData) {
    notFound();
  }

  return (
    <div className="relative grid grid-cols-12 gap-x-20">
      <StickyTitle stickyTitle="About" />
      <BioImage data={bioDavidData} />
      <div className="sticky top-16 col-span-5 col-start-7 mt-16 self-start text-3xl leading-10">
        <div className="mb-8">
          {bioDavidData?.description && (
            <PortableText value={bioDavidData.description} />
          )}
        </div>
      </div>
    </div>
  );
}
