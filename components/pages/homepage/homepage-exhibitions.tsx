import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import { HomePageQueryResult } from "@/sanity.types";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import StickyTitle from "../../shared/sticky-title";
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

  return (
    <section className="mt-28 md:mt-60">
      <StickyTitle stickyTitle="Exhibition" />
      <div className="relative grid grid-cols-12 gap-x-4 md:gap-x-24">
        {homepageExpo?.map((expo) => (
          <React.Fragment key={expo._id}>
            <div
              key={expo._id}
              className="top-40 col-span-12 mb-8 flex flex-col gap-4 self-start md:sticky md:col-span-6"
            >
              <div className="flex w-fit flex-col">
                {/* <h2 className="py-4 text-5xl">—</h2> */}

                <h2
                  className="relative mb-0 mt-8 flex flex-row
                text-4xl before:absolute before:-top-8 before:left-0 before:h-1 before:w-12 before:bg-black before:content-[''] lg:mb-4 lg:text-5xl"
                >
                  {expo.name}
                </h2>
              </div>
              <div className="flex flex-row flex-wrap gap-4 text-2xl leading-4 lg:text-4xl lg:leading-6">
                <h3>{formatDate(expo.date?.start)}</h3> <h3>—</h3>
                <h3>{formatDate(expo.date?.end)}</h3>
              </div>
              {/* <h2 className="text-5xl">—</h2> */}
              <div className="mt-0 text-lg leading-snug lg:mt-4 lg:text-2xl lg:leading-9">
                {expo.description && <PortableText value={expo.description} />}
                {/* <h2 className="text-5xl">—</h2> */}
              </div>
            </div>
            <div className="col-span-12 ml-auto flex flex-col gap-7 md:col-span-6 md:col-start-7">
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
                  className="mb-16 self-start"
                />
              )}

              {expo.images?.map((image) => (
                <div key={image.ref} className="self-end px-5 md:px-0">
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
