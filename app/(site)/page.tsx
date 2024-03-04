// import Category from "@/components/Category";
import HomePage from "@/app/(site)/pages/HomePage";
import NavBar from "@/components/NavBar";
import Page from "@/components/Page";
import Project from "@/components/Project";
import ProjectList from "@/components/ProjectList";
import Test from "@/app/unused/Test";
import TestElement from "@/app/unused/TestElement";
import { getHomePageData } from "@/sanity/lib/queryLoaders";
import Image from "next/image";

export default async function Home() {
  const homePageData = await getHomePageData();

  return (
    <main className="">
      {/* <NavBar/> */}
      {/* <Test/> */}
      {/* <TestElement/> */}
      <HomePage/>
      {/* <Project /> */}
      {/* <ProjectList/> */}
      {/* <Category /> */}
      {/* <Page/> */}
    </main>
  );
}