"use client";

// import "photoswipe/dist/photoswipe.css";

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
import { ProjectsQueryResult } from "@/sanity.types";

const leftArrowSVGString = `
  <svg aria-hidden="true" class="pswp__icn" viewBox="0 0 476.213 476.213" width="40" height="40">
    <polygon fill="black" points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 
      57.427,253.107 476.213,253.107 "/>
  </svg>
`;

const closeSVGString = `<svg aria-hidden="true" class="pswp__icn" width="800px" height="800px" viewBox="-0.5 0 25 25" fill="black" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const zoomSVGString = `<svg aria-hidden="true" class="pswp__icn" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.9992 21L14.9492 14.95" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const galleryOptions = {
  arrowPrevSVG: leftArrowSVGString,
  arrowNextSVG: leftArrowSVGString,
  closeSVG: closeSVGString,
  zoomSVG: zoomSVGString,
  // mainClass: "pswp--custom-icon-colors",
  mainClass: "pswp--crossfade",

  gallery: "#gallery--custom-icon-colors",
  children: "a",
  // showHideOpacity: true,

  // arrowPrev: false,
  // arrowNext: false,
  zoom: true,
  // close: false,
  counter: false,
  bgOpacity: 0.98,
  spacing: 0,
  // padding: { top: 40, bottom: 40, left: 40, right: 40 },
  paddingFn: (viewportSize: any, itemData: any, index: number) => {
    return {
      // check based on slide index
      // top: index === 0 ? 100 : 0,

      // check based on viewport size
      top: viewportSize.x < 640 ? -100 : 40,
      bottom: viewportSize.x < 640 ? 0 : 40,
      left: viewportSize.x < 640 ? 8 : 40,
      right: viewportSize.x < 640 ? 8 : 40,

      // check based on image size
      // left: itemData.w < 2000 ? 50 : 0,

      // right: 0
    };
  },
};

type Props = {
  projects: ProjectsQueryResult;
  children: React.ReactElement;
};

export default function PhotoswipeGallery({ children }: Props) {
  const id = useId();
  const handle = useFullScreenHandle();

  return (
    <Gallery
      options={galleryOptions}
      plugins={(pswpLightbox) => {
        // register plugin
        const captionPlugin = new PhotoSwipeDynamicCaption(pswpLightbox, {
          captionContent: (slide: { data: { caption: string } }) =>
            slide.data.caption,
          mobileLayoutBreakpoint: 640,
          // verticallyCenterImage: true
        });

        // register another plugin
        // ...
      }}
    >
      {children}
    </Gallery>
  );
}
