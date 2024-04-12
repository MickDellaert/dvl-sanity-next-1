
// import { LightGalleryMasonry } from "@/app/unused/lightGalleryMasonry";
import { getProjectsData } from "@/sanity/lib/queryLoaders";

export default async function Page() {
  const projects = await getProjectsData();

  return (
    <>
   
      {/* <LightGalleryMasonry projects={projects}/> */}
    </>
  );
}
