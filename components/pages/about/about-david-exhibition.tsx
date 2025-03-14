import { sanityFetch } from "@/sanity/lib/live";
import { exhibitionDavidQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { ExhibitionWithoutFilterQueryResult } from "@/sanity.types";
import AboutTimeline from "./about-timeline";

export default async function AboutDavidExhibition() {
  const { data: exhibitionDavidData } = (await sanityFetch({
    query: exhibitionDavidQuery,
  })) as { data: ExhibitionWithoutFilterQueryResult };

  if (!exhibitionDavidData) {
    notFound();
  }

  return (
    <AboutTimeline
      title="Exhibitions & Publications"
      items={exhibitionDavidData}
      getTitleContent={(item) => item.name || null}
      getSubtitleContent={(item) =>
        `${item.gallery?.name || ""}, ${item.gallery?.address?.city || ""}`
      }
      getStartDate={(Item) => Item.date?.start || undefined}
      getEndDate={(item) => item.date?.end || undefined}
    />
  );
}
