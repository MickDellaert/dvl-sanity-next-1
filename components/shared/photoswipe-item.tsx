"use client";
import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
import { Project } from "@/sanity/types";
import { useId } from "react";
import { Item } from "react-photoswipe-gallery";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";

type Props = {
  project: Project;
};

export default function PhotoswipeItem({ project }: Props) {
  const id = useId();
  const handle = useFullScreenHandle();

  return (
    <Item
      original={project.projectImage}
      thumbnail={project.projectImage}
      width={project.projectImageDimensions.width}
      height={project.projectImageDimensions.height}
      alt={project.projectTitle}
      caption={`<p style='color:black; text-shadow:2px 2px 5px white;'>${project.projectTitle}</p>
                <p style='color:black; text-shadow:2px 2px 5px white;'>${project.date}</p>
                <p style='color:black; text-shadow:2px 2px 5px white;'>${project.material}</p>`}
    >
      {({ ref, open }) => (
        <Image
          className="bg-gray-100"
          ref={ref}
          onClick={open}
          src={project.projectImage}
          alt=""
          width={1000}
          height={1000}
        />
      )}
    </Item>
  );
}
