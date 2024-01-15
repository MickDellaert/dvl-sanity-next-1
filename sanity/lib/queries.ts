// import { client } from "./client";
import { groq } from "next-sanity";

export const homePageQuery = groq`*[_type == "homepage"]{_id, homepageTitle, homepageDescription, "homepageMainImage": homepageMainImage.asset->url}`;
export const projectsQuery = groq`*[_type == "project"]{_id, "projectImage": projectImage.asset->url, projectTitle, projectDescription, date, material, size}`;
export const categoryQuery = groq`*[_type == "category"]{_id, name, "project" : project[]->projectImage.asset->url}`;
