"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import Link from "next/link";
import { Category } from "@/sanity/types";

type CategoryData = {
  categoryData: Category[];
};

export default function CategoryGallery({ categoryData }: CategoryData) {
  return (
    <LightGallery>
      {categoryData.map((category) =>
        category.project.map((project) => (
          <Link key={project} className="gallery-item" href={project}>
            <Image src={project} data-src={project} width={200} height={200} alt="alt" />
          </Link>
        ))
      )}
    </LightGallery>
  );
}
