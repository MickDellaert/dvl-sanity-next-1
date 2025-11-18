import HomepageExhibitions from "./homepage-exhibitions";
import HomepageExhibitionsNew from "./homepage-exhibitions-new";
import HomepageExhibitionsSection from "./homepage-exhibitions-section";
import HomepageHeaderSection from "./homepage-header-section";
import HomePageSeries from "./homepage-series";

export default async function HomePage() {
  return (
    <>
      <HomepageHeaderSection />
      <HomePageSeries />
      <HomepageExhibitionsSection />
      {/* <HomepageExhibitionsNew /> */}
    </>
  );
}
