import { defineArrayMember, defineField, defineType, Rule } from "sanity";

export const exhibitionType = defineType({
  type: "document",
  name: "exhibition",
  title: "Exhibition",
  fields: [
    defineField({
      type: "string",
      name: "name",
      title: "Title",
      description: "Please provide a title for the exhibition",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "text",
      name: "tagLine",
      title: "Tagline",
      rows: 2,
      description: "A concise description of the exhibition, max 100 characters",
      validation: (rule) => rule.max(100),
    }),
    defineField({
      type: "array",
      name: "description",
      title: "Description",
      of: [defineArrayMember({ type: "block" })],
      description: "A longer description of the exhibition, here you can use rich text",
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
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "person" }]
        })
      ],
    }),
    defineField({
      type: "array",
      name: "artwork",
      title: "Artworks on Display",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "project" }]
        })
      ],
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
      description: "Photos of the exhibition installation, opening, atmosphere, crowd,...",
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "reference",
      to: [{ type: "gallery" }],
    }),
    defineField({
      name: "video",
      title: "Video",
      type: "file",
      options: {
        accept: "video/*",
      },
    }),
  ],
});