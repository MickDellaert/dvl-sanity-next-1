"use client";

import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import Image from "next/image";

export default function BioImage({ data }: { data: { portrait?: string } }) {
  const { urlFor } = useImageUrlBuilder();

  return (
    <Image
      src={
        data?.portrait
          ? urlFor(data?.portrait).width(1000).height(1000).url()
          : ""
      }
      alt=""
      width={1000}
      height={1000}
      className="top-20 col-span-4 col-start-1 mt-16 self-start"
    />
  );
}
