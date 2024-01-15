import { PortableTextBlock } from "sanity";

export type HomePage = {
  _id: string;
  homepageTitle: string;
  homepageDescription: string;
  homepageMainImage: string;
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

export type Category = {
  _id: string;
  name: string;
  project: string[]
};
