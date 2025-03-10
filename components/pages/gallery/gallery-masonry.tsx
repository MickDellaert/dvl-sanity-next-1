"use client";

import PhotoswipeGallery from "@/components/shared/photoswipe-gallery";
import PhotoswipeItem from "@/components/shared/photoswipe-item";
import { ProjectsQueryResult } from "@/sanity.types";
import StickyTitle from "../../shared/sticky-title";
import MasonryWrapper from "../series/masonry-wrapper";

export default function GalleryMasonry({
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
      <MasonryWrapper
        columns={{ xs: 1, md: 2, lg: 3, xl: 4 }}
        spacing={{ xs: 0, md: 8, lg: 8, xl: 8 }}
        sx={{
          "& > *": {
            mb: { xs: 8, sm: 8 },
          },
          width: "auto",
          pt: 4,
        }}
      >
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
      </MasonryWrapper>
    </>
  );
}
