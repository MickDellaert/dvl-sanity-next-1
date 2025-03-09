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
  // size: string | null;
};

export default function PhotoswipeItem({
  project,
  className,
  caption,
}: {
  project: ProjectQueryResult;
  className?: string;
  caption?: string | null;
}) {
  const id = useId();
  const handle = useFullScreenHandle();

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Item
      original={project.projectImage || "placeholder.jpg"}
      thumbnail={project.projectImage || "placeholder.jpg"}
      width={project?.projectImageDimensions?.width}
      height={project?.projectImageDimensions?.height}
      alt={project.projectTitle || "Default project title"}
      caption={`<p style='color:black; text-shadow:2px 2px 5px white;'>${project.projectTitle}</p>
                <p style='color:black; text-shadow:2px 2px 5px white;'>${project.date}</p>
                <p style='color:black; text-shadow:2px 2px 5px white;'>${project.material}</p>`}
    >
      {({ ref, open }) => (
        <figure className={twMerge("inline-block")}>
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
            <figcaption className="mt-2">{caption}</figcaption>
          )}
        </figure>
      )}
    </Item>
  );
}
