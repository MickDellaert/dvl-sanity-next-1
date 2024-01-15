import { type SchemaTypeDefinition } from 'sanity'
import homepage from './homepage-schema'
import project from './project-schema'
import category from './category-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, project, category],
}
