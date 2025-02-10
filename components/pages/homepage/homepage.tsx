import HomePageCategory from "@/components/pages/homepage/homepage-category";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Subtitle from "@/components/shared/subtitle";
import HomePageHeader from "./homepage-header";
import StickyTest from "./sticky-test";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { sanityFetch } from "@/sanity/lib/live";
import { homePageQuery } from "@/sanity/lib/queries";
import HomepageExhibition from "./homepage-exhibition";
import HomePageHeaderImage from "./homepage-header-image";
import HomePageSeries from "./homepage-series";

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
    <>
      <HomePageHeaderImage />
      {/* <HomePageCategory homepageCategories={homepageCategories} /> */}
      <HomePageSeries />
      <HomepageExhibition homepageExpo={homepageExpo} />
    </>
  );
}
