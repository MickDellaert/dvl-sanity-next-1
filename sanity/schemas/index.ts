import { type SchemaTypeDefinition } from "sanity";
import homepage from "./singletons/homepageType";
import project from "./documents/projectType";
import category from "./documents/categoryType";
import page from "./documents/pageType";
import settings from "./singletons/settingsType";
import { addressObject } from "./objects/addressObject";
import { personType } from "./documents/personType";
import { contactObjectNew } from "./objects/contactObject";
import { identityObject } from "./objects/identityObject";
import { exhibitionType } from "./documents/exhibitionType";
import duration from "./objects/duration";
import { educationObject } from "./objects/educationObject";
import { galleryType } from "./documents/galleryType";
import durationEducation from "./objects/durationEducation";

export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [
    homepage,
    project,
    category,
    page,
    settings,
    personType,
    addressObject,
    contactObjectNew,
    identityObject,
    exhibitionType,
    duration,
    durationEducation,
    educationObject,
    galleryType,
  ],
};
