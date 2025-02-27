import { type SchemaTypeDefinition } from "sanity";
import homepage from "./singletons/homepage-schema";
import project from "./documents/project-schema";
import category from "./documents/category-schema";
import page from "./documents/page-schema";
import settings from "./singletons/settings-schema";
// import person from "./documents/person-schema";
import contact from "./documents/contact-schema";
import aboutpage from "./documents/aboutpage-schema";
import contactObject from "./documents/contact-schema-object";
import singletonTest from "./singletons/singletontest-schema";
import testSchema from "./singletons/test";
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
    // person,
    contact,
    aboutpage,
    contactObject,
    singletonTest,
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
