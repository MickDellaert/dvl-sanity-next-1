import Category from "@/components/Category";
import HomePage from "@/components/HomePage";
import NavBar from "@/components/NavBar";
import Page from "@/components/Page";
import Project from "@/components/Project";
import Test from "@/components/Test";
import { getHomePageData } from "@/sanity/lib/queryLoaders";
import Image from "next/image";

export default async function Home() {
  const homePageData = await getHomePageData();

  return (
    <main className="max-w-screen-2xl mx-auto p-12">
      {/* <NavBar/> */}
      {/* <Test/> */}
      <HomePage/>
      <Project />
      <Category />
      <Page/>
    </main>
  );
}
