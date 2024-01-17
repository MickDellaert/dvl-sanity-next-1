import { PortableTextBlock, Slug } from "sanity";

export type HomePage = {
  _id: string;
  title: string;
  slug: Slug;
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
  project: string[];
};

export type Page = {
  _id: string;
  title: string;
  slug: Slug;
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
