import HomepageExhibitions from "./homepage-exhibitions";
import HomePageHeaderImage from "./homepage-header-image";
import HomePageSeries from "./homepage-series";

export default async function HomePage() {
  return (
    <div className="px-8 pb-12">
      <HomePageHeaderImage />
      <HomePageSeries />
      <HomepageExhibitions />
    </div>
  );
}
