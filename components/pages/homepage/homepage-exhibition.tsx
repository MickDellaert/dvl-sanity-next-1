"use client";

import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import { HomePageQueryResult } from "@/sanity.types";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import StickyTitle from "./sticky-title";

type HomepageExhibitions = NonNullable<HomePageQueryResult>["homepageExpo"];
export default function HomepageExhibition({
  homepageExpo,
}: {
  homepageExpo: HomepageExhibitions;
}) {
  const { urlFor } = useImageUrlBuilder();

  // console.log(homepageExpo);
  // console.log(homepageExpo[0].images[0].asset.metadata.dimensions.height);

  return (
    <section className="mt-60">
      {/* <div className="sticky top-16 z-20 -mt-8 flex flex-row items-center text-2xl font-medium mix-blend-difference invert">
        <div className="flex flex-col">
          <h2 className="pb-8 text-4xl font-normal tracking-tight">
            Exposition
          </h2>
        </div>
      </div> */}
      <StickyTitle stickyTitle="Exhibition" />

      {/* <div className="sticky top-16 z-20 -mt-8 flex flex-row items-center text-2xl font-medium mix-blend-difference invert">
        <div className="flex flex-col">
          <h2 className="pb-8 text-4xl font-normal tracking-tight">
            Exposition
          </h2>
        </div>
      </div> */}
      <div className="relative flex justify-between gap-x-24">
        {homepageExpo?.map((expo, i) => (
          <React.Fragment key={i}>
            <div className="sticky top-28 flex w-5/12 flex-col gap-4 self-start ">
              <div className="flex w-fit flex-col ">
                <h2 className="py-4 text-5xl">—</h2>

                <h2 className="flex flex-row  text-5xl">{expo.name}</h2>
              </div>
              <div className="flex gap-4 text-4xl">
                <h2>{expo.date?.start}</h2> <h3>—</h3>
                <h2>{expo.date?.end}</h2>
              </div>
              {/* <h2 className="text-5xl">—</h2> */}
              <div className="mt-4 text-2xl leading-9">
                {expo.description && <PortableText value={expo.description} />}
                {/* <h2 className="text-5xl">—</h2> */}
              </div>

              {/* <Image
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
            /> */}
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

        <div className="flex w-8/12 flex-col gap-8">
          <Image
            src={
              homepageExpo?.[0]?.poster
                ? urlFor(homepageExpo[0].poster)
                    .width(homepageExpo[0].posterDimensions?.width || 500)
                    .height(homepageExpo[0]?.posterDimensions?.height || 500)
                    .fit("crop")
                    .url()
                : "https://placehold.co/400x400/png"
            }
            alt=""
            width={500}
            height={500}
            className="mb-20 self-start"
          />

          {homepageExpo?.[0]?.images?.map((image) => (
            <div key={image.asset?._id} className=" self-end">
              <Image
                src={
                  image.asset
                    ? urlFor({ ...image.asset, url: image.asset.url || "" })
                        .width(image.asset?.metadata?.dimensions?.width || 400)
                        .height(
                          image.asset?.metadata?.dimensions?.height || 400,
                        )
                        .fit("crop")
                        .url()
                    : ""
                }
                alt=""
                width={image.asset?.metadata?.dimensions?.width || 400}
                height={image.asset?.metadata?.dimensions?.height || 400}
                className=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
