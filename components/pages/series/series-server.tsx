import React, { Suspense } from "react";
import Series from "./series";
import { Category } from "@/sanity/types";

type CategoryData = {
  categoryData: Category[];
};

export default function SeriesServer({ categoryData }: CategoryData) {
  return (
    <Suspense fallback={<h2 className="text-pink-800">test suspense</h2>}>
      <Series categoryData={categoryData} />
    </Suspense> 
  );
}
