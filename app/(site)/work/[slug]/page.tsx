import ButtonTest from "@/components/ButtonTest";
import { getCategoriesData, getCategoryDataOrder } from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";

const DynamicProjectsGallery = dynamic(() => import("@/components/ProjectsGallery"), { ssr: false });

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

  const categoryData = await getCategoryDataOrder(slug);

  // const { slug: pageSlug, title, content } = pageData ?? {};
  // const { _id, name, seriesDescription, projects } = categoryData ?? {};

  console.log(categoryData);

  return (
    <>
      <ButtonTest />
      {categoryData.map((category) => (
        <>
          <section className="flex flex-col justify-center">
            {/* <div>{`${slug} page`}</div> */}
            <div className="flex flex-row justify-between mt-12">
              <div className="w-2/6 pr-20">
                <h2 className="font-semibold tracking-widest text-3xl mb-8"> {category.name}</h2>
                <div className="text-sm">
                  <PortableText value={category.seriesDescription} />
                </div>
              </div>
              <div className="w-4/6 -mr-[80px]">
                <DynamicProjectsGallery projects={category.projects} />
              </div>
            </div>
          </section>
        </>
      ))}
    </>
  );
}
