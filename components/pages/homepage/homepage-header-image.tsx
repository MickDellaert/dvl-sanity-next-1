"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { homepageHeaderQuery } from "@/sanity/lib/queries";
import { useEffect, useState } from "react";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";

type HomepageMainImage = {
  homepageMainImage: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
};

export default function HomePageHeaderImage({
  homepageMainImage,
}: HomepageMainImage) {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    updateSize(); // Set initial values
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const paddingBottom =
    width > 1024 ? 32 : width > 768 ? height * 0.16 : height * 0.16;

  // const { data: homepageHeaderImage } = await sanityFetch({
  //   query: homepageHeaderQuery,
  // });

  // if (!homepageHeaderImage) {
  //   notFound();
  // }

  // const { homepageMainImageSingle } = homepageHeaderImage;

  return (
    <>
      <div
        // className="relative z-10 flex min-h-[calc(100dvh-64px)] w-full auto-rows-auto grid-cols-12 pb-[14dvh] md:pb-[16dvh] lg:pb-8"
        className="relative z-10 flex w-full auto-rows-auto grid-cols-12 lg:pb-8"
        style={{
          minHeight: `${height - 64}px`,
          paddingBottom: `${paddingBottom}px`,
          transition: "height 0.3s ease-out",
        }}
      >
        <Image
          className="ml-auto w-full self-end lg:w-8/12 2xl:w-7/12"
          src={homepageMainImage ? urlFor(homepageMainImage).url() : ""}
          alt={homepageMainImage?.alt || "default alt text"}
          width={1000}
          height={1000}
          key={homepageMainImage?.asset?._ref}
        />
      </div>
    </>
  );
}
