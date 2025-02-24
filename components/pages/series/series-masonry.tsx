"use client";

import React from "react";
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
import ProjectsGalleryPhotoswipeSeries from "@/components/pages/series/series-gallery-photoswipe";
import { useState, useEffect } from "react";
import SeriesSkeleton from "./series-skeleton";
import { SingleCategoryResult } from "@/sanity.types";
import project from "@/sanity/schemas/documents/project-schema";

// const DynamicProjectsGallery = dynamic(
//   () => import("@/components/pages/series/projects-gallery"),
//   { ssr: false },
// );

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

type CategoryType = {
  category: Category;
};

export default function SeriesMasonry({
  category,
}: {
  category: SingleCategoryResult;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const theme = useTheme();

  return (
    category && (
      <>
        {/* {isClient ? (
        <div key={category._id}>
          <ThemeProvider theme={getCustomTheme(theme)}>
            <Masonry
              columns={{ xs: 1, lg: 2 }}
              spacing={{ xs: 0, lg: 10 }}
              defaultHeight={1200}
              // defaultColumns={2}
              defaultSpacing={10}
            >
              {category.projects && (
                <ProjectsGalleryPhotoswipeSeries projects={category.projects} />
              )}
            </Masonry>
          </ThemeProvider>
        </div>
      ) : (
        <SeriesSkeleton />
      )} */}
        <div key={category._id} className="flex flex-col items-center">
          <ThemeProvider theme={getCustomTheme(theme)}>
            <Masonry
              columns={{ xs: 1, lg: 2 }}
              spacing={{ xs: 0, lg: 10 }}
              defaultHeight={1200}
              // defaultColumns={2}
              defaultSpacing={10}
            >
              {category.projects ? (
                <ProjectsGalleryPhotoswipeSeries projects={category.projects} />
              ) : (
                <p>No projects available</p>
              )}
            </Masonry>
          </ThemeProvider>
        </div>
      </>
    )
  );
}
