import { defineArrayMember, defineField, defineType } from "sanity";

export const exhibitionType = defineType({
  type: "document",
  name: "exhibition",
  title: "Exhibition",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (rule) => rule.required(),
      description: "Please provide a title for the exhibition",
    }),
    defineField({
      type: "text",
      name: "tagLine",
      title: "Tagline",
      validation: (rule) => rule.max(100),
      rows: 2,
      description:
        "A concise description of the exhibition, max 100 characters",
    }),
    defineField({
      type: "array",
      name: "description",
      title: "Description",
      of: [defineArrayMember({ type: "block" })],
      description:
        "A longer description of the exhibition, here you can use rich text",
    }),
    defineField({
      type: "duration",
      name: "date",
      title: "Duration",
    }),
    defineField({
      type: "array",
      name: "artist",
      title: "Artist",
      of: [{ type: "reference", to: { type: "personType" } }],
    }),
    defineField({
      type: "array",
      name: "artwork",
      title: "Artworks",
      of: [{ type: "reference", to: { type: "project" } }],
      description: "Images of the actual artworks",
    }),
    defineField({
      type: "image",
      name: "poster",
      title: "Poster",
      description: "Poster or display image",
    }),
    defineField({
      type: "array",
      name: "photos",
      title: "Photos",
      of: [defineArrayMember({ type: "image" })],
      description:
        "Photos of the exhibition installation, opening, atmosphere, crowd, ...",
    }),
    defineField({
      type: "addressObject",
      name: "address",
      title: "Address",
    }),
    defineField({
      type: "contactObjectNew",
      name: "contact",
      title: "Contact",
    }),
  ],
});
