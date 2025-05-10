// import { getSettings } from "@/sanity/lib/queryLoaders";
import NavbarContainer from "./navbar-container";
import { notFound } from "next/navigation";
import {
  homepageDescriptionQuery,
  homePageSeriesQuery,
  settingsQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Navbar() {
  // const settingsData = await getSettings();

  const { data: settingsData } = await sanityFetch({
    query: settingsQuery,
  });

  const { data: homepageDescription } = await sanityFetch({
    query: homepageDescriptionQuery,
  });

  if (!homepageDescription || !settingsData) {
    notFound();
  }

  const menuItems = settingsData.menuItems;

  return (
    <NavbarContainer
      menuItems={menuItems}
      homepageDescription={homepageDescription.homepageDescription}
    />
  );
}
