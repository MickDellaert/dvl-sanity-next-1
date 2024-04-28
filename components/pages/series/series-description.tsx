// import {
//   getCategoriesData,
//   getCategoryDataOrder,
// } from "@/sanity/lib/queryLoaders";

import { PortableText } from "@portabletext/react";
import { Category } from "@/sanity/types";

type CategoryType = {
  category: Category;
};

export default function SeriesDescription({ category }: CategoryType) {
  return (
      <div key={category._id}>
        <h2 className="mb-4 text-3xl font-semibold tracking-widest">
          {category.name}
        </h2>
        <div className="text-sm leading-relaxed">
          <PortableText value={category.seriesDescription} />
        </div>
      </div>
  );
}
