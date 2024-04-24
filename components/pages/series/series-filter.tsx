"use client";

import { Category } from "@/sanity/types";
import { useRouter } from "next/navigation";

type CategoryData = {
  categoryData: Category[];
};

export default function SeriesFilter({ categoryData }: CategoryData) {
  const router = useRouter();

  return (
    <>
      <div className="top-[80px] z-30 flex h-10 w-full flex-row justify-end gap-9 bg-white pb-4 text-neutral-500 text-sm font-medium tracking-widest md:sticky md:text-xl">
        {categoryData.map((category) => (
          <button
            key={category._id}
            className="text-left text-lg md:text-xl"
            onClick={() => {
              router.push(`/series/${category.slug}`);
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* <div className="top-[72px] z-30 mb-12 mt-16 flex h-10 w-full flex-row justify-end gap-9 bg-white text-lg font-medium tracking-widest md:sticky md:text-xl">
        <button
          className="text-left text-lg md:text-xl"
          onClick={() => {
            router.push("/series/forgotten-inventions");
          }}
        >
          Forgotten Inventions
        </button>
        <button
          className="text-left text-lg md:text-xl"
          onClick={() => {
            router.push("/series/bygone-toys");
          }}
        >
          Bygone Toys
        </button>
        <button
          className="text-left text-lg md:text-xl"
          onClick={() => {
            router.push("/series/future-inventions");
          }}
        >
          Future Inventions
        </button>
      </div> */}
    </>
  );
}
