import About from "@/components/pages/about/about";
import { sanityFetch } from "@/sanity/lib/live";
import { aboutDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page() {
  const { data: aboutDavidData } = await sanityFetch({
    query: aboutDavidQuery,
  });

  if (!aboutDavidData) {
    notFound();
  }

  console.log(aboutDavidData);
  return <About aboutDavidData={aboutDavidData} />;
}
