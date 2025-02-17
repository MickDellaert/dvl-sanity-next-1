import ProjectsGalleryPhotoswipeClient from "../../../components/pages/gallery/projects-gallery-photoswipe-client";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { projectsQuery } from "@/sanity/lib/queries";

export default async function page() {
  const { data: projects } = await sanityFetch({ query: projectsQuery });

  if (!projects) {
    notFound();
  }

  return <ProjectsGalleryPhotoswipeClient projects={projects} />;
}
