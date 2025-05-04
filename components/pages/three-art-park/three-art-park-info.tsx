import SanityImage from "@/components/shared/sanity-image";
import StickyTitle from "@/components/shared/sticky-title";
import { PortableText } from "next-sanity";
import ThreeArtParkSponsor from "./three-art-park-sponsor";
import { ThreeArtParkQueryResult } from "@/sanity.types";

const colSpanMap: Record<number, string> = {
  0: "md:order-2 col-span-5 col-start-1 mt-12 md:mt-0 order-3 md:col-span-3 md:col-start-10 md:row-span-2",
  1: "col-span-11 col-start-1 order-2 md:order-3 md:col-span-7 md:col-start-1 md:row-span-2 mt-12",
  2: "md:col-span-3 col-span-6 col-start-7 order-4 md:order-4 md:col-start-9 md:row-span-2",
  3: "md:col-span-4 md:order-5 col-span-7 col-start-5 order-5 md:col-start-2 md:row-span-3 md:mt-20 ",
};

const getColSpan = (i: number) => colSpanMap[i] ?? "col-span-2";

export default async function ThreeArtParkInfo({
  threeArtParkData,
}: {
  threeArtParkData: ThreeArtParkQueryResult;
}) {
  return (
    <div className="">
      <StickyTitle stickyTitle="About" />
      <div className="mb-28 mt-12 grid auto-rows-auto grid-cols-12 gap-1 gap-y-16 md:mb-40 md:mt-24 md:gap-y-20 xl:gap-4 xl:gap-y-40">
        <div className="relative col-span-11 col-start-1 md:order-1 md:col-span-5 md:col-start-4 md:pt-8">
          <p
            lang="nl"
            className="text-3xl leading-tight 2xl:text-[52px] 2xl:leading-[60px]"
          >
            {threeArtParkData?.titleText}
          </p>
          {threeArtParkData?.threeArtLogos?.[0] && (
            <div className="pointer-events-none absolute -bottom-44 -right-8 z-10 h-44 w-44 -rotate-0 md:-left-72 md:-top-4 md:h-64 md:w-64">
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
        {threeArtParkData?.threeArtIllustrations?.map(
          (threeArtIllustration, i: number) => (
            <div key={i} className={`${getColSpan(i)} relative`}>
              <SanityImage
                data={threeArtIllustration}
                dimensions={threeArtIllustration.imageDimensions}
              />
            </div>
          ),
        )}

        <div
          lang="nl"
          className="prose relative order-6 col-span-12 col-start-1 mt-12 hyphens-auto text-lg leading-normal text-black md:order-6 md:col-span-5 md:col-start-7 md:-mt-12 xl:ml-12 xl:pr-8 2xl:text-2xl 2xl:leading-normal"
        >
          {threeArtParkData?.description && (
            <PortableText value={threeArtParkData.description} />
          )}
          {threeArtParkData?.threeArtLogos?.[2] && (
            <div className="pointer-events-none absolute -left-0 -top-56 z-10 h-40 w-40 -rotate-6 md:-left-64 md:-top-72 md:h-60 md:w-60">
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
          <div className="mt-12 md:mt-20">
            <p className="mb-4 text-sm md:text-lg">In samenwerking met:</p>
            <ThreeArtParkSponsor />
          </div>
        </div>
      </div>
    </div>
  );
}
