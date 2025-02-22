import React from "react";
import HomePageHeaderImage from "./homepage-header-image";
import HomepageSeriesTitleScroll from "./homepage-series-title-scroll";

export default function HomepageHeaderSection() {
  return (
    <div className="flex h-full items-end">
      <HomepageSeriesTitleScroll />
      <HomePageHeaderImage />
    </div>
  );
}
