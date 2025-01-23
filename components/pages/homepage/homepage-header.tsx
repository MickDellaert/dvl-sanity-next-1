import HomePageCategory from "@/components/pages/homepage/homepage-category";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { homePageQuery } from "@/sanity/lib/queries";

export default async function HomePageHeader() {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  // const homePageData = await getHomePageData();
  const { data: homePageData } = await sanityFetch({ query: homePageQuery });

  if (!homePageData) {
    notFound();
  }

  const { homepageMainImageSingle } = homePageData;

  return (
    <>
      <div className="grid min-h-[calc(100vh-32px)] auto-rows-auto grid-cols-12 pt-16">
        <div className="col-span-6 col-start-1 2xl:col-span-2">
          <h2 className="col-start-1 text-4xl font-medium leading-snug lg:text-4xl lg:leading-snug xl:text-4xl xl:leading-snug">
            is a Antwerp and Mortehan based contemporary artist.
          </h2>
        </div>

        <Image
          // className="h-[calc(100vh-64px)] w-screen object-cover"
          className="col-span-9 col-start-4  w-full self-end"
          src={
            homepageMainImageSingle ? urlFor(homepageMainImageSingle).url() : ""
          }
          alt={homepageMainImageSingle?.alt || "default alt text"}
          width={1000}
          height={1000}
        />
      </div>

      <h2 className="sticky bottom-8 top-16 h-8 bg-green-300 text-2xl font-medium">
        Painting Series ↓
      </h2>
    </>
  );
}
