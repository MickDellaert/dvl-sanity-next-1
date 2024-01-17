import { getHomePageData } from "@/sanity/lib/queryLoaders";
import Image from "next/image";

export default async function HomePage() {
  const homePageData = await getHomePageData();

  // console.log(homePageData);

  return (
    <div>
      <h1>{homePageData.title}</h1>
      <p>{homePageData.homepageDescription}</p>
      <Image className="" src={homePageData.homepageMainImage} alt={homePageData.title} width={2000} height={2000} />
      

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
