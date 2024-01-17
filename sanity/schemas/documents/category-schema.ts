import { defineType, defineField } from "sanity";

const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "project",
      title: "Projects",
      type: "array",
      of: [{type: "reference", to: { type: "project"}}]
    }),
  ],
});

export default category;
