import useImageUrlBuilder from "@/app/hooks/useImageUrlBuilder";
import { AboutDavidQueryResult } from "@/sanity.types";
import { PortableText } from "next-sanity";
import Image from "next/image";
import StickyTitle from "../homepage/sticky-title";
import Contact from "./contact";
import Education from "./education";
import Bio from "./bio";
import AboutDavidExhibitions from "./about-david-exhibitions";
import AboutDavidEducation from "./about-David-education";
import AboutDavidEducationGrid from "./about-David-education-grid";
import AboutDavidExhibitionGrid from "./about-David-exhibtion-grid";

export default function About() {
  return (
    <>
      <Bio />
      <AboutDavidEducationGrid />
      <AboutDavidExhibitionGrid />
    </>
  );
}
