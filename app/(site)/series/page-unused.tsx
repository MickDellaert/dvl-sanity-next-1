import {
  getCategoriesData,
  getCategoryDataOrder,
} from "@/sanity/lib/queryLoaders";
// import { PortableText } from "@portabletext/react";
// import dynamic from "next/dynamic";
// import ProjectGallery from "@/components/unused/series-gallery";
import Series from "@/components/pages/series/series";
import { notFound } from "next/navigation";
// import SeriesFilter from "@/components/pages/series/series-filter";

// const DynamicProjectsGallery = dynamic(() => import("@/components/pages/series/projects-gallery"), { ssr: false });

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
  // const { slug } = params;

  const categoryData = await getCategoriesData();
  // const categoryDataOrder = await getCategoryDataOrder(slug);

  if (!categoryData) {
    notFound();
  }

  // const { slug: pageSlug, title, content } = pageData ?? {};
  // const { _id, name, seriesDescription, projects } = categoryData ?? {};

  if (!categoryData) {
    notFound();
  }

  return (
    <>
      <section className="px-8 md:px-16">
        {/* <ButtonTest /> */}
        <Series categoryData={categoryData} />
      </section>
    </>
  );
}
