import ButtonTest from "@/components/unused/button-test";
import { getCategoriesData, getCategoryData } from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";

// const DynamicProjectGallery = dynamic(() => import("@/app/unused/ProjectGalleryUnused"), { ssr: false });

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


  const categoryData = await getCategoryData(slug);

    // const { slug: pageSlug, title, content } = pageData ?? {};
  const { _id, name, seriesDescription, projects } = categoryData ?? {};


  return (
    <>
    <ButtonTest/>
    
      <section className="flex flex-col justify-center">
        {/* <div>{`${slug} page`}</div> */}
        <div className="flex flex-row justify-between mt-36">
          <div className="w-2/6 pr-20">
            <h2 className="font-semibold tracking-widest text-4xl mb-8"> {name}</h2>
            <div className="text-sm">
            <PortableText value={seriesDescription} />
            </div>
          </div>
          <div className="w-4/6 -mr-[80px]">
            {/* <DynamicProjectGallery projects={projects} /> */}
          </div>
        </div>
      </section>
    </>
  );
}
