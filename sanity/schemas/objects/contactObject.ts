import { defineField, defineType } from "sanity";

export const contactObjectNew = defineType({
  name: "contactObjectNew",
  title: "Contact",
  type: "object",
  fieldsets: [{ name: "phone", options: { columns: 2 } }],
  fields: [
    defineField({
      name: "email",
      type: "email",
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      fieldset: "phone",
    }),
    defineField({
      name: "mobileNumber",
      title: "Mobile Number",
      type: "string",
      fieldset: "phone",
    }),
  ],
});
