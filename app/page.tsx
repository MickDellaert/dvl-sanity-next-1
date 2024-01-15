import Category from "@/components/Category";
import Project from "@/components/Project";
import { getHomePageData } from "@/sanity/lib/queryLoaders";
import Image from "next/image";

export default async function Home() {
  const homePageData = await getHomePageData();

  return (
    <main className="max-w-screen-2xl mx-auto p-12">
      {homePageData.map((info) => (
        <div key={info._id} className="w-full my-20">
          <h1 className="mb-8 text-8xl font-bold">{info.homepageTitle}</h1>
          <p>{info.homepageDescription}</p>
          <Image className="" src={info.homepageMainImage} alt={info.homepageTitle} width={2000} height={2000} />
        </div>
      ))}
      <Project />
      <Category />
    </main>
  );
}
