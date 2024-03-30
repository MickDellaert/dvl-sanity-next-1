import ButtonTest from "@/components/pages/series/button-test";
import { getCategoriesData, getCategoryDataOrder } from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";
import ProjectGallery from "@/components/pages/series/projects-gallery";
import Series from "@/components/pages/series/series";
import { notFound } from "next/navigation";

// const DynamicProjectsGallery = dynamic(() => import("@/components/pages/series/projects-gallery"), { ssr: false });

type paramProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const categories = await getCategoriesData();

  return categories.map((category) => ({
    slug: [category.slug],
  }));
}

export default async function Page({ params }: paramProps) {
  const { slug } = params;

  let data;

  if (slug) {
    const categoryDataOrder = await getCategoryDataOrder(slug);

    if (!categoryDataOrder.find((e) => e.slug === slug.toString())) {
      notFound();
    }
    data = categoryDataOrder;
  } else {
    const categoryData = await getCategoriesData();

    if (!categoryData) {
      notFound();
    }
    data = categoryData;
  }

  // const categoryData = await getCategoryDataOrder(slug);

  // if (!data) {
  //   notFound();
  // }

  // const { slug: pageSlug, title, content } = pageData ?? {};
  // const { _id, name, seriesDescription, projects } = categoryData ?? {};

  return (
    <>
      <section className="px-8 md:px-16">
        <ButtonTest />
        <Series categoryData={data} />
      </section>
    </>
  );
}
