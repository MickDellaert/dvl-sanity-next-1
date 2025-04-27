// import {
//   getCategoriesData,
//   getCategoryDataOrder,
// } from "@/sanity/lib/queryLoaders";

import { PortableText } from "@portabletext/react";
import { Category } from "@/sanity/types";
import { SingleCategoryResult } from "@/sanity.types";

type CategoryType = {
  category: Category;
};

export default function SeriesDescription({
  category,
}: {
  category: SingleCategoryResult;
}) {
  return (
    category && (
      <div
        key={category._id}
        className="relative z-0 text-balance pt-8 
        
        before:absolute before:left-0 before:top-0 before:h-[3px] before:w-16 before:bg-black before:content-['']"
      >
        <h3 className="mb-3 text-2xl uppercase md:text-3xl">{category.name}</h3>
        <div className="text-base leading-relaxed md:text-lg md:leading-relaxed">
          {category.seriesDescription && (
            <PortableText value={category.seriesDescription} />
          )}
        </div>
      </div>
    )
  );
}
