"use client";

import {
  getCategoriesData,
  getCategoryDataOrder,
} from "@/sanity/lib/queryLoaders";
import { PortableText } from "@portabletext/react";
import dynamic from "next/dynamic";
import { Category } from "@/sanity/types";
import Masonry from "@mui/lab/Masonry";
import { Theme, ThemeOptions, useTheme } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ProjectsGalleryPhotoswipeSeries from "@/components/pages/series/projects-gallery-photoswipe-series";

const DynamicProjectsGallery = dynamic(
  () => import("@/components/pages/series/projects-gallery"),
  { ssr: false },
);

const breakpointsOverrides = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const getCustomTheme = (theme: Theme | ThemeOptions | undefined) =>
  createTheme({
    ...theme,
    breakpoints: { values: { ...breakpointsOverrides } },
  });

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

export default function Series({ categoryData }: CategoryData) {
  // const { slug } = params;

  // const categoryData = await getCategoryDataOrder(slug);

  // const { slug: pageSlug, title, content } = pageData ?? {};
  // const { _id, name, seriesDescription, projects } = categoryData ?? {};

  const theme = useTheme();

  return (
    <>
      <ThemeProvider theme={getCustomTheme(theme)}>
        {categoryData.map((category) => (
          <React.Fragment key={category._id}>
            <section className="flex flex-col justify-center mt:0 md:mt-32">
              <div className="justify-between pb-8 md:pb-40 md:flex md:flex-row">
                <div className="top-32 mb-16 w-full self-start md:sticky md:mb-0 md:w-4/12 xl:w-3/12">
                  <h2 className="mb-4 text-3xl font-semibold tracking-widest">
                    {category.name}
                  </h2>
                  <div className="text-sm leading-relaxed">
                    <PortableText value={category.seriesDescription} />
                  </div>
                </div>
                <div className="-mr-0 w-full md:w-8/12 lg:-mr-[80px] top-32 md:sticky">
                  <Masonry
                    columns={{ xs: 1, lg: 2 }}
                    spacing={{ xs: 0, lg: 10 }}
                    defaultHeight={1200}
                    defaultColumns={2}
                    defaultSpacing={10}
                  >
                    <ProjectsGalleryPhotoswipeSeries
                      projects={category.projects}
                    />
                  </Masonry>
                </div>
              </div>
            </section>
          </React.Fragment>
        ))}
      </ThemeProvider>
    </>
  );
}
