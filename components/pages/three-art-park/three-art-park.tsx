import { sanityFetch } from "@/sanity/lib/live";
import { threeArtParkQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import ThreeArtParkExhibitions from "./three-art-park-exhibitions";
import ThreeArtParkInfo from "./three-art-park-info";

export default async function ThreeArtPark() {
  const { data: threeArtParkData } = await sanityFetch({
    query: threeArtParkQuery,
  });

  if (!threeArtParkData) {
    notFound();
  }

  return (
    <div className="relative min-h-screen">
      <ThreeArtParkInfo threeArtParkData={threeArtParkData} />
      <ThreeArtParkExhibitions threeArtParkData={threeArtParkData} />
    </div>
  );
}
