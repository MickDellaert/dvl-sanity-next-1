import HomePage from "@/components/pages/homepage/homepage";
import HomepageExhibitions from "@/components/pages/homepage/homepage-exhibitions";
import HomepageHeaderSection from "@/components/pages/homepage/homepage-header-section";
import HomePageSeries from "@/components/pages/homepage/homepage-series";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      {/* <HomePageHeaderImage /> */}
      <Suspense
        fallback={<p className="text-5xl">homepage header loading...</p>}
      >
        <HomepageHeaderSection />
      </Suspense>
      <HomePageSeries />
      <HomepageExhibitions />
    </>
  );
}
