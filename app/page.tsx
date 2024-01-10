import Project from "@/components/Project";
import { getHomePageData } from "@/sanity/lib/queryLoaders";

export default async function Home() {
  const homePageData = await getHomePageData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {homePageData.map((info) => (
        <div key={info._id}>
          <h1>{info.homepageTitle}</h1>
          <p>{info.homepageDescription}</p>
          <p>{info.homepageTest}</p>
        </div>
      ))}
      <Project />
    </main>
  );
}
