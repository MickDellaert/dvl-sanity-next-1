import HomepageExhibitions from "./homepage-exhibitions";
import HomepageHeaderSection from "./homepage-header-section";
import HomePageSeries from "./homepage-series";

export default async function HomePage() {
  return (
    <>
      <HomepageHeaderSection />
      <HomePageSeries />
      <HomepageExhibitions />
    </>
  );
}
