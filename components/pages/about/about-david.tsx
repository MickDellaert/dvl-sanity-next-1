import AboutDavidBio from "./about-david-bio";
import AboutDavidEducation from "./about-david-education";
import AboutDavidExhibition from "./about-david-exhibition";

export default function AboutDavid() {
  return (
    <div className="flex flex-col gap-y-24 pb-12">
      <AboutDavidBio />
      <AboutDavidEducation />
      <AboutDavidExhibition />
    </div>
  );
}
