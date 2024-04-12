"use client";

import PhotoswipeGallery from "@/components/shared/photoswipe-gallery";
import PhotoswipeItem from "@/components/shared/photoswipe-item";
import { Project } from "@/sanity/types";
import React from "react";

type Projects = {
  projects: Project[];
};

export default function ProjectsGalleryPhotoswipeSeries({
  projects,
}: Projects) {
  return (
    <PhotoswipeGallery projects={projects}>
      <>
        {projects?.map((project, i) => (
          <div key={i} className="mb-16 inline-block lg:mb-0">
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
