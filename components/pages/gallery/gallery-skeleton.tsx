import React from "react";

export default function GallerySkeleton() {
  const skeletonItems = [...Array(12)].map((_, i) => (
    <div
      key={i}
      className="mb-12 aspect-square animate-pulse bg-gray-200"
    ></div>
  ));

  return (
    <div className="mt-24 grid h-screen gap-16 md:grid-cols-3 xl:grid-cols-4">
      {skeletonItems}
    </div>
  );
}
