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
      projects: "projects",
      media: "projects.0.projectImage",
    },

    prepare(selection) {
      const { title, projects, media } = selection;

      return {
        title,
        subtitle:
          Object.keys(projects).length === 1
            ? `${Object.keys(projects).length} painting in series`
            : `${Object.keys(projects).length} paintings in series`,
        media,
      };
    },
  },
});

export default category;
