"use client";

import PhotoswipeGallery from "@/components/shared/photoswipe-gallery";
import PhotoswipeItem from "@/components/shared/photoswipe-item";
import ProjectsGalleryPhotoswipe from "@/app/unused/projects-gallery-photoswipe";
import { Project } from "@/sanity/types";
import React from "react";

import Masonry from "react-masonry-css";

type Projects = {
  projects: Project[];
};

export default function ProjectsGalleryPhotoswipeClient({
  projects,
}: Projects) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <PhotoswipeGallery projects={projects}>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
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
      </Masonry>
    </PhotoswipeGallery>
  );
}
