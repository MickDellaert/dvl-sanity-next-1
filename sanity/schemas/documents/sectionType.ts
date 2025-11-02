import { defineType, defineField } from "sanity";

export const section = defineType({
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug / ID",
      type: "string",
      description: "Unieke identifier voor deze sectie, bv 'contact'",
    }),
  ],
});
