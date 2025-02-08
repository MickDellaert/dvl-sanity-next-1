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
      <div key={category._id} className="">
        <h2 className="h-fit align-text-top text-5xl">—</h2>
        <h2 className="mb-4 text-3xl uppercase">{category.name}</h2>
        <div className="text-lg leading-relaxed">
          {category.seriesDescription && (
            <PortableText value={category.seriesDescription} />
          )}
        </div>
      </div>
    )
  );
}
