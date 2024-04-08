"use client";

import { Project } from "@/sanity/types";
import React from "react";
import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import Masonry from "@mui/lab/Masonry";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import Image from "next/image";

type Projects = {
  projects: Project[];
};

export default function LightboxLightGallery({ projects }: Projects) {

    const dynamic = projects.map((project) => ({
    src: project.projectImage,
    responsive: project.projectImage,
    thumb: project.projectImage,
    subHtml: project.projectTitle,
  }));

  console.log(dynamic)

  return (
    // <div className=" mx-auto max-w-screen-md">
    <LightGallery mode="lg-fade" fullScreen={true} plugins={[lgZoom, lgFullscreen]} >
      {/* <Masonry
        columns={{ xs: 1, lg: 4 }}
        spacing={{ xs: 0, lg: 4 }}
        defaultHeight={1200}
        defaultColumns={2}
        defaultSpacing={10}
      > */}
        {projects.map((project) => (
          <>
            {/* <Image src={project.projectImage} width={500} height={500} alt="" /> */}

            <a
              data-lg-size=""
              className="gallery-item"
              data-src={project.projectImage}
              data-sub-html={`<div><h3>${project.projectTitle}</h3><h2>${project.date}</h2><h2>${project.material}</h2></div>`}
            >
              <img className="img-responsive" src={project.projectImage} />
            </a>
          </>
        ))}
      {/* </Masonry> */}
    </LightGallery>
    // </div>
  );
}
