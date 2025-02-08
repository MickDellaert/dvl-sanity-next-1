import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/live";
import { homepageHeaderQuery } from "@/sanity/lib/queries";

export default async function HomePageHeaderImage() {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  const { data: homepageHeaderImage } = await sanityFetch({
    query: homepageHeaderQuery,
  });

  if (!homepageHeaderImage) {
    notFound();
  }

  console.log(homepageHeaderImage);

  const { homepageMainImageSingle } = homepageHeaderImage;

  return (
    <>
      <div className="flex min-h-[calc(100vh-64px)] w-full auto-rows-auto grid-cols-12 pb-8">
        <Image
          className="ml-auto w-7/12 self-end"
          src={
            homepageMainImageSingle ? urlFor(homepageMainImageSingle).url() : ""
          }
          alt={homepageMainImageSingle?.alt || "default alt text"}
          width={1000}
          height={1000}
          key={homepageMainImageSingle?.asset?._ref}
        />
      </div>
    </>
  );
}
