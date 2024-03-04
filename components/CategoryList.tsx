import { Category, HomePageCategory } from "@/sanity/types";
import React from "react";
// import CategoryGallery from "./CategoryGallery";
import HomePageGallery from "./HomePageGallery";
import Link from "next/link";

type Props = {
  homepageCategories: HomePageCategory[];
};

export default function CategoryList({ homepageCategories }: Props) {
  // console.log(homepageCategories);

  const [name, projects] = homepageCategories

  return (
    <>
      <div>HomeCategoryList</div>

      {homepageCategories.map((category, index) => {
        // TODO: check _id: is niet altijd uniek komende van een array
        // const test = category.projectUrls;

        return (
          <>
            <Link href={`series/${category.slug}`} key={index}>
              <div>
                <h2>{category.name}</h2>
              </div>
            </Link>
            {/* <HomePageGallery imageUrls={test} /> */}
          </>
        );
      })}
    </>
  );
}
