"use client";

import "photoswipe/dist/photoswipe.css";

import Image from "next/image";
import "photoswipe/dist/photoswipe.css";
// import "lightgallery/css/lightgallery.css";
import { Project } from "@/sanity/types";
import { useId } from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { PortableText } from "@portabletext/react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import "photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";

const galleryOptions = {
  // arrowPrev: false,
  // arrowNext: false,
  zoom: true,
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
  const handle = useFullScreenHandle();

  return (
    <>
      <Gallery
        options={galleryOptions}
        plugins={(pswpLightbox) => {
          // register plugin
          const captionPlugin = new PhotoSwipeDynamicCaption(pswpLightbox, {
            captionContent: (slide: { data: { caption: string } }) =>
              slide.data.caption,
          });

          // register another plugin
          // ...
        }}
      >
        {projects?.map((project, i) => (
          <div key={i} className="mb-16 lg:mb-0">
            <FullScreen handle={handle}>
              <Item
                original={project.projectImage}
                thumbnail={project.projectImage}
                width={project.projectImageDimensions.width}
                height={project.projectImageDimensions.height}
                // alt={`<p style='color:white; text-shadow:none;'>${project.projectTitle}</p>
                // <p style='color:white; text-shadow:none;'>${project.date}</p>
                // <p style='color:white; text-shadow:none;'>${project.material}</p>`}
                alt={project.projectTitle}
                caption={`<p style='color:white; text-shadow:none;'>${project.projectTitle}</p>
                <p style='color:white; text-shadow:none;'>${project.date}</p>
                <p style='color:white; text-shadow:none;'>${project.material}</p>`}
                // content={
                //   <>
                //     <div className="flex flex-row gap-8 w-full h-full">
                //     <button onClick={handle.enter}>Enter fullscreen</button>
                //       <div className="w-6/12">
                //         <Image
                //           className="bg-gray-50 w-full"
                //           // ref={ref}
                //           // onClick={open}
                //           src={project.projectImage}
                //           alt=""
                //           width={1000}
                //           height={1000}
                //         />
                //       </div>
                //       <h1 className="text-white">Hi!</h1>
                //       <p className="text-white">testparagraph</p>
                //       <p>{project.projectTitle}</p>
                //     </div>
                //   </>
                // }
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
            </FullScreen>

            <div className="mt-4 text-xs">
              <h2 className="mb-1 text-sm font-medium">
                {project.projectTitle}
              </h2>
              {/* <p>{project.date}</p> */}
              <p>{project.material}</p>
              <p>{project.size}</p>
              {/* <PortableText value={project.projectDescription}/> */}
            </div>
          </div>
        ))}
      </Gallery>
    </>
  );
}
