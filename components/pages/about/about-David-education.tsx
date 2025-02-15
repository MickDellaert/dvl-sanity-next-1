import { sanityFetch } from "@/sanity/lib/live";
import {
  educationDavidQuery,
  educationDavidQueryAlt,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";
import StickyTitle from "../homepage/sticky-title";

export default async function AboutDavidEducation() {
  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return ""; // Handle empty or undefined dates
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("nl-BE", {
      // day: "2-digit",
      // month: "2-digit",
      year: "numeric",
    }).format(date);
  };
  const { data: educationDavidAltData } = await sanityFetch({
    query: educationDavidQueryAlt,
  });

  if (!educationDavidAltData) {
    notFound();
  }

  console.log(educationDavidAltData);

  return (
    <div className="relative mt-24 grid grid-cols-12 gap-x-20">
      <StickyTitle stickyTitle="Education" />
      <div className="col-span-5 col-start-7 [&_li:last-child]:mb-0 [&_li]:mb-4 ">
        {educationDavidAltData.education?.map((education, i) => (
          <div
            key={i}
            className="mb-2 flex flex-row border-b border-black pb-2"
          >
            <div className="flex w-4/12 flex-col justify-center text-3xl">
              <h3>{formatDate(education.duration?.start)}</h3>
              <h3>
                {formatDate(education.duration?.end) == "2025"
                  ? "Present"
                  : formatDate(education.duration?.end)}
              </h3>
            </div>
            <div className="flex w-fit flex-col justify-center">
              <h3 className="text-2xl">{education.schoolDirection}</h3>
              <div className="flex flex-row text-xl">
                <h3 className="whitespace-pre">{education.schoolName}, </h3>
                <h3>{education.schoolAddress?.city}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
