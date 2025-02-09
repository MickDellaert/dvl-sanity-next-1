import { defineField, defineType, defineArrayMember } from "sanity";
import ExhibitionListen from "../components/ExhibitionListen";

export const personType = defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
    }),
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
      components: { input: ExhibitionListen },
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [defineArrayMember({ type: "education" })],
    }),
    defineField({
      name: "educationText",
      title: "Education Text",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
      description: "Education history, but in rich text",
    }),
  ],
  preview: {
    select: {
      firstName: "identity.firstName",
      lastName: "identity.lastName",
      portrait: "portrait",
    },
    prepare(selection) {
      const { firstName, lastName, portrait } = selection;
      return {
        title: `${firstName} ${lastName}`,
        media: portrait,
      };
    },
  },
});
