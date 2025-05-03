import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import StickyTitle from "../../shared/sticky-title";
import { sanityFetch } from "@/sanity/lib/live";
import { threeArtParkExhibitionQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import SanityImage from "@/components/shared/sanity-image";

export default async function ThreeArtParkExhibitions() {
  const { data: threeArtParkExpoData } = await sanityFetch({
    query: threeArtParkExhibitionQuery,
  });

  if (!threeArtParkExpoData) {
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

  const { threeArtParkExpo } = threeArtParkExpoData;

  return (
    <section className="mt-28 md:mt-60">
      <StickyTitle stickyTitle="3 ART PARK Exhibition" />
      <div className="relative grid grid-cols-12 gap-x-4 xl:gap-x-4">
        {threeArtParkExpo?.map((expo) => (
          <React.Fragment key={expo._id}>
            <div
              key={expo._id}
              className="top-40 col-span-12 mb-8 flex flex-col gap-4 self-start md:sticky md:col-span-4"
            >
              <div className="flex w-fit flex-col">
                {/* <h2 className="py-4 text-5xl">—</h2> */}

                <h2
                  className="relative mb-0 mt-8 flex flex-row text-4xl lg:text-4xl"
                  // before:absolute before:-top-8 before:left-0 before:h-1 before:w-12 before:bg-black before:content-['']
                >
                  {expo.name}
                </h2>
              </div>
              <div className="flex flex-row flex-wrap gap-4 text-2xl leading-4 lg:text-3xl lg:leading-6">
                <h3>{formatDate(expo.date?.start)}</h3> <h3>—</h3>
                <h3>{formatDate(expo.date?.end)}</h3>
              </div>
              {/* <h2 className="text-5xl">—</h2> */}
              <div className="mt-0 text-lg leading-snug lg:mt-4 lg:text-xl lg:leading-9">
                {expo.description && <PortableText value={expo.description} />}
                {/* <h2 className="text-5xl">—</h2> */}
              </div>
            </div>
            <div className="col-span-12 grid grid-cols-subgrid gap-4 md:col-span-8 md:col-start-5">
              <div className="col-span-8 grid grid-cols-subgrid gap-x-12 gap-y-20">
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
                    className="col-span-3 col-start-2 mb-16 self-start bg-stone-200 drop-shadow-2xl"
                  />
                )}

                <video
                  autoPlay
                  controls
                  muted
                  loop
                  playsInline
                  width="100% "
                  className="col-span-4 col-start-5"
                >
                  <source src={expo.video || undefined} type="video/mp4" />
                  Je browser ondersteunt dit videotype niet.
                </video>
                {expo.images?.map((expoImage) => (
                  <SanityImage
                    key={expoImage.ref}
                    data={expoImage}
                    dimensions={expoImage.imageDimensions}
                    className={`col-span-4 h-full w-full object-cover ${
                      expoImage.imageDimensions?.height &&
                      expoImage.imageDimensions?.width &&
                      expoImage.imageDimensions.height >
                        expoImage.imageDimensions.width
                        ? "row-span-2"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
