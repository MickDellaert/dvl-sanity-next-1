import AboutDavidEducationGrid from "@/components/pages/about/about-David-education-grid";
import AboutDavidExhibitionGrid from "@/components/pages/about/about-David-exhibtion-grid";
import Bio from "@/components/pages/about/bio";

export default async function Page() {
  return (
    <>
      <Bio />
      <AboutDavidEducationGrid />
      <AboutDavidExhibitionGrid />
    </>
  );
}
