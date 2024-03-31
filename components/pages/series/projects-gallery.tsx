"use client";

import "photoswipe/dist/photoswipe.css";

import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
// import "lightgallery/css/lightgallery.css";
import { Project } from "@/sanity/types";
import { useId } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { PortableText } from "@portabletext/react";

const galleryOptions = {
  // arrowPrev: false,
  // arrowNext: false,
  // zoom: false,
  // close: false,
  // counter: false,
  // bgOpacity: 0.2,
  spacing: 0.1,
  padding: { top: 40, bottom: 40, left: 40, right: 40 },
  
};

type Props = {
  projects: Project[];
};

export default function ProjectsGallery({ projects }: Props) {
  const id = useId();

  return (
    <Gallery withCaption options={galleryOptions}>
      {projects?.map((project, i) => (
        <div key={i} className="mb-16 md:mb-0">
          <Item
            original={project.projectImage}
            thumbnail={project.projectImage}
            width={project.projectImageDimensions.width}
            height={project.projectImageDimensions.height}
            alt={project.projectTitle}
            caption={`<p style='color:white; text-shadow:none;'>${project.projectTitle}</p>`}
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
            {/* <PortableText value={project.projectDescription}/> */}
            
          </div>
        </div>
      ))}
    </Gallery>
  );
}
