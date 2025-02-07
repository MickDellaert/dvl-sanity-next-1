import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import { AboutDavidQueryResult } from "@/sanity.types";
import { PortableText } from "next-sanity";
import Image from "next/image";

export default function About({
  aboutDavidData,
}: {
  aboutDavidData: AboutDavidQueryResult;
}) {
  const { urlFor } = useImageUrlBuilder();

  return (
    <div className="relative mt-8 grid grid-cols-12 gap-x-12">
      <h1 className="sticky top-14 col-span-2 self-start text-4xl">— About</h1>
      <Image
        src={
          aboutDavidData?.portrait
            ? urlFor(aboutDavidData?.portrait).width(1000).height(1000).url()
            : ""
        }
        alt=""
        width={1000}
        height={1000}
        className="sticky top-20 col-span-4 mt-16 self-start"
      />
      <div className="col-span-4 mt-16 text-2xl tracking-tight">
        <div className="mb-8">
          {aboutDavidData?.description && (
            <PortableText value={aboutDavidData.description} />
          )}
        </div>
        <div className="">
          <h3 className="text-2xl">— Education</h3>
          <div className="text-xl [&_li:last-child]:mb-0 [&_li]:mb-4 ">
            {aboutDavidData?.educationText && (
              <PortableText value={aboutDavidData.educationText} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
