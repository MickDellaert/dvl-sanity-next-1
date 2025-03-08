import HomepageExhibitions from "./homepage-exhibitions";
import HomepageHeaderSection from "./homepage-header-section";
import HomePageSeries from "./homepage-series";

export default async function HomePage() {
  console.log("homepage");
  return (
    <>
      {/* <HomePageHeaderImage /> */}

      <HomepageHeaderSection />
      <HomePageSeries />
      <HomepageExhibitions />
    </>
  );
}
