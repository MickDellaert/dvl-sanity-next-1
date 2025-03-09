import ProjectsGalleryPhotoswipeClient from "../../../components/pages/gallery/projects-gallery-photoswipe-client";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { projectsQuery } from "@/sanity/lib/queries";
import GalleryMasonry from "@/components/pages/gallery/gallery-masonry";
import GalleryMobile from "@/components/pages/gallery/gallery-mobile";

export default async function page() {
  const { data: projects } = await sanityFetch({ query: projectsQuery });

  if (!projects) {
    notFound();
  }

  return (
    <>
      <div className="hidden md:block">
        <GalleryMasonry projects={projects} />
      </div>
      <div className="flex flex-col gap-y-20 md:hidden">
        <GalleryMobile projects={projects} />
      </div>
    </>
  );
}
