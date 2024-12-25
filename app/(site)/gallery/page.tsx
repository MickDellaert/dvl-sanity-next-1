import { getProjectsData } from "@/sanity/lib/queryLoaders";
// import Masonry from "@mui/lab/Masonry";
import { revalidateTag } from "next/cache";
import ProjectsGalleryPhotoswipeClient from "../../../components/pages/gallery/projects-gallery-photoswipe-client";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { projectsQuery } from "@/sanity/lib/queries";

export default async function page() {
  // const projects = await getProjectsData();
  const { data: projects } = await sanityFetch({ query: projectsQuery });

  // revalidateTag("projects");

  if (!projects) {
    notFound();
  }

  return (
    <main className="mx-auto mt-40 w-[96%] px-4">
      <ProjectsGalleryPhotoswipeClient projects={projects} />
    </main>
  );
}
