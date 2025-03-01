"use client";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
import { Project } from "@/sanity/types";
import { useId } from "react";
import { Item } from "react-photoswipe-gallery";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";
import { ProjectsQueryResult, SanityImageDimensions } from "@/sanity.types";

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
}: {
  project: ProjectQueryResult;
}) {
  const id = useId();
  const handle = useFullScreenHandle();

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
        <Image
          className="max-h-[44svh] w-full object-contain md:max-h-full "
          ref={ref}
          onClick={open}
          src={project.projectImage || "placeholder.jpg"}
          alt={project.projectTitle || "Default project title"}
          width={1000}
          height={1000}
        />
      )}
    </Item>
  );
}
