import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import Image from "next/image";
import SanityImage from "@/components/shared/sanity-image";
import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageDimensions,
  SanityImageHotspot,
} from "@/sanity.types";
import MasonryWrapper from "../series/masonry-wrapper";

type ThreeArtParkExpo = {
  _id: string;
  name: string | null;
  poster: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  posterDimensions: SanityImageDimensions | null;
  gallery: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "gallery";
  } | null;
  photos: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }> | null;
  images: Array<{
    asset: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    } | null;
    ref: string | null;
    imageDimensions: SanityImageDimensions | null;
  }> | null;
  video: string | null;
};
export default async function ThreeArtParkExhibitionsMasonry({
  expo,
}: {
  expo: ThreeArtParkExpo;
}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { urlFor } = useImageUrlBuilder();

  return (
    // <div className="col-span-12 grid grid-cols-subgrid gap-4 md:col-span-8 md:col-start-5">
    //   <div className="col-span-8 grid grid-cols-subgrid gap-x-12 gap-y-20">
    <MasonryWrapper
      columns={{ xs: 1, lg: 2 }}
      spacing={{ xs: 0, lg: 6 }}
      sx={{
        "& > *": {
          mb: { xs: 8, sm: 6 },
        },
        width: "auto",
        pt: 6,
      }}
    >
      {expo.poster && (
        <Image
          src={urlFor(expo.poster)
            .width(expo.posterDimensions?.width || 500)
            .height(expo.posterDimensions?.height || 500)
            .fit("crop")
            .url()}
          alt=""
          width={500}
          height={500}
          className="col-span-3 col-start-2 mb-16 self-start bg-stone-200 drop-shadow-2xl"
        />
      )}

      <video
        autoPlay
        controls
        muted
        loop
        playsInline
        width="100% "
        className="col-span-4 col-start-5"
      >
        <source src={expo.video || undefined} type="video/mp4" />
        Je browser ondersteunt dit videotype niet.
      </video>
      {expo.images?.map((expoImage) => (
        <SanityImage
          key={expoImage.ref}
          data={expoImage}
          dimensions={expoImage.imageDimensions}
          className={` ${
            expoImage.imageDimensions?.height &&
            expoImage.imageDimensions?.width &&
            expoImage.imageDimensions.height > expoImage.imageDimensions.width
              ? "row-span-2"
              : ""
          }`}
        />
      ))}
    </MasonryWrapper>
    //   </div>
    // </div>
  );
}
