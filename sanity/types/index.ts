import { PortableTextBlock } from "sanity";
import type { Image } from "sanity";

export type HomePageCategory = {
  _id: string;
  name: string;
  slug: string;
  projects: {
    projectImage: Image;
    width: number;
    height: number;
  };
};

export type HomePage = {
  _id: string;
  title: string;
  slug: string;
  homepageDescription: string;
  homepageMainImage: { url: string; alt: string };
  homepageCategories: HomePageCategory[];
};

export type Project = {
  _id: string;
  projectImage: string;
  projectTitle: string;
  projectDescription: PortableTextBlock[];
  date: string;
  material: string;
  size: string;
  projectImageDimensions: {
    width: string;
    height: string;
  };
};

export type Category = {
  _id: string;
  name: string;
  seriesDescription: PortableTextBlock[];
  slug: string;
  projects: Project[];
};

export type Page = {
  _id: string;
  title: string;
  slug: string;
  content: PortableTextBlock[];
};

export type MenuItem = {
  title: string;
  slug: string;
  _type: string;
};

export type Setting = {
  // _id: string;
  menuItems: MenuItem[];
};

export type Test = {
  MenuItems?: MenuItem[];
};
