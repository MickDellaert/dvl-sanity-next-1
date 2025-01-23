import HomePageCategory from "@/components/pages/homepage/homepage-category";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Subtitle from "@/components/shared/subtitle";
import HomePageHeader from "./homepage-header";
import StickyTest from "./sticky-test";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { homePageQuery } from "@/sanity/lib/queries";
import HomepageExhibition from "./homepage-exhibition";

export default async function HomePage() {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  const { data: homePageData } = await sanityFetch({ query: homePageQuery });

  if (!homePageData) {
    notFound();
  }

  const {
    // title,
    homepageDescription,
    homepageMainImage,
    homepageMainImageSingle,
    homepageCategories,
    homepageExpo,
  } = homePageData;

  return (
    <div className="">
      <StickyTest />
      {/* <HomePageHeader /> */}
      <HomePageCategory homepageCategories={homepageCategories} />
      {/* <Subtitle subtitle={"Upcoming Exhibitions"} /> */}
      <div className="mt-60">
        <div className="sticky top-16 z-20 -mt-8 flex flex-row items-center text-2xl font-medium mix-blend-difference invert">
          <div className="flex flex-col">
            <h2 className="pb-8 text-4xl font-normal tracking-tight">
              Exposition
            </h2>
          </div>
          {/* <h2 className="pb-1 pl-3 text-4xl">↓</h2> */}
        </div>
        <HomepageExhibition homepageExpo={homepageExpo} />
      </div>
    </div>
  );
}
