// import {
//   getCategoriesData,
//   getCategoryDataOrder,
// } from "@/sanity/lib/queryLoaders";

import { Category } from "@/sanity/types";
import React from "react";
import SeriesDescription from "./series-description";
import SeriesMasonry from "./series-masonry";

type CategoryData = {
  categoryData: Category[];
};


export default function Series({ categoryData }: CategoryData) {
  return (
    <>
      <div className="mt:0 flex flex-col justify-center md:mt-32">
        {categoryData.map((category) => (
          <section
            key={category._id}
            className="justify-between pb-8 md:flex md:flex-row md:pb-40"
          >
            <div className="top-32 mb-16 w-full self-start md:sticky md:mb-0 md:w-4/12 xl:w-3/12">
              <SeriesDescription category={category} />
            </div>
            <div className="top-32 -mr-0 w-full md:sticky md:w-8/12 lg:-mr-[80px]">
              <SeriesMasonry category={category} />
            </div>
          </section>
        ))}
      </div>

      {/* <ThemeProvider theme={getCustomTheme(theme)}>
        {categoryData.map((category) => (
          <React.Fragment key={category._id}>
            <section className="mt:0 flex flex-col justify-center md:mt-32">
              <div className="justify-between pb-8 md:flex md:flex-row md:pb-40">
                <div className="top-32 mb-16 w-full self-start md:sticky md:mb-0 md:w-4/12 xl:w-3/12">
                  <h2 className="mb-4 text-3xl font-semibold tracking-widest">
                    {category.name}
                  </h2>
                  <div className="text-sm leading-relaxed">
                    <PortableText value={category.seriesDescription} />
                  </div>
                </div>
                <div className="top-32 -mr-0 w-full md:sticky md:w-8/12 lg:-mr-[80px]">
                  <Masonry
                    columns={{ xs: 1, lg: 2 }}
                    spacing={{ xs: 0, lg: 10 }}
                    defaultHeight={1200}
                    // defaultColumns={2}
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
      </ThemeProvider> */}
    </>
  );
}
