import "lightgallery/css/lightgallery.css";
import CategoryGallery from "./CategoryGallery";
import { getCategoryData } from "@/sanity/lib/queryLoaders";

export default async function Category() {
  
  const categoryData = await getCategoryData();

  return (
    <>
      <div className=" prose">
        <h1>Category</h1>
        <h2>{categoryData[0].name}</h2>
        <CategoryGallery categoryData={categoryData} />
      </div>
    </>
  );
}
