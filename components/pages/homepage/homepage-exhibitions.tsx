import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import { HomePageQueryResult } from "@/sanity.types";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import StickyTitle from "./sticky-title";
import { sanityFetch } from "@/sanity/lib/live";
import { homePageExhibitionQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export default async function HomepageExhibitions() {
  const { data: homepageData } = await sanityFetch({
    query: homePageExhibitionQuery,
  });

  if (!homepageData) {
    notFound();
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { urlFor } = useImageUrlBuilder();

  const formatDate = (dateString: string | undefined) => {
    if (!dateString) return ""; // Handle empty or undefined dates
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("nl-BE", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(date);
  };

  const { homepageExpo } = homepageData;
  console.log(homepageData);

  return (
    <section className="mt-60">
      <StickyTitle stickyTitle="Exhibition" />
      <div className="relative flex justify-between gap-x-24">
        {homepageExpo?.map((expo) => (
          <React.Fragment key={expo._id}>
            <div
              key={expo._id}
              className="sticky top-40 flex w-5/12 flex-col gap-4 self-start "
            >
              <div className="flex w-fit flex-col">
                {/* <h2 className="py-4 text-5xl">—</h2> */}

                <h2
                  className="relative mt-8 flex flex-row text-5xl
                before:absolute before:-top-8 before:left-0 before:h-1 before:w-12 before:bg-black before:content-['']"
                >
                  {expo.name}
                </h2>
              </div>
              <div className="flex gap-4 text-4xl">
                <h2>{formatDate(expo.date?.start)}</h2> <h3>—</h3>
                <h2>{formatDate(expo.date?.end)}</h2>
              </div>
              {/* <h2 className="text-5xl">—</h2> */}
              <div className="mt-4 text-2xl leading-9">
                {expo.description && <PortableText value={expo.description} />}
                {/* <h2 className="text-5xl">—</h2> */}
              </div>
            </div>
            <div className="flex w-8/12 flex-col gap-8">
              {expo.poster && (
                <Image
                  src={urlFor(expo.poster)
                    .width(expo.posterDimensions?.width || 500)
                    .height(expo.posterDimensions?.height || 500)
                    .fit("crop")
                    .url()}
                  alt=""
                  width={500}
                  height={500}
                  className="mb-20 self-start"
                />
              )}

              {expo.images?.map((image) => (
                <div key={image.ref} className=" self-end">
                  <Image
                    src={
                      image
                        ? urlFor(image || "")
                            .width(image.imageDimensions?.width || 400)
                            .height(image.imageDimensions?.height || 400)
                            .fit("crop")
                            .url()
                        : ""
                    }
                    alt=""
                    width={image.imageDimensions?.width || 400}
                    height={image.imageDimensions?.width || 400}
                    className=""
                  />
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
