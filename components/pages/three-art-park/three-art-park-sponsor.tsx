import SanityImage from "@/components/shared/sanity-image";
import {
  internalGroqTypeReferenceTo,
  SanityImageDimensions,
} from "@/sanity.types";
import React from "react";

type threeArtSponsorLogos = Array<{
  asset: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
  } | null;
  ref: string | null;
  imageDimensions: SanityImageDimensions | null;
}> | null;

export default function ThreeArtParkSponsor({
  threeArtSponsorLogos,
}: {
  threeArtSponsorLogos: threeArtSponsorLogos;
}) {
  return (
    <div className="flex h-8 items-center gap-2 md:gap-8 xl:h-16">
      {threeArtSponsorLogos?.map((threeArtSponsor, i) => (
        <>
          <SanityImage
            key={i}
            data={threeArtSponsor}
            dimensions={threeArtSponsor.imageDimensions}
            className="h-full w-auto"
          />
        </>
      ))}
    </div>
  );
}
