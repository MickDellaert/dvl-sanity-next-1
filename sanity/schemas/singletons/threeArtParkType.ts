import { defineArrayMember, defineField, defineType } from "sanity";

export const threeArtParkType = defineType({
  name: "threeArtPark",
  title: "3 Art Park",
  type: "document",
  fields: [
    defineField({ name: "title", title: "title", type: "text" }),
    defineField({
      name: "titleText",
      title: "Title Text",
      type: "text",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "threeArtIllustrations",
      title: "Illustrations",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
        }),
      ],
    }),
    defineField({
      name: "threeArtLogos",
      title: "Three Art Park Logo's",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
        }),
      ],
    }),
    defineField({
      name: "threeArtSponsorLogos",
      title: "Sponsor Logo's",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
        }),
      ],
    }),
    defineField({
      name: "exhibitions",
      title: "Three Art Park Exhibitions",
      type: "array",
      of: [{ type: "reference", to: { type: "exhibition" } }],
    }),
  ],
});
