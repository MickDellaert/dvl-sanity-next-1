"use client";

import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import {
  SanityImageCrop,
  SanityImageHotspot,
  SanityImageDimensions,
} from "@/sanity.types";
import Image from "next/image";

type SanityImageProps = {
  data: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
    } | null;
    ref?: string | null;

    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type?: "image";
  };
  dimensions: SanityImageDimensions | null;
};

export default function SanityImage({ data, dimensions }: SanityImageProps) {
  const { urlFor } = useImageUrlBuilder();

  const width = dimensions?.width ?? 1000;
  const height = dimensions?.height ?? 1000;

  return (
    <Image
      src={
        data ? urlFor(data).width(width).height(height).fit("crop").url() : ""
      }
      alt=""
      width={1000}
      height={1000}
      className=""
    />
  );
}
