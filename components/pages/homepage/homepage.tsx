import HomePageCategory from "@/components/pages/homepage/homepage-category";
import { getHomePageData } from "@/sanity/lib/queryLoaders";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Subtitle from "@/components/shared/subtitle";
import HomePageHeader from "./homepage-header";
import StickyTest from "./sticky-test";

export default async function HomePage() {
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
    <div className="">
      <StickyTest/>
      {/* <HomePageHeader /> */}
      <HomePageCategory homepageCategories={homepageCategories} />
      {/* <Subtitle subtitle={"Upcoming Exhibitions"} /> */}
      <div className="bg-green-200 h-screen mt-40">
      <div className="sticky top-16 z-20 -mt-8 flex flex-row items-center text-2xl font-medium mix-blend-difference invert">
        <h2 className="">Expo</h2>
        {/* <h2 className="pb-1 pl-3 text-4xl">↓</h2> */}
      </div>
      </div>
    </div>
  );
}
