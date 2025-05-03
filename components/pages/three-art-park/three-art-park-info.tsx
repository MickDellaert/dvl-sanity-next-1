import SanityImage from "@/components/shared/sanity-image";
import StickyTitle from "@/components/shared/sticky-title";
import { PortableText } from "next-sanity";
import ThreeArtParkSponsor from "./three-art-park-sponsor";
import { ThreeArtParkQueryResult } from "@/sanity.types";

const getColSpan = (i: number) => {
  if (i === 0)
    return "md:order-2 col-span-5 col-start-1 mt-12 md:mt-0 order-3 row-span-2 md:col-span-3 md:col-start-10 md:row-span-2";
  if (i === 1)
    return "col-span-12 col-start-1 order-2 md:order-3 md:col-span-7 md:col-start-1 md:row-span-2 mt-12";
  if (i === 2)
    return "md:col-span-3 col-span-5 col-start-8 order-4 md:order-4 md:col-start-9 md:row-span-2";
  if (i === 3)
    return "md:col-span-4 md:order-5 col-span-5 col-start-7 order-5 md:col-start-2 md:row-span-3 md:mt-20 ";
  return "col-span-2";
};

export default async function ThreeArtParkInfo({
  threeArtParkData,
}: {
  threeArtParkData: ThreeArtParkQueryResult;
}) {
  return (
    <div className="mb-40">
      <StickyTitle stickyTitle="3 ART PARK" />
      <div className="mb-40 mt-12 grid auto-rows-auto grid-cols-12 gap-2 gap-y-8 md:mt-24 md:gap-y-20 xl:gap-4 xl:gap-y-40">
        <div className="relative col-span-12 col-start-1 md:order-1 md:col-span-5 md:col-start-4 md:pt-8">
          <p
            lang="nl"
            className="hyphens-auto text-3xl leading-tight 2xl:text-[52px] 2xl:leading-[60px]"
          >
            {threeArtParkData?.titleText}
          </p>
          {threeArtParkData?.threeArtLogos?.[0] && (
            <div className="pointer-events-none absolute -bottom-44 right-0 z-10 h-44 w-44 -rotate-0 md:-left-72 md:-top-4 md:h-64 md:w-64">
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
        {threeArtParkData?.threeArtIllustrations?.map(
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
        <div
          lang="nl"
          className="prose relative order-6 col-span-11 col-start-2 mt-12 hyphens-auto text-lg leading-normal text-black md:order-6 md:col-span-5 md:col-start-7 md:-mt-12 xl:ml-12 xl:pr-8 2xl:text-2xl 2xl:leading-normal"
        >
          {threeArtParkData?.description && (
            <PortableText value={threeArtParkData.description} />
          )}
          {threeArtParkData?.threeArtLogos?.[2] && (
            <div className="pointer-events-none absolute -left-4 -top-56 z-10 h-40 w-40 -rotate-6 md:-left-64 md:-top-72 md:h-60 md:w-60">
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
  );
}
