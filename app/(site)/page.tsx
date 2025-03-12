import HomePage from "@/components/pages/homepage/homepage";
import HomepageExhibitions from "@/components/pages/homepage/homepage-exhibitions";
import HomepageHeaderSection from "@/components/pages/homepage/homepage-header-section";
import HomePageSeries from "@/components/pages/homepage/homepage-series";

export default async function Home() {
  return (
    <>
      {/* <HomePageHeaderImage /> */}
      <HomepageHeaderSection />
      <HomePageSeries />
      <HomepageExhibitions />
    </>
  );
}
