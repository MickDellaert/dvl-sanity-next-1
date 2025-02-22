import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import HomepageSeriesTitle from "./homepage-series-title";
import { sanityFetch } from "@/sanity/lib/live";
import { homePageSeriesQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import HomepageSerie from "./homepage-serie";
import HomepageSerieTest from "./homepage-serie-test";

export default async function HomePageSeries() {
  const { data: homepageData } = await sanityFetch({
    query: homePageSeriesQuery,
  });

  if (!homepageData) {
    notFound();
  }

  const { homepageCategories } = homepageData;

  return (
    <section>
      <HomepageSeriesTitle />
      <div className="mt-32 grid grid-cols-12 content-center justify-center gap-x-2 gap-y-24 lg:mt-64 lg:gap-x-4 lg:gap-y-48">
        {homepageCategories?.map((category) => {
          return <HomepageSerieTest category={category} key={category._id} />;
        })}
      </div>
      {/* <div className="mt-44 grid grid-cols-12 content-center justify-center gap-x-2 gap-y-20 md:gap-x-4 md:gap-y-48">
        {homepageCategories?.map((category) => {
          return <HomepageSerie category={category} key={category._id} />;
        })}
      </div> */}
    </section>
  );
}
