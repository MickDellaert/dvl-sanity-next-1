import { PortableTextBlock } from "sanity";

export type HomePage = {
  _id: string;
  homepageTitle: string;
  homepageDescription: string;
  homepageTest: string;
};

export type Project = {
  _id: string;
  projectImage: string;
  projectTitle: string;
  projectDescription: PortableTextBlock[];
  date: string;
  material: string;
  size: string;
};
