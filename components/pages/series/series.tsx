import { getCategoriesData, getCategoryDataOrder } from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";
import ProjectsGallery from "@/components/pages/series/projects-gallery";
import { Category } from "@/sanity/types";
import Masonry from "@mui/lab/Masonry";

const DynamicProjectsGallery = dynamic(() => import("@/components/pages/series/projects-gallery"), { ssr: false });

// type paramProps = {
//   params: {
//     slug: string;
//   };
// };

type CategoryData = {
  categoryData: Category[];
};

export async function generateStaticParams() {
  const categories = await getCategoriesData();

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function Series({ categoryData }: CategoryData) {
  // const { slug } = params;


  // const categoryData = await getCategoryDataOrder(slug);

  // const { slug: pageSlug, title, content } = pageData ?? {};
  // const { _id, name, seriesDescription, projects } = categoryData ?? {};

  return (
    <>
      {categoryData.map((category) => (
        <>
          <section className="flex flex-col justify-center">
            <div className="md:flex md:flex-row justify-between pb-40">
              <div className="w-full md:w-4/12 xl:w-3/12 md:sticky top-16 self-start mb-16 md:mb-0">
                <h2 className="font-semibold tracking-widest text-3xl mb-4"> {category.name}</h2>
                <div className="text-sm leading-relaxed">
                  <PortableText value={category.seriesDescription} />
                </div>
              </div>
              <div className="w-full md:w-7/12 xl:-mr-[80px]">
                <Masonry
                  columns={{ xs: 1, lg: 2 }}
                  spacing={{ xs: 0, lg: 10 }}
                  defaultHeight={1200}
                  defaultColumns={2}
                  defaultSpacing={10}
                >
                  <ProjectsGallery projects={category.projects} />
                </Masonry>
              </div>
            </div>
          </section>
        </>
      ))}
    </>
  );
}
