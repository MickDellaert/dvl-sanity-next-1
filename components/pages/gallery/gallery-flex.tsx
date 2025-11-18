"use client";

import PhotoswipeGallery from "@/components/shared/photoswipe-gallery";
import PhotoswipeItem from "@/components/shared/photoswipe-item";
import { ProjectsQueryResult } from "@/sanity.types";
import StickyTitle from "../../shared/sticky-title";
import MasonryWrapper from "../series/masonry-wrapper";

export default function GalleryFlex({
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
      <div className="mt-20 grid grid-cols-4 items-end gap-x-12 gap-y-20">
        <PhotoswipeGallery projects={projects}>
          <>
            {projects?.map((project) => (
              <PhotoswipeItem
                key={project._id}
                project={project}
                caption={project.projectTitle}
                className=""
                figureClassName="flex flex-col"
              />
            ))}
          </>
        </PhotoswipeGallery>
      </div>
    </>
  );
}
