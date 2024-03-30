"use client";

import "photoswipe/dist/photoswipe.css";

import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
import "lightgallery/css/lightgallery.css";
import { Project } from "@/sanity/types";
import { useId } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";

const galleryOptions = {
  // arrowPrev: false,
  // arrowNext: false,
  // zoom: false,
  // close: false,
  // counter: false,
  // bgOpacity: 0.2,
  spacing: 0.1,
  padding: { top: 40, bottom: 40, left: 0, right: 0 },
};

type Props = {
  projects: Project[];
};

export default function ProjectsGallery({ projects }: Props) {
  const id = useId();

  return (
    <Gallery options={galleryOptions}>
      {projects?.map((project, i) => (
        <div key={i} className="">
          <Item
            original={project.projectImage}
            thumbnail={project.projectImage}
            width={project.projectImageDimensions.width}
            height={project.projectImageDimensions.height}
          >
            {({ ref, open }) => (
              <Image
                className="bg-gray-50"
                ref={ref}
                onClick={open}
                src={project.projectImage}
                alt=""
                width={1000}
                height={1000}
              />
            )}
          </Item>

          <div className="mt-4 text-xs">
            <h2 className="text-sm font-medium mb-1">{project.projectTitle}</h2>
            {/* <p>{project.date}</p> */}
            <p>{project.material}</p>
            <p>{project.size}</p>
          </div>
        </div>
      ))}
    </Gallery>
  );
}
