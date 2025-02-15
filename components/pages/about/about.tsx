import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import { AboutDavidQueryResult } from "@/sanity.types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import StickyTitle from "../homepage/sticky-title";
import Contact from "./contact";
import Education from "./education";
import Bio from "./bio";
import AboutDavidExhibitions from "./about-david-exhibitions";
import AboutDavidEducation from "./about-David-education";

export default function About({
  aboutDavidData,
}: {
  aboutDavidData: AboutDavidQueryResult;
}) {
  const { urlFor } = useImageUrlBuilder();

  return (
    <div className="">
      <Bio />
      {/* <div className="relative grid grid-cols-12 gap-x-20">
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
          className="top-20 col-span-4 col-start-1 mt-16 self-start"
        />
        <div className="sticky top-16 col-span-5 col-start-7 mt-16 self-start text-3xl leading-10">
          <div className="mb-8">
            {aboutDavidData?.description && (
              <PortableText value={aboutDavidData.description} />
            )}
          </div>
        </div>
      </div> */}
      {/* <Education /> */}
      <AboutDavidEducation />
      <AboutDavidExhibitions />
      <Contact />
    </div>
  );
}
