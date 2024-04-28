import { getCategoriesData, getCategoryDataOrder } from "@/sanity/lib/queryLoaders";
// import dynamic from "next/dynamic";
import Series from "@/components/pages/series/series";
import { notFound } from "next/navigation";
// import Masonry from "@mui/lab/Masonry";
import SeriesFilter from "@/components/pages/series/series-filter";

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
      <main className="w-[90%] md:max-w-screen-2xl mx-auto">
        {/* <ButtonTest /> */}
        <SeriesFilter categoryData={data}/>
        <Series categoryData={data} />
      </main>
    </>
  );
}
