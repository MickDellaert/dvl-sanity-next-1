"use client";

import Image from "next/image";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import Link from "next/link";
import { Category, Project } from "@/sanity/types";
import { useId } from "react";

type Props = {
  imageUrls: string[];
};

export default function HomePageGallery({ imageUrls }: Props) {
  const id = useId();

  return (
    <div>
      {!Array.isArray(imageUrls) ? (
        <LightGallery>
          {
            <Link className="gallery-item" href={imageUrls}>
              <Image src={imageUrls} data-src={imageUrls} width={200} height={200} alt="alt" />
            </Link>
          }
        </LightGallery>
      ) : (
        <>
          <LightGallery counter={true}>
            {imageUrls.map((imageUrls) => (
              <>
                <Link key={imageUrls} className="gallery-item" href={imageUrls}>
                  <Image src={imageUrls} data-src={imageUrls} width={200} height={200} alt="alt" />
                </Link>
              </>
            ))}
          </LightGallery>
        </>
      )}
    </div>
  );
}
