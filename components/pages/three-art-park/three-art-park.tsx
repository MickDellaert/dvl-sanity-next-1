import SanityImage from "@/components/shared/sanity-image";
import StickyTitle from "@/components/shared/sticky-title";
import { sanityFetch } from "@/sanity/lib/live";
import { threeArtParkQuery } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import { notFound } from "next/navigation";
import ThreeArtParkExpo from "./three-art-park-expo";
import ThreeArtParkSponsor from "./three-art-park-sponsor";

const getColSpan = (i: number) => {
  if (i === 0) return "col-span-3 col-start-10 row-span-2";
  if (i === 1) return "col-span-7 col-start-1 row-span-2 mt-12";
  if (i === 2) return "col-span-3 col-start-9 row-span-2";
  if (i === 3) return "col-span-4 col-start-2 row-span-3 mt-20 ";
  return "col-span-2";
};

export default async function ThreeArtPark() {
  const { data: threeArtParkData } = await sanityFetch({
    query: threeArtParkQuery,
  });

  if (!threeArtParkData) {
    notFound();
  }

  console.log(threeArtParkData);

  return (
    <div className="relative min-h-screen ">
      {/* <SanityImage
        data={threeArtParkData.threeArtLogos[1]}
        dimensions={{
          _type: "sanity.imageDimensions",
          width: 1200,
          height: 1200,
        }}
      /> */}
      <div className="mb-40">
        <StickyTitle stickyTitle="3 ART PARK" />
        <div className="mb-40 mt-24 grid auto-rows-auto grid-cols-12 gap-4 gap-y-40">
          <div className="relative col-span-5 col-start-4 pt-8">
            <p className="text-4xl leading-tight 2xl:text-[52px] 2xl:leading-[60px]">
              {threeArtParkData.titleText}
            </p>
            {threeArtParkData?.threeArtLogos?.[0] && (
              <div className="pointer-events-none absolute -left-72 -top-4 z-10 h-64 w-64 -rotate-0">
                <SanityImage
                  data={threeArtParkData.threeArtLogos[0]}
                  dimensions={{
                    _type: "sanity.imageDimensions",
                    width: 1200,
                    height: 1200,
                  }}
                />
              </div>
            )}
          </div>
          {/* <div className="col-span-12 grid grid-cols-12 gap-12 [&>div:first-child]:col-span-4"> */}
          {threeArtParkData.threeArtIllustrations?.map(
            (threeArtIllustration, i: number) => {
              const overlayImage =
                i === 1 && threeArtParkData.threeArtLogos
                  ? threeArtParkData.threeArtLogos[0]
                  : null;

              return (
                <div key={i} className={`${getColSpan(i)} relative`}>
                  <SanityImage
                    data={threeArtIllustration}
                    dimensions={threeArtIllustration.imageDimensions}
                  />

                  {/* {overlayImage && (
                    <div className="pointer-events-none absolute -right-28 -top-60 z-10 h-72 w-72">
                      <SanityImage
                        data={overlayImage}
                        dimensions={{
                          _type: "sanity.imageDimensions",
                          width: 1200,
                          height: 1200,
                        }}
                      />
                    </div>
                  )} */}
                </div>
              );
            },
          )}
          {/* </div> */}
          <div className="prose relative col-span-5 col-start-7 -mt-12 ml-12 pr-8 text-xl leading-normal text-black 2xl:text-2xl 2xl:leading-normal">
            {threeArtParkData.description && (
              <PortableText value={threeArtParkData.description} />
            )}
            {threeArtParkData?.threeArtLogos?.[2] && (
              <div className="pointer-events-none absolute -left-64 -top-72 z-10 h-60 w-60 -rotate-6">
                <SanityImage
                  data={threeArtParkData.threeArtLogos[2]}
                  dimensions={{
                    _type: "sanity.imageDimensions",
                    width: 1200,
                    height: 1200,
                  }}
                />
              </div>
            )}
            <div className="mt-20">
              <p className="mb-4 text-sm md:text-lg">In samenwerking met:</p>
              <ThreeArtParkSponsor />
            </div>
          </div>
        </div>
      </div>
      <ThreeArtParkExpo />
    </div>
  );
}
