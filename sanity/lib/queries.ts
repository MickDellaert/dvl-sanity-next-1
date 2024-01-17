// import { client } from "./client";
import { groq } from "next-sanity";

export const homePageQuery = groq`*[_type == "homepage"][0]{_id, homepageTitle, "slug": slug.current, homepageDescription, "homepageMainImage": homepageMainImage.asset->url}`;
export const projectsQuery = groq`*[_type == "project"]{_id, "projectImage": projectImage.asset->url, projectTitle, projectDescription, date, material, size}`;
export const categoryQuery = groq`*[_type == "category"]{_id, name, "project" : project[]->projectImage.asset->url}`;
export const pageQuery = groq`*[_type == "page" && slug.current == $slug][0]{_id, title, "slug":slug.current, content}`;
export const pagesQuery = groq`*[_type == "page"]{_id, title, "slug":slug.current, content}`;
export const settingsQuery = groq`*[_type == "settings"][0]{menuItems[]->{_type, "slug": slug.current, title}}`;

export const testQuery = groq`
  *[_type == "settingsTest"]{
    menuItems[]->{
      homepageTitle, title
    }
  }
`;

// export const testQuery = groq`
//   *[_type == "settings"][0]{
//     menuItems[]->{
//       _type,
//       "slug": slug.current,
//       title
//     }
//   }
// `


export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`
