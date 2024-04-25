import { defineType, defineField } from "sanity";

const category = defineType({
  name: "category",
  title: "Serie",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    }),

    defineField(
      {
        name: "seriesDescription",
        title: "Series Description",
        type: "array",
        of: [{ type: "block" }],
      },
      { strict: false },
    ),

    defineField(
      {
        name: "projects",
        title: "Artworks",
        type: "array",
        of: [{ type: "reference", to: { type: "project" } }],
      },
      { strict: false },
    ),
  ],
});

export default category;
