import { getSettings } from "@/sanity/lib/queryLoaders";
import NavbarContainer from "./navbar-container";
import { notFound } from "next/navigation";
import {
  homepageDescriptionQuery,
  homePageSeriesQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/live";

export default async function Navbar() {
  const settingsData = await getSettings();
  const menuItems = settingsData.menuItems;

  const { data: homepageDescription } = await sanityFetch({
    query: homepageDescriptionQuery,
  });

  if (!homepageDescription) {
    notFound();
  }

  console.log(menuItems);

  return (
    <NavbarContainer
      menuItems={menuItems}
      homepageDescription={homepageDescription.homepageDescription}
    />
  );
}
