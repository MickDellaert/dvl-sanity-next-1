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
        className="relative z-0 pt-10 before:absolute before:left-0 before:top-0 before:h-[4px]
                   before:w-16 before:bg-black before:content-[''] "
      >
        <h2 className="mb-4 text-2xl uppercase md:text-3xl">{category.name}</h2>
        <div className="text-base leading-relaxed md:text-lg">
          {category.seriesDescription && (
            <PortableText value={category.seriesDescription} />
          )}
        </div>
      </div>
    )
  );
}
