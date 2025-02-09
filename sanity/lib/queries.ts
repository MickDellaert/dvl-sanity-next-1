import { groq, defineQuery } from "next-sanity";

export const homePageQuery = defineQuery(`
*[_type == "homepage"][0]{
  _id, homepageTitle, 
  "slug": slug.current, 
  homepageDescription, 
  // "homepageMainImage": homepageMainImage.asset->url, 
  homepageMainImage,
  homepageMainImageSingle,
  "homepageCategories": homepageCategories[]->{
    _id,
    name, 
    "slug": slug.current,
    projects[0]->{projectImage, "projectImageDimensions": projectImage.asset->metadata.dimensions}
  },
  "homepageExpo": exhibitions[]->{
  _id,
  name,
  poster,
  "posterDimensions": poster.asset->metadata.dimensions,
  description,
  date,
  gallery,
  photos,
  "images": photos[]{
  asset->{
  _id,
  url,
  metadata{ dimensions} }
  },
  "dimensions": photos[].asset->metadata.dimensions,
  },
}`);

export const homepageHeaderQuery = defineQuery(`
  *[_type == "homepage"][0]{
    "homepageMainImageAsset": homepageMainImageSingle.asset->metadata, 
    homepageMainImage,
    homepageMainImageSingle,
  }`);

export const projectsQuery = defineQuery(`
*[_type == "project"]
   {_id,
   "projectImage": projectImage.asset->url, 
   "projectImageDimensions": projectImage.asset->metadata.dimensions,
   projectTitle, 
   projectDescription, 
   date, 
   material, 
   size
  }`);

export const categoryQuery = defineQuery(`
*[_type == "category"]{
  _id, 
  name,
  seriesDescription, 
  "slug": slug.current, 
  "projects" : projects[]->{
  _id,
  "projectImage" : projectImage.asset->url, 
  "projectImageDimensions": projectImage.asset->metadata.dimensions,
  projectTitle,
  projectDescription, 
  date, 
  material, 
  size
  }
}`);

export const singleCategory = defineQuery(`
*[_type == "category" && slug.current == $slug][0]{
  _id, 
  name, 
  seriesDescription, 
  "slug": slug.current, 
  "projects" : projects[]->{
    _id,
    "projectImage" : projectImage.asset->url, 
    "projectImageDimensions": projectImage.asset->metadata.dimensions,
    projectTitle,
    projectDescription, 
    date, 
    material, 
    size
  }
}`);

export const singleCategoryOrder = defineQuery(`
*[_type == "category" ] | order((slug.current match $slug) desc){
  _id, 
  name, 
  seriesDescription, 
  "slug": slug.current, 
  "projects" : projects[]->{
    _id,
    "projectImage" : projectImage.asset->url, 
    "projectImageDimensions": projectImage.asset->metadata.dimensions,
    projectTitle,
    projectDescription, 
    date, 
    material, 
    size
  }
}`);

export const aboutDavidQuery = defineQuery(
  `*[_type == "person" && identity.firstName == "David" && identity.lastName == "Van Loon"][0]{_id, identity, description, portrait, educationText}`,
);

export const bioDavidQuery = defineQuery(
  `*[_type == "person" && identity.firstName == "David" && identity.lastName == "Van Loon"][0]{_id, description, portrait}`,
);

export const contactDavidQuery = defineQuery(
  `*[_type == "person" && identity.firstName == "David" && identity.lastName == "Van Loon"][0]{_id, contact, address}`,
);

export const educationDavidQuery = defineQuery(
  `*[_type == "person" && identity.firstName == "David" && identity.lastName == "Van Loon"][0]{_id, educationText}`,
);

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
