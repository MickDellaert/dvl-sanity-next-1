import { sanityFetch } from "@/sanity/lib/live";
import {
  educationDavidQuery,
  educationDavidQueryAlt,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";
import StickyTitle from "../homepage/sticky-title";
import { formatDate } from "@/sanity/lib/utils";

export default async function AboutDavidEducationGrid() {
  const dateFormat: Intl.DateTimeFormatOptions = { year: "numeric" };

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
      <div className="col-span-7 col-start-6 grid grid-cols-subgrid gap-y-4">
        {educationDavidAltData.education?.map((education, i) => (
          <div
            key={i}
            className="relative col-span-7 grid grid-cols-subgrid 
                       after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-full after:bg-black after:content-['']"
          >
            <div className="col-span-2 col-start-2 content-center text-3xl">
              <h3>{formatDate(education.duration?.start, dateFormat)}</h3>
              {/* <h3> — </h3> */}
              <h3>
                {formatDate(education.duration?.end, dateFormat) == "2025"
                  ? "Present"
                  : formatDate(education.duration?.end, dateFormat)}
              </h3>
            </div>
            <div className="col-span-4 content-center">
              <h3 className="text-2xl">{education.schoolDirection}</h3>
              <div className="flex w-fit flex-row justify-start text-xl">
                <h3 className="whitespace-pre-wrap">
                  {education.schoolName}, {education.schoolAddress?.city}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
