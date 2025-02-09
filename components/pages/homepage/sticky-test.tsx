import HomePageCategory from "@/components/pages/homepage/homepage-category";
// import { getHomePageData } from "@/sanity/lib/queryLoaders";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Subtitle from "@/components/shared/subtitle";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { homePageQuery } from "@/sanity/lib/queries";

export default async function StickyTest() {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  // const homePageData = await getHomePageData();
  const { data: homePageData } = await sanityFetch({ query: homePageQuery });

  if (!homePageData) {
    notFound();
  }

  const {
    homepageDescription,
    homepageMainImage,
    homepageMainImageSingle,
    homepageCategories,
  } = homePageData;

  return (
    <>
      <div className="grid min-h-[calc(100vh-40px)] auto-rows-auto grid-cols-12 pt-16">
        {/* <div className="col-span-6 col-start-1 2xl:col-span-3"> */}
        {/* <h2 className="col-start-1 text-4xl font-normal leading-snug lg:text-4xl lg:leading-snug xl:text-5xl xl:leading-11 pb-12 tracking-tighter">
            is an Antwerp and Mortehan based contemporary artist.
          </h2> */}
        {/* </div> */}

        <Image
          // className="h-[calc(100vh-64px)] w-screen object-cover"
          className="col-span-8 col-start-5 w-full self-end xl:col-span-7 xl:col-start-6"
          src={
            homepageMainImageSingle ? urlFor(homepageMainImageSingle).url() : ""
          }
          alt={homepageMainImageSingle?.alt || "default alt text"}
          width={1000}
          height={1000}
          key={homepageMainImageSingle?.asset?._ref}
        />
      </div>

      {/* <div className="sticky text-2xl top-16 font-medium invert mix-blend-difference z-20">
        Painting Series
      </div> */}
    </>
  );
}
