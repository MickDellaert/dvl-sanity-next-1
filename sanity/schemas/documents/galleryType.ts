import { defineArrayMember, defineField, defineType } from "sanity";

export const galleryType = defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Gallery Name",
      type: "string",
    }),
    defineField({
      type: "text",
      name: "tagLine",
      title: "Tagline",
      validation: (rule) => rule.max(100),
      rows: 2,
      description: "A concise description of the gallery, max 100 characters",
    }),
    defineField({
      type: "array",
      name: "description",
      title: "Description",
      of: [defineArrayMember({ type: "block" })],
      description:
        "A longer description of the gallery, here you can use rich text",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "addressObject",
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "contactObjectNew",
    }),
  ],
});
