import { defineArrayMember, defineField, defineType } from "sanity";

export const threeArtParkType = defineType({
  name: "threeArtPark",
  title: "3 Art Park",
  type: "document",
  fields: [
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
      title: "Logo's",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
        }),
      ],
    }),
  ],
});
