"use client";

import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import {
  SanityImageCrop,
  SanityImageHotspot,
  SanityImageDimensions,
} from "@/sanity.types";
import Image from "next/image";

type BioImageProps = {
  data: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  dimensions: SanityImageDimensions | null;
};

export default function BioImage({ data, dimensions }: BioImageProps) {
  const { urlFor } = useImageUrlBuilder();

  const width = dimensions?.width ?? 1000;
  const height = dimensions?.height ?? 1000;

  return (
    <Image
      src={data ? urlFor(data).width(width).height(height).url() : ""}
      alt=""
      width={1000}
      height={1000}
      className=""
    />
  );
}
