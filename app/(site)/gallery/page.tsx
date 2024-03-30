import ProjectsGallery from "@/components/shared/projects-gallery-shared";
import { getProjectsData } from "@/sanity/lib/queryLoaders";
import React from "react";

export default async function page() {
  const projects = await getProjectsData();
  return (
    <section className="mt-20 px-8 md:px-16 grid grid-cols-3 gap-x-12 gap-y-24">
      <ProjectsGallery projects={projects} />
    </section>
  );
}
