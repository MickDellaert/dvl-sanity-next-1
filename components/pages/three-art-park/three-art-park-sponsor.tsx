import SanityImage from "@/components/shared/sanity-image";
import { sanityFetch } from "@/sanity/lib/live";
import { threeArtParkSponsorQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

export default async function ThreeArtParkSponsor() {
  const { data: threeArtSponsors } = await sanityFetch({
    query: threeArtParkSponsorQuery,
  });

  if (!threeArtSponsors) {
    notFound();
  }

  console.log(threeArtSponsors);
  return (
    <div className="flex h-16 items-center gap-8">
      {threeArtSponsors?.threeArtSponsorLogos?.map((threeArtSponsor, i) => (
        <SanityImage
          key={i}
          data={threeArtSponsor}
          dimensions={threeArtSponsor.imageDimensions}
          className="h-full w-auto"
        />
      ))}
    </div>
  );
}
