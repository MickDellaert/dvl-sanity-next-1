import { type SchemaTypeDefinition } from 'sanity'
import homepage from './homepage-schema'
import project from './project-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [homepage, project],
}
