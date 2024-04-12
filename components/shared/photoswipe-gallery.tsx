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
  bgOpacity: 0.90,
  spacing: 0.1,
  padding: { top: 60, bottom: 60, left: 60, right: 60 },
};

type Props = {
  projects: Project[];
  children: React.ReactElement
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
            mobileLayoutBreakpoint: 1,
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
