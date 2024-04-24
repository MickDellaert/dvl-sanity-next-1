import HomePageCategory from "@/components/pages/homepage/homepage-category";
import { getHomePageData } from "@/sanity/lib/queryLoaders";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Subtitle from "@/components/shared/subtitle";

export default async function HomePage() {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }

  const homePageData = await getHomePageData();

  const {
    title,
    homepageDescription,
    homepageMainImage,
    homepageMainImageSingle,
    homepageCategories,
  } = homePageData;

  console.log(homepageMainImageSingle);

  return (
    <div className="max-w-screen-2xl pt-8">
      <h1>{title}</h1>
      {/* <h2 className="self-start text-4xl">{homepageDescription}</h2> */}

      <h2 className="self-start text-4xl font-medium leading-snug md:text-5xl md:leading-snug lg:w-2/3">
        Antwerp and Mortehan based contemporary artist.
      </h2>

      <Image
        // className="h-[calc(100vh-64px)] w-screen object-cover"
        className="mt-20 w-full"
        src={urlFor(homepageMainImageSingle).url()}
        alt={homepageMainImageSingle.alt}
        width={1000}
        height={1000}
      />

      {/* <div className="mt-24 grid grid-cols-12"> */}
        {/* <h1 className="font-sans w-full text-center text-8xl font-semibold uppercase tracking-widest text-white absolute left-1/2 top-1/2 -translate-y-24 -translate-x-1/2">
          David Van Loon
        </h1> */}
        {/* <Image
          // className="h-[calc(100vh-64px)] w-screen object-cover"
          className="w-full"
          src={urlFor(homepageMainImage)
            .width(1000)
            .height(1000)
            .fit("crop")
            .url()}
          alt={homepageMainImage.alt}
          width={1000}
          height={1000}
        /> */}

        {/* {homepageMainImage.map((mainImage, index) => (
          <div
            key={index}
            className="odd:col-span-7 even:col-span-4 even:col-start-9 "
          >
            <Image
              // className="h-[calc(100vh-64px)] w-screen object-cover"
              className="w-full"
              // src={urlFor(mainImage).width(1000).height(1000).fit("crop").url()}
              src={urlFor(mainImage).url()}
              alt={mainImage.alt}
              width={400}
              height={400}
            />
          </div>
        ))} */}
      {/* </div> */}

      <Subtitle subtitle={"Painting Series"} />

      {/* <Image className="h-screen object-cover" src={homepageMainImage} alt={title} width={1000} height={1000} /> */}
      {/* <ImageTest imageTestData={homepageMainImage} /> */}
      {/* <CategoryList homepageCategories={homepageCategories} /> */}
      <HomePageCategory homepageCategories={homepageCategories} />

      {/* <ProjectList/> */}

      {/* {homePageData.map((info) => (
        <div key={info._id} className="w-full my-20">
          <h1 className="mb-8 text-8xl font-bold">{info.homepageTitle}</h1>
          <p>{info.homepageDescription}</p>
          <Image className="" src={info.homepageMainImage} alt={info.homepageTitle} width={2000} height={2000} />
        </div>
      ))} */}

      <Subtitle subtitle={"Upcoming Exhibitions"} />
    </div>
  );
}
