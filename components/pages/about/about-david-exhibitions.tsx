import { sanityFetch } from "@/sanity/lib/live";
import { exhibitionDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";
import StickyTitle from "../homepage/sticky-title";
import {
  ExhibitionDavidQueryResult,
  ExhibitionWithoutFilterQueryResult,
} from "@/sanity.types";

export default async function AboutDavidExhibitions() {
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return ""; // Handle empty or undefined dates
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("nl-BE", {
      // day: "2-digit",
      // month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  const { data: exhibitionDavidData } = (await sanityFetch({
    query: exhibitionDavidQuery,
  })) as { data: ExhibitionWithoutFilterQueryResult };

  if (!exhibitionDavidData) {
    notFound();
  }

  console.log(exhibitionDavidData);

  return (
    <div className="relative mt-24 grid grid-cols-12 gap-x-20 gap-y-2">
      <StickyTitle stickyTitle="Exhibitions & Publications" />
      <div className="col-span-6 col-start-7 [&_li:last-child]:mb-0 [&_li]:mb-4 ">
        {exhibitionDavidData?.map((exhibition, i) => (
          <div
            key={i}
            className="mb-2 flex flex-row border-b border-black pb-2"
          >
            <div className="flex w-4/12 flex-col justify-center text-3xl">
              <h3>{formatDate(exhibition.date?.start)}</h3>
              <h3>
                {formatDate(exhibition.date?.end) == "2025"
                  ? "Present"
                  : formatDate(exhibition.date?.end)}
              </h3>
            </div>
            <div className="flex w-fit flex-col justify-center">
              <h3 className="text-2xl">{exhibition.name}</h3>
              <div className="flex flex-row text-xl">
                <h3 className="whitespace-pre">{exhibition.gallery?.name}, </h3>
                <h3>{exhibition.gallery?.address?.city}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
