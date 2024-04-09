"use client";

import { FC, useCallback, useEffect, useRef, useState } from "react";

import { Project } from "@/sanity/types";
import Image from "next/image";
import LightGallery from "lightgallery/react";
import { LightGallery as ILightGallery } from "lightgallery/lightgallery";

// import LightGalleryComponent from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lg-thumbnail.css";

import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lg-zoom.css";

import lgFullscreen from "lightgallery/plugins/fullscreen";
import "lightgallery/css/lg-fullscreen.css";

import "../../../app/globals.css";  

// import Masonry from "@mui/lab/Masonry";
import Masonry from "react-masonry-css";




type Projects = {
  projects: Project[];
};

export const OverviewGallery = ({ projects }: Projects) => {



  const dynamicEl = projects.map((project) => ({
    src: project.projectImage,
    responsive: project.projectImage,
    thumb: project.projectImage,
    subHtml: project.projectTitle,
  }));


  const lightbox = useRef<ILightGallery | null>(null);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (

    <>
      {/* <div ref={containerRef} /> */}

      <div className="mt-20 max-w-screen-3xl mx-auto">
        {/* <Masonry columns={{ xs: 1, md: 3, lg: 4 }}
        spacing={{ xs: 0, md: 3, lg: 8 }}
        defaultHeight={1200}
        defaultColumns={4}
        defaultSpacing={8}> */}
        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
          {projects.map((project, i) => (
            <div key={project._id} onClick={() => lightbox.current?.openGallery(i)}>
              <Image src={project.projectImage} width={500} height={500} alt="" />
              <h2>{project.projectTitle}</h2>
            </div>
          ))}
        </Masonry>
      </div>

      <LightGallery
        mode="lg-fade"
        fullScreen={true}
        plugins={[lgZoom, lgFullscreen]}
        // Once the component initializes, we'll assign the instance to our React ref.  This is used in the onClick() handler of each image in the Masonry layout
        onInit={(ref) => {
          if (ref) {
            lightbox.current = ref.instance;
          }
        }}
        // These options turn the component into a "controlled" component that let's us determine when to open/close it
        dynamic
        dynamicEl={projects.map((image) => ({
          src: image.projectImage,
          alt: image.projectTitle,
          subHtml:`<div><h3>${image.projectTitle}</h3><h2>${image.date}</h2><h2>${image.material}</h2></div>`
         
        }))}
      />
    </>
  );
};
