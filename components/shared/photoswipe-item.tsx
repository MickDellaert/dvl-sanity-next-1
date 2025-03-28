"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
import { Project } from "@/sanity/types";
import { useId } from "react";
import { Item } from "react-photoswipe-gallery";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import { ProjectsQueryResult, SanityImageDimensions } from "@/sanity.types";

import { useState } from "react";

type Props = {
  project: ProjectsQueryResult;
};

type ProjectQueryResult = {
  _id: string;
  projectImage: string | null;
  projectImageDimensions: SanityImageDimensions | null;
  projectTitle: string | null;
  projectDescription: null;
  date: string | null;
  material: string | null;
  size: { width?: string | undefined; height?: string | undefined } | null;
  soldStatus: boolean | null;
};

export default function PhotoswipeItem({
  project,
  className,
  figureClassName,
  caption,
}: {
  project: ProjectQueryResult;
  className?: string;
  figureClassName?: string;
  caption?: string | null;
}) {
  const id = useId();
  const handle = useFullScreenHandle();

  const [isLoaded, setIsLoaded] = useState(false);

  console.log(project);

  return (
    <Item
      original={project.projectImage || "placeholder.jpg"}
      thumbnail={project.projectImage || "placeholder.jpg"}
      width={project?.projectImageDimensions?.width}
      height={project?.projectImageDimensions?.height}
      alt={project.projectTitle || "Default project title"}
      caption={`<div style='color:black; text-shadow:2px 2px 5px white;'>
        <p>${project.projectTitle}</p>
        <p>${project.date}</p>
        <p>${project.material}</p>
        <p>${project.size ? `${project.size.width} x ${project.size.height} cm` : "No size available"}</p>
        ${project.soldStatus ? "<p><em>sold</em></p>" : ""}
      </div>`.trim()}
    >
      {({ ref, open }) => (
        <figure className={twMerge("inline-block", figureClassName)}>
          <Image
            className={twMerge("h-full w-full object-contain", className)}
            ref={ref}
            onClick={open}
            src={project.projectImage || "placeholder.jpg"}
            alt={project.projectTitle || "Default project title"}
            width={project?.projectImageDimensions?.width}
            height={project?.projectImageDimensions?.height}
            onLoadingComplete={() => {
              setIsLoaded(true);
            }}
          />
          {isLoaded && caption && (
            <figcaption className="mt-2 text-sm md:text-base">
              {caption}
            </figcaption>
          )}
        </figure>
      )}
    </Item>
  );
}
