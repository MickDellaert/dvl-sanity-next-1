// import {
//   getCategoriesData,
//   getCategoryDataOrder,
// } from "@/sanity/lib/queryLoaders";

"use client";

import { PortableText } from "@portabletext/react";
import { Category } from "@/sanity/types";
import { SingleCategoryResult } from "@/sanity.types";
import { motion } from "motion/react";

type CategoryType = {
  category: Category;
};

// const inViewVariant = {
//   initial: { opacity: 1, y: 80 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { margin: "0%", once: false },
//   transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
// };

export default function SeriesDescription({
  category,
  index,
}: {
  category: SingleCategoryResult;
  index: number;
}) {
  return (
    category && (
      <motion.div
        key={category._id}
        initial={index === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-5%", once: false }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-0 text-balance pt-8 
        
        before:absolute before:left-0 before:top-0 before:h-1 before:w-12 before:bg-stone-950 before:content-['']"
      >
        <h3 className="mb-3 text-2xl uppercase md:text-3xl">{category.name}</h3>
        <div className="text-base leading-relaxed md:text-lg md:leading-relaxed">
          {category.seriesDescription && (
            <PortableText value={category.seriesDescription} />
          )}
        </div>
      </motion.div>
    )
  );
}
