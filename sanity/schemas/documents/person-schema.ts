import { defineField, defineType } from "sanity";

const person = defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "picture",
      title: "Picture",
      type: "image",
    }),
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "birthDate",
      title: "Date of Birth",
      type: "date",
    }),
    defineField({
      name: "birthPlace",
      title: "Place of Birth",
      type: "string",
    }),
    defineField(
      {
        name: "description",
        title: "Description",
        type: "text",
        rows: 4,
        description: "A concise description of the person"
      },
      {
        strict: false,
      },
    ),
    defineField(
      {
        name: "bio",
        title: "Bio",
        type: "array",
        description: "A longer bio, here you can use rich text",
        of: [{ type: "block" }],
      },
      {
        strict: false,
      },
    ),
  ],
});

export default person;
