import ProjectGallery from "@/components/ProjectGallery";
import { getCategoriesData, getCategoryData } from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";

const DynamicProjectGallery = dynamic(() => import("@/components/ProjectGallery"), { ssr: false });

type paramProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const categories = await getCategoriesData();

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function Page({ params }: paramProps) {
  const { slug } = params;

  console.log(slug);

  const categoryData = await getCategoryData(slug);

    // const { slug: pageSlug, title, content } = pageData ?? {};
  const { _id, name, seriesDescription, projects } = categoryData ?? {};

  // console.log(categoryData);

  return (
    <>
      <section className=" flex flex-col justify-center px-16">
        {/* <div>{`${slug} page`}</div> */}
        <div className="flex flex-row justify-between mt-36">
          <div className="w-1/5">
            <h2 className="font-semibold tracking-widest text-4xl mb-8"> {name}</h2>
            <div className="text-sm">
            <PortableText value={seriesDescription} />
            </div>
          </div>
          <div className="w-3/5">
            <DynamicProjectGallery projects={projects} />
          </div>
        </div>
      </section>
    </>
  );
}
