import { type SchemaTypeDefinition } from 'sanity'
import homepage from './singletons/homepage-schema'
import project from './documents/project-schema'
import category from './documents/category-schema'
import page from './documents/page-schema'
import settings from './singletons/settings-schema'
import person from './documents/person-schema'
import contact from './documents/contact-schema'
import aboutpage from './documents/aboutpage-schema'
import contactObject from './documents/contact-schema-object'
import singletonTest from './singletons/singletontest-schema'
import testSchema from './singletons/test'


export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [homepage, project, category, page, settings, person, contact, aboutpage, contactObject, singletonTest],
}
