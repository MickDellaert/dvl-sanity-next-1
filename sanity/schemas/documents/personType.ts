import { defineField, defineType, defineArrayMember } from "sanity";

export const personType = defineType({
  name: "personType",
  title: "person",
  type: "document",
  fields: [
    defineField({
      name: "identity",
      title: "Identity",
      type: "identityObject",
    }),
    defineField({
      type: "text",
      name: "tagLine",
      title: "Tagline",
      validation: (rule) => rule.max(100),
      rows: 2,
      description: "A concise bio of the artist, max 100 characters",
    }),
    defineField({
      type: "array",
      name: "description",
      title: "Description",
      of: [defineArrayMember({ type: "block" })],
      description: "A longer bio of the artist, here you can use rich text",
    }),
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "array",
      of: [defineArrayMember({ type: "addressObject" })],
    }),
    defineField({
      name: "contact",
      title: "Contact",
      type: "contactObjectNew",
    }),
    defineField({
      name: "personExhibitions",
      title: "Exhibitions",
      type: "array",
      of: [
        defineArrayMember({ type: "reference", to: { type: "exhibition" } }),
      ],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [defineArrayMember({ type: "education" })],
    }),
  ],
  preview: {
    select: { firstName: "identity.firstName", lastName: "identity.lastName" },
    prepare(selection) {
      const { firstName, lastName } = selection;
      return {
        title: `${firstName} ${lastName}`,
      };
    },
  },
});
