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
      <div className="flex flex-col items-center">
        {projects?.map((project, i) => (
          <div key={i} className="!mb-24 ">
            <div className="relative mx-auto inline-block max-h-[44svh] justify-center md:max-h-full">
              <PhotoswipeItem project={project} />
              <div className="mt-4 text-xs">
                <h2 className="mb-1 text-sm font-medium">
                  {project.projectTitle}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PhotoswipeGallery>
  );
}
