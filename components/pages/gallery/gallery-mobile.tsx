"use client";

import PhotoswipeGallery from "@/components/shared/photoswipe-gallery";
import PhotoswipeItem from "@/components/shared/photoswipe-item";
import { ProjectsQueryResult } from "@/sanity.types";
import React from "react";
import StickyTitle from "../../shared/sticky-title";

export default function GalleryMobile({
  projects,
}: {
  projects: ProjectsQueryResult;
}) {
  if (!projects) {
    return null;
  }

  return (
    <>
      <StickyTitle stickyTitle="Gallery" />

      <PhotoswipeGallery projects={projects}>
        <>
          {projects?.map((project) => (
            <PhotoswipeItem
              key={project._id}
              project={project}
              caption={project.projectTitle}
              className=""
            />
          ))}
        </>
      </PhotoswipeGallery>
    </>
  );
}
