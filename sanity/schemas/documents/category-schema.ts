import { defineType, defineField, Preview } from "sanity";

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
  preview: {
    select: {
      title: "name",
      media: "projects.0.projectImage",
    },
  },
});

export default category;
