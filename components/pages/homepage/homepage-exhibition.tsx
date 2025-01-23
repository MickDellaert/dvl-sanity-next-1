"use client";

import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import { HomePageQueryResult } from "@/sanity.types";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";

type HomepageExhibitions = NonNullable<HomePageQueryResult>["homepageExpo"];
export default function HomepageExhibition({
  homepageExpo,
}: {
  homepageExpo: HomepageExhibitions;
}) {
  const { urlFor } = useImageUrlBuilder();

  // console.log(homepageExpo);
  console.log(homepageExpo[0].images[0].asset.metadata.dimensions.height);

  return (
    <div className="relative flex justify-between">
      {homepageExpo.map((expo) => (
        <React.Fragment key={expo._id}>
          <div className="sticky top-40 flex w-1/2 flex-col gap-4 self-start">
            <div className="flex">
              <h2 className="flex text-5xl">{expo.name}</h2>
            </div>
            <div className="flex gap-4 text-3xl">
              <h2>{expo.date.start}</h2> <h3>---</h3>
              <h2>{expo.date.end}</h2>
            </div>
            <div className="text-xl">
              <PortableText value={expo.description} />
            </div>
          </div>
          {/* <div className="left-auto w-1/2">
            <Image
              src={
                expo.poster
                  ? urlFor(expo.poster)
                      .width(expo.posterDimensions?.width || 400)
                      .height(expo.posterDimensions?.height || 400)
                      .fit("crop")
                      .url()
                  : "https://placehold.co/400x400/png"
              }
              alt=""
              width={400}
              height={400}
            />
          </div> */}
        </React.Fragment>
      ))}

      <div className="flex w-1/2 flex-col gap-8">
        <Image
          src={
            homepageExpo[0].poster
              ? urlFor(homepageExpo[0].poster)
                  .width(homepageExpo[0].posterDimensions?.width || 400)
                  .height(homepageExpo[0].posterDimensions?.height || 400)
                  .fit("crop")
                  .url()
              : "https://placehold.co/400x400/png"
          }
          alt=""
          width={400}
          height={400}
          className="mb-20 self-end"
        />

        {homepageExpo[0].images.map((image) => (
          <div key={image._id} className=" self-end">
            <Image
              src={urlFor(image.asset)
                .width(image.asset.metadata.dimensions.width)
                .height(image.asset.metadata.dimensions.height)
                .fit("crop")
                .url()}
              alt=""
              width={image.asset.metadata.dimensions.width}
              height={image.asset.metadata.dimensions.height}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
