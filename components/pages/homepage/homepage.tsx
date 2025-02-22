import Contact from "../about/contact";
import HomepageExhibitions from "./homepage-exhibitions";
import HomePageHeaderImage from "./homepage-header-image";
import HomepageHeaderSection from "./homepage-header-section";
import HomePageSeries from "./homepage-series";

export default async function HomePage() {
  return (
    <>
      {/* <HomepageHeaderSection /> */}
      <HomePageHeaderImage />
      <HomePageSeries />
      <HomepageExhibitions />
    </>
  );
}
