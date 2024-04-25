import { getProjectsData } from "@/sanity/lib/queryLoaders";
// import Masonry from "@mui/lab/Masonry";
import { revalidateTag } from "next/cache";
import ProjectsGalleryPhotoswipeClient from "../../../components/pages/gallery/projects-gallery-photoswipe-client";

export default async function page() {

  const projects = await getProjectsData();
  // revalidateTag("projects");

  return (
    <main className="mx-auto mt-40 w-[90%] md:max-w-screen-2xl">
      <ProjectsGalleryPhotoswipeClient projects={projects} />
    </main>
  );
}
