import React from "react";
import HomePageHeaderImage from "./homepage-header-image";
import { homepageHeaderQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";

export default async function HomepageHeaderSection() {
  const { data: homepageHeaderImage } = await sanityFetch({
    query: homepageHeaderQuery,
  });

  if (!homepageHeaderImage) {
    notFound();
  }

  const { homepageMainImageSingle } = homepageHeaderImage;
  return (
    <div className="">
      <HomePageHeaderImage homepageMainImage={homepageMainImageSingle} />
    </div>
  );
}
