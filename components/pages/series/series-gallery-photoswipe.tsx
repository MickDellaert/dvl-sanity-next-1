// "use client";

import PhotoswipeGallery from "@/components/shared/photoswipe-gallery";
import PhotoswipeItem from "@/components/shared/photoswipe-item";
import { ProjectsQueryResult } from "@/sanity.types";
import { Project } from "@/sanity/types";
import { notFound } from "next/navigation";
import React from "react";

type Projects = {
  projects: Project[];
};

export default function SeriesGalleryPhotoswipe({
  projects,
}: {
  projects: ProjectsQueryResult;
}) {
  if (!projects) {
    notFound;
  }
  return (
    <PhotoswipeGallery projects={projects}>
      <>
        {projects?.map((project, i) => (
          <div key={i} className="inline-block">
            <PhotoswipeItem project={project} />
            <div className="mt-4 text-xs">
              <h2 className="mb-1 text-sm font-medium">
                {project.projectTitle}
              </h2>
            </div>
          </div>
        ))}
      </>
    </PhotoswipeGallery>
  );
}
