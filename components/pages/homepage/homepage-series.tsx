import { notFound } from "next/navigation";
import HomepageSeriesTitle from "./homepage-series-title";
import { sanityFetch } from "@/sanity/lib/live";
import { homePageSeriesQuery } from "@/sanity/lib/queries";
import HomepageSerie from "./homepage-serie";

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
      <div className="mt-32 grid grid-cols-12 content-center justify-center gap-x-2 gap-y-20 lg:mt-64 lg:gap-x-4 lg:gap-y-48">
        {homepageCategories?.map((category) => {
          return <HomepageSerie category={category} key={category._id} />;
        })}
      </div>
    </section>
  );
}
