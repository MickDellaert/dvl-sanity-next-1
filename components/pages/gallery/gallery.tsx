"use client";

import { ProjectsQueryResult } from "@/sanity.types";
import GalleryMobile from "./gallery-mobile";
import dynamic from "next/dynamic";
import GallerySkeleton from "./gallery-skeleton";

const DynamicGalleryMasonry = dynamic(() => import("./gallery-masonry"), {
  ssr: false,
  loading: () => <GallerySkeleton />,
});

export default function Gallery({
  projects,
}: {
  projects: ProjectsQueryResult;
}) {
  // if (!projects) {
  //   return null;
  // }

  return (
    <>
      <div className="hidden md:block">
        <DynamicGalleryMasonry projects={projects} />
      </div>
      <div className="flex flex-col gap-y-20 md:hidden">
        <GalleryMobile projects={projects} />
      </div>
    </>
  );
}
