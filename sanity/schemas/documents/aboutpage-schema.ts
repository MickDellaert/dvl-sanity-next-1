import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
  name: "aboutpage",
  title: "About Page",
  type: "document",
  fields: [
    defineField(
      {
        name: "contactObject",
        title: "contact object",
        type: "array",
        of: [
          // defineField({
          //   name: "testString",
          //   title: "test string",
          //   type: "string",
          // }),
          defineArrayMember({
            name: "contact",
            type: "contactObject",
            title: "test title",
          }),
        ],
        preview: {
          select: {
            title: "name",
          },
        },
      },
      { strict: false },
    ),
  ],
  preview: {
    prepare() {
      return {
        title: "About page subtitle",
      };
    },
  },
});
