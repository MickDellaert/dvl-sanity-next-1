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
      <div
        className="top-[80px] z-30 mt-[80px] flex w-full flex-col justify-end gap-9
         bg-white pb-20 text-left text-xs font-medium tracking-widest text-neutral-500 
         md:sticky md:mt-0 md:h-10 md:flex-row md:pb-4 md:text-base"
      >
        {categoryData.map((category) => (
          <button
            key={category._id}
            className=" h-1 md:h-auto"
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
