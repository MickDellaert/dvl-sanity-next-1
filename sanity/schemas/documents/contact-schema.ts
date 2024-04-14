import { defineField, defineType, defineArrayMember } from "sanity";

const contact = defineType({
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "mobile",
      title: "Mobile",
      type: "string",
    }),
    defineField(
      {
        name: "studio",
        title: "Studio",
        type: "array",
        of: [
          {
            name: "address",
            title: "address",
            type: "object",
            fields: [
              defineField({
                name: "street",
                title: "Street and Number",
                type: "string",
              }),
              defineField({
                name: "postal",
                title: "Postal Code",
                type: "string",
              }),
              defineField({
                name: "city",
                title: "City",
                type: "string",
              }),
            ],
          },
        ],
      },
      {
        strict: false,
      },
    ),
  ],
});

export default contact;
