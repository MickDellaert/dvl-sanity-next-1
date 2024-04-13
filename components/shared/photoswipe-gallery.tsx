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
  projects: Project[];
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
