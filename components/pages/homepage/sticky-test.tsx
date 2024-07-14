import HomePageCategory from "@/components/pages/homepage/homepage-category";
import { getHomePageData } from "@/sanity/lib/queryLoaders";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Subtitle from "@/components/shared/subtitle";

export default async function StickyTest() {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  const homePageData = await getHomePageData();

  const {
    title,
    homepageDescription,
    homepageMainImage,
    homepageMainImageSingle,
    homepageCategories,
  } = homePageData;

  console.log(homepageMainImageSingle);

  return (
    <>
      <div className="grid min-h-[calc(100vh-44px)] auto-rows-auto grid-cols-12 pt-16">
        <div className="col-span-6 col-start-1 2xl:col-span-2">
          <h2 className="col-start-1 pb-12 text-4xl font-medium leading-snug lg:text-4xl lg:leading-snug xl:text-4xl xl:leading-snug">
            is an Antwerp and Mortehan based contemporary artist.
          </h2>
        </div>

        <Image
          // className="h-[calc(100vh-64px)] w-screen object-cover"
          className="col-span-9 col-start-4 w-full self-end"
          src={urlFor(homepageMainImageSingle).url()}
          alt={homepageMainImageSingle.alt}
          width={1000}
          height={1000}
        />
      </div>

      {/* <div className="sticky text-2xl top-16 font-medium invert mix-blend-difference z-20">
        Painting Series
      </div> */}
    </>
  );
}
