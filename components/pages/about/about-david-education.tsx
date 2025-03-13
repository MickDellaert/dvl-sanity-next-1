import { sanityFetch } from "@/sanity/lib/live";
import { educationDavidQueryAlt } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import AboutTimeline from "./about-timeline";

export default async function AboutDavidEducation() {
  const { data: educationDavidAltData } = await sanityFetch({
    query: educationDavidQueryAlt,
  });

  if (!educationDavidAltData) {
    notFound();
  }

  return (
    <AboutTimeline
      title="Education"
      items={educationDavidAltData.education}
      getTitleContent={(Item) => Item.schoolDirection}
      getSubtitleContent={(Item) =>
        `${Item.schoolName}, ${Item.schoolAddress?.city}`
      }
      getStartDate={(item) => item.duration?.start || undefined}
      getEndDate={(item) => item.duration?.end || undefined}
    />
  );
}
