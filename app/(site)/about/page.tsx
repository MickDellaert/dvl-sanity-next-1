import AboutDavidBio from "@/components/pages/about/about-david-bio";
import AboutDavidEducation from "@/components/pages/about/about-david-education";
import AboutDavidExhibition from "@/components/pages/about/about-david-exhibition";

export default async function Page() {
  return (
    <div className="flex flex-col gap-y-24 pb-12">
      <AboutDavidBio />
      <AboutDavidEducation />
      <AboutDavidExhibition />
    </div>
  );
}
