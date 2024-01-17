import { type SchemaTypeDefinition } from 'sanity'
import homepage from './singletons/homepage-schema'
import project from './documents/project-schema'
import category from './documents/category-schema'
import page from './documents/page-schema'
import settings from './singletons/settings-schema'
import testSchema from './singletons/test'


export const schemaTypes: { types: SchemaTypeDefinition[] } = {
  types: [homepage, project, category, page, settings, testSchema],
}
