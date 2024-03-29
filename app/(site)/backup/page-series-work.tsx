import ButtonTest from "@/components/pages/series/button-test";
import { getCategoriesData, getCategoryDataOrder } from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";

// const DynamicProjectGallery = dynamic(() => import("@/components/pages/series/projects-gallery"), { ssr: false });

// type paramProps = {
//   params: {
//     slug: string;
//   };
// };

// export async function generateStaticParams() {
//   const categories = await getCategoriesData();

//   return categories.map((category) => ({
//     slug: category.slug,
//   }));
// }

export default async function Page() {
  // const { slug } = params;

  // console.log(slug);

  const categoryData = await getCategoriesData();

  // const { slug: pageSlug, title, content } = pageData ?? {};
  // const { _id, name, seriesDescription, projects } = categoryData ?? {};

  console.log(categoryData);

  return (
    <>
      <section className="px-20 max-w-screen-3xl mx-auto">
        <ButtonTest />
        {categoryData.map((category) => (
          <>
            {/* flex flex-col justify-center relative h-200 */}
            <section className="">
              {/* <div>{`${slug} page`}</div> */}
              <div className="md:flex md:flex-row justify-between pb-40">
                <div className="w-full md:w-4/12 xl:w-3/12 sticky top-16 self-start">
                  <h2 className="font-semibold tracking-widest text-3xl mb-4"> {category.name}</h2>
                  <div className="text-sm leading-relaxed">
                    <PortableText value={category.seriesDescription} />
                  </div>
                </div>
                <div className="w-full md:w-7/12 xl:-mr-[80px]">
                  {/* <DynamicProjectGallery projects={category.projects} /> */}
                </div>
              </div>
            </section>
          </>
        ))}
      </section>
    </>
  );
}
