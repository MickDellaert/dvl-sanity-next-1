"use client";

import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import { HomePageQueryResult } from "@/sanity.types";
import Image from "next/image";
import React from "react";

type HomepageExhibitions = NonNullable<HomePageQueryResult>["homepageExpo"];
export default function HomepageExhibition({
  homepageExpo,
}: {
  homepageExpo: HomepageExhibitions;
}) {
  const { urlFor } = useImageUrlBuilder();

  return (
    <>
      <div>
        <h2 className="text-3xl">homepage-exhibition</h2>
      </div>
      {homepageExpo?.map((expo) => (
        <div key={expo._id}>
          <h2 className="pb-4 text-7xl">{expo.name}</h2>
          <Image
            src={
              expo.poster
                ? urlFor(expo.poster)
                    .width(expo.posterDimensions?.width || 400)
                    .height(expo.posterDimensions?.height || 400)
                    .url()
                : "https://placehold.co/400x400/png"
            }
            alt=""
            width={400}
            height={400}
          />
        </div>
      ))}
    </>
  );
}
