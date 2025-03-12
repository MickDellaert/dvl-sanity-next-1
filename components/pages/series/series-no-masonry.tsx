"use client";

import { SingleCategoryResult } from "@/sanity.types";
import PhotoswipeGallery from "@/components/shared/photoswipe-gallery";
import PhotoswipeItem from "@/components/shared/photoswipe-item";

export default function SeriesNoMasonry({
  category,
}: {
  category: SingleCategoryResult;
}) {
  return (
    category && (
      <>
        {category.projects ? (
          <PhotoswipeGallery projects={category.projects}>
            <>
              {category.projects?.map((project) => (
                <div
                  key={project._id}
                  className="mb-20 flex flex-col items-center justify-center md:mx-auto md:block"
                >
                  <PhotoswipeItem
                    project={project}
                    caption={project.projectTitle}
                    className="max-h-80"
                  />
                </div>
              ))}
            </>
          </PhotoswipeGallery>
        ) : (
          <p>No projects available</p>
        )}
      </>
    )
  );
}
