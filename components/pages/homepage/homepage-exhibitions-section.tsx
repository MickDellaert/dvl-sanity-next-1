import { sanityFetch } from "@/sanity/lib/live";
import { homePageExhibitionQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import HomepageExhibitionsNew from "./homepage-exhibitions-new";

export default async function HomepageExhibitionsSection() {
  const { data: homepageData } = await sanityFetch({
    query: homePageExhibitionQuery,
  });

  if (!homepageData) {
    notFound();
  }
  return (
    <>
      <HomepageExhibitionsNew homepageData={homepageData} />
    </>
  );
}
