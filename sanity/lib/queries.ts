import { groq } from "next-sanity";

export const homePageQuery = groq`
*[_type == "homepage"][0]{
  _id, homepageTitle, 
  "slug": slug.current, 
  homepageDescription, 
  // "homepageMainImage": homepageMainImage.asset->url, 
  homepageMainImage{alt, "url": asset->url},
  "homepageCategories": homepageCategories[]->{
    name, 
    "slug": slug.current,
    projects[0]->{projectImage, "projectImageDimensions": projectImage.asset->metadata.dimensions}
  }
}`;

export const projectsQuery = groq`
*[_type == "project"]
   {_id,
   "projectImage": projectImage.asset->url, 
   projectTitle, 
   projectDescription, 
   date, 
   material, 
   size
  }`;

export const categoryQuery = groq`
*[_type == "category"]{
  _id, 
  name,
  seriesDescription, 
  "slug": slug.current, 
  "projects" : projects[]->{
  "projectImage" : projectImage.asset->url, 
  "projectImageDimensions": projectImage.asset->metadata.dimensions,
  projectTitle,
  projectDescription, 
  date, 
  material, 
  size
  }
}`;

export const singleCategory = groq`
*[_type == "category" && slug.current == $slug][0]{
  _id, 
  name, 
  seriesDescription, 
  "slug": slug.current, 
  "projects" : projects[]->{
    "projectImage" : projectImage.asset->url, 
    "projectImageDimensions": projectImage.asset->metadata.dimensions,
    projectTitle,
    projectDescription, 
    date, 
    material, 
    size
  }
}`;


export const singleCategoryOrder = groq`
*[_type == "category" ] | order((slug.current match $slug) desc){
  _id, 
  name, 
  seriesDescription, 
  "slug": slug.current, 
  "projects" : projects[]->{
    "projectImage" : projectImage.asset->url, 
    "projectImageDimensions": projectImage.asset->metadata.dimensions,
    projectTitle,
    projectDescription, 
    date, 
    material, 
    size
  }
}`;

export const pagesQuery = groq`
*[_type == "page"]{
  _id, 
  title, 
  "slug":slug.current, 
  content
}`;

export const pageQuery = groq`
*[_type == "page" && slug.current == $slug][0]{
  _id, 
  title, 
  "slug":slug.current, 
  content
}`;

export const settingsQuery = groq`
*[_type == "settings"][0]{
  menuItems[]->{_type, "slug": slug.current, title}
}`;

export const testQuery = groq`
  *[_type == "settingsTest"]{
    menuItems[]->{
      homepageTitle, title
    }
  }
`;


