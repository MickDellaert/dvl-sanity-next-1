// import { client } from "./client";
import { groq } from "next-sanity";

export const homePageQuery = groq`*[_type == "homepage"]{_id, homepageTitle, homepageDescription, homepageTest}`;
export const projectsQuery = groq`*[_type == "project"]{_id, "projectImage": projectImage.asset->url, projectTitle, projectDescription, date, material, size}`;
