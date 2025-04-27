import { groq, defineQuery } from "next-sanity";
import { defineEnableDraftMode } from "next-sanity/draft-mode";

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

export const homepageDescriptionQuery = defineQuery(`
    *[_type == "homepage"][0]{
      homepageDescription,
    }`);

export const homePageSeriesQuery = defineQuery(`
  *[_type == "homepage"][0]{
    homepageCategories[]->{
      _id,
      name, 
      "slug": slug.current,
      projects[0]->{
      projectImage, 
      "projectImageDimensions": projectImage.asset->metadata.dimensions, 
      "projectImageMetadata": projectImage.asset->metadata, 
      "projectImagePalette": projectImage.asset->metadata.palette.darkVibrant.background}
    }
  }`);

export const homePageExhibitionQuery = defineQuery(`
    *[_type == "homepage"][0]{
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
      asset,
      "ref":asset._ref,
      "imageDimensions":asset->metadata.dimensions
      },
      },
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
   size,
   soldStatus
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
  size,
  soldStatus
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
    size,
    soldStatus
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
    size,
    soldStatus
  }
}`);

export const aboutDavidQuery = defineQuery(
  `*[_type == "person" && identity.firstName == "David" && identity.lastName == "van Loon"][0]{_id, identity, description, portrait, educationText}`,
);

export const bioDavidQuery = defineQuery(
  `*[_type == "person" && identity.firstName == "David" && identity.lastName == "van Loon"][0]{
  _id, description, portrait, "dimensions":portrait.asset->metadata.dimensions}`,
);

export const contactDavidQuery = defineQuery(
  `*[_type == "person" && identity.firstName == "David" && identity.lastName == "van Loon"][0]{
  _id, contact, address, contactIllustration, "imageDimensions":contactIllustration.asset->metadata.dimensions}`,
);

export const educationDavidQuery = defineQuery(
  `*[_type == "person" && identity.firstName == "David" && identity.lastName == "van Loon"][0]{_id, educationText}`,
);
export const educationDavidQueryAlt = defineQuery(
  `*[_type == "person" && identity.firstName == "David" && identity.lastName == "van Loon"][0]{_id, "education": education[]{duration, schoolDirection, schoolName, schoolAddress}}`,
);

export const exhibitionDavidQuery = defineQuery(
  `*[_type == "exhibition" && artist[]->identity.firstName match "David" && artist[]->identity.lastName match "van Loon"][]{_id, date, name, gallery->{name, address}, tagline, description}`,
);

export const exhibitionWithoutFilterQuery = defineQuery(
  `*[_type == "exhibition"][]{_id, date, name, gallery->{name, address}, tagline, description}`,
);

export const settingsQuery = defineQuery(`
  *[_type == "settings"][0]{
    menuItems[]->{_type, "slug": slug.current, title}
  }`);

export const threeArtParkQuery = defineQuery(`
  *[_type == "threeArtPark"][0]{
      title, 
      titleText, 
      description, 
      threeArtIllustrations[]{
      asset,
      "ref":asset._ref,
      "imageDimensions":asset->metadata.dimensions
      },
      threeArtLogos[]{
      asset,
      "ref":asset._ref,
      "imageDimensions":asset->metadata.dimensions
      }
      }`);

export const threeArtParkExhibitionQuery = defineQuery(`
        *[_type == "threeArtPark"][0]{
          "threeArtParkExpo": exhibitions[]->{
          _id,
          name,
          poster,
          "posterDimensions": poster.asset->metadata.dimensions,
          description,
          date,
          gallery,
          photos,
          "images": photos[]{
          asset,
          "ref":asset._ref,
          "imageDimensions":asset->metadata.dimensions
          },
          "video": video.asset->url,
          },
        }`);

export const threeArtParkSponsorQuery = defineQuery(`
  *[_type == "threeArtPark"][0]{
    threeArtSponsorLogos[]{
    asset,
    "ref":asset._ref,
    "imageDimensions":asset->metadata.dimensions
    }
  }`);

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

export const testQuery = groq`
  *[_type == "settingsTest"]{
    menuItems[]->{
      homepageTitle, title
    }
  }
`;

export const homepageTestQuery = groq`
*[_type == "homepage"][0]{
  _id, homepageTitle, 
  "slug": slug.current, 
  homepageDescription, 
  // "homepageMainImage": homepageMainImage.asset->url, 
  homepageMainImage,
  homepageMainImageSingle,
  "homepageCategories": homepageCategories[]->{
    name, 
    "slug": slug.current,
    projects[0]->{projectImage, "projectImageDimensions": projectImage.asset->metadata.dimensions}
  }
}`;
