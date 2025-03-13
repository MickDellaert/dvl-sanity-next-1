import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { projectsQuery } from "@/sanity/lib/queries";
import Gallery from "@/components/pages/gallery/gallery";

export default async function page() {
  const { data: projects } = await sanityFetch({ query: projectsQuery });

  if (!projects) {
    notFound();
  }

  return <Gallery projects={projects} />;
}
