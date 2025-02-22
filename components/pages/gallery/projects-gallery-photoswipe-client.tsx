"use client";

import PhotoswipeGallery from "@/components/shared/photoswipe-gallery";
import PhotoswipeItem from "@/components/shared/photoswipe-item";
import { ProjectsQueryResult } from "@/sanity.types";
import { Project } from "@/sanity/types";
import React from "react";

import Masonry from "react-masonry-css";
import StickyTitle from "../homepage/sticky-title";

type Projects = {
  projects: Project[];
};

export default function ProjectsGalleryPhotoswipeClient({
  projects,
}: {
  projects: ProjectsQueryResult;
}) {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  if (!projects) {
    return null;
  }

  return (
    <>
      <StickyTitle stickyTitle="Gallery" />
      <PhotoswipeGallery projects={projects}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid mt-20"
          columnClassName="my-masonry-grid_column"
        >
          {projects?.map((project, i) => (
            <div key={i} className="!mb-24 inline-block lg:mb-0">
              <PhotoswipeItem project={project} />
              <div className="">
                <h2 className="text-base tracking-tighter">
                  {project.projectTitle}
                </h2>
              </div>
            </div>
          ))}
        </Masonry>
      </PhotoswipeGallery>
    </>
  );
}
