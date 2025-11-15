import StickyTitle from "../../shared/sticky-title";
import { sanityFetch } from "@/sanity/lib/live";
import { bioDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

import AboutDavidBioContent from "./about-david-bio-content";

export default async function AboutDavidBio() {
  const { data: bioDavidData } = await sanityFetch({ query: bioDavidQuery });

  if (!bioDavidData) {
    notFound();
  }

  return (
    <div className="relative grid grid-cols-12 gap-x-2 lg:gap-x-20">
      <StickyTitle stickyTitle="About" />
      <AboutDavidBioContent bioDavidData={bioDavidData} />
    </div>
  );
}
