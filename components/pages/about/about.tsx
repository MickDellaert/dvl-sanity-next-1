import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import { AboutDavidQueryResult } from "@/sanity.types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import StickyTitle from "../homepage/sticky-title";

export default function About({
  aboutDavidData,
}: {
  aboutDavidData: AboutDavidQueryResult;
}) {
  const { urlFor } = useImageUrlBuilder();

  return (
    <div className="">
      <div className="relative grid grid-cols-12 gap-x-20">
        <StickyTitle stickyTitle="About" />
        <Image
          src={
            aboutDavidData?.portrait
              ? urlFor(aboutDavidData?.portrait).width(1000).height(1000).url()
              : ""
          }
          alt=""
          width={1000}
          height={1000}
          className="top-20 col-span-5 col-start-1 mt-16 self-start"
        />
        <div className="sticky top-16 col-span-5 col-start-7 mt-16 self-start text-3xl leading-10">
          <div className="mb-8">
            {aboutDavidData?.description && (
              <PortableText value={aboutDavidData.description} />
            )}
          </div>
        </div>
      </div>
      <div className="relative mt-24 grid grid-cols-12 gap-x-20">
        <StickyTitle stickyTitle="Education" />
        <div className="col-span-4 col-start-7 text-xl [&_li:last-child]:mb-0 [&_li]:mb-4 ">
          {aboutDavidData?.educationText && (
            <PortableText value={aboutDavidData.educationText} />
          )}
        </div>
      </div>
      <div className="relative mt-24 grid min-h-screen grid-cols-12 gap-x-20">
        <StickyTitle stickyTitle="Exhibitions & Publications" />
        <div className="col-span-4 col-start-7 text-xl [&_li:last-child]:mb-0 [&_li>*:first-child]:text-2xl [&_li]:mb-4">
          {aboutDavidData?.educationText && (
            <PortableText value={aboutDavidData.educationText} />
          )}
        </div>
      </div>
    </div>
  );
}
