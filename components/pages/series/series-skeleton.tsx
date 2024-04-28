import React from "react";

export default function SeriesSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-20 mr-[80px]">
      <div className=" h-80 animate-pulse bg-gray-100"></div>
      <div className=" h-80 animate-pulse bg-gray-100"></div>
      <div className=" h-80 animate-pulse bg-gray-100"></div>
      <div className=" h-80 animate-pulse bg-gray-100"></div>
    </div>
  );
}
