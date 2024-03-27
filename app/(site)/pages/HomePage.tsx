import HomePageCategory from "@/components/HomePageCategory";
import { getHomePageData } from "@/sanity/lib/queryLoaders";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export default async function HomePage() {
  const builder = imageUrlBuilder(client);

  function urlFor(source: SanityImageSource) {
    return builder.image(source);
  }
  

  const homePageData = await getHomePageData();

  // console.log(homePageData);

  const { title, homepageDescription, homepageMainImage, homepageCategories } = homePageData;

  console.log(homePageData);

  return (
    <div className="flex flex-col items-center">
      <h1>{title}</h1>
      {/* <p>{homepageDescription}</p> */}
      <div className="relative ">
        {/* <h1 className="font-sans w-full text-center text-8xl font-semibold uppercase tracking-widest text-white absolute left-1/2 top-1/2 -translate-y-24 -translate-x-1/2">
          David Van Loon
        </h1> */}
        <Image
          className="h-[calc(100vh-64px)] w-screen object-cover"
          src={urlFor(homepageMainImage).width(1000).height(1000).fit("crop").url()}
          alt={homepageMainImage.alt}
          width={1000}
          height={1000}
        />
      </div>
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
    </div>
  );
}
