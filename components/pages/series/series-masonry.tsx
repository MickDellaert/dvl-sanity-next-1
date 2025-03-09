"use client";

import React from "react";
import { SingleCategoryResult } from "@/sanity.types";
import MasonryWrapper from "./masonry-wrapper";
import PhotoswipeGallery from "@/components/shared/photoswipe-gallery";
import PhotoswipeItem from "@/components/shared/photoswipe-item";

export default function SeriesMasonry({
  category,
}: {
  category: SingleCategoryResult;
}) {
  return (
    category && (
      <MasonryWrapper
        columns={{ xs: 1, lg: 2 }}
        spacing={{ xs: 0, lg: 10 }}
        sx={{
          "& > *": {
            mb: { xs: 8, sm: 8 },
          },
          width: "auto",
          pt: 6,
        }}
      >
        {category.projects ? (
          <PhotoswipeGallery projects={category.projects}>
            <>
              {category.projects?.map((project) => (
                <PhotoswipeItem
                  key={project._id}
                  project={project}
                  caption={project.projectTitle}
                  className="flex flex-col gap-2"
                />
              ))}
            </>
          </PhotoswipeGallery>
        ) : (
          <p>No projects available</p>
        )}
      </MasonryWrapper>
    )
  );
}
