import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import Image from "next/image";
import SanityImage from "@/components/shared/sanity-image";
import { ThreeArtParkQueryResult } from "@/sanity.types";
import MasonryWrapper from "../series/masonry-wrapper";

type ThreeArtParkExpo = NonNullable<
  NonNullable<ThreeArtParkQueryResult>["threeArtParkExpo"]
>[number];

export default function ThreeArtParkExhibitionsImagesMasonry({
  expo,
}: {
  expo: ThreeArtParkExpo;
}) {
  const { urlFor } = useImageUrlBuilder();

  return (
    <MasonryWrapper
      columns={{ xs: 1, lg: 2 }}
      spacing={{ xs: 0, lg: 4 }}
      // sx={{
      //   "& > *": {
      //     mb: { xs: 8, sm: 4 },
      //   },
      //   width: "auto",
      //   pt: 6,
      // }}
      sx={{
        width: "auto",
        "& > *": { mb: { xs: 4, lg: 4 } },
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
          className=" bg-stone-200 drop-shadow-2xl"
        />
      )}

      <video
        autoPlay
        controls
        muted
        loop
        playsInline
        width="100% "
        className=""
      >
        <source src={expo.video || undefined} type="video/mp4" />
        Je browser ondersteunt dit videotype niet.
      </video>
      {expo.images?.map((expoImage) => (
        <SanityImage
          key={expoImage.ref}
          data={expoImage}
          dimensions={expoImage.imageDimensions}
        />
      ))}
    </MasonryWrapper>
  );
}
