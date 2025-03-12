import { list } from "postcss";
import { defineField, defineType } from "sanity";

export const identityObject = defineType({
  name: "identityObject",
  title: "Name and Age",
  type: "object",
  fieldsets: [
    { name: "nameFieldset", title: "Name Data", options: { columns: 2 } },
    { name: "birthFieldset", title: "Birth Data", options: { columns: 2 } },
  ],
  fields: [
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
      fieldset: "nameFieldset",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      fieldset: "nameFieldset",
      validation: (rule) => rule.required().max(80),
    }),
    defineField({
      name: "gender",
      title: "Gender",
      type: "string",
      options: {
        list: ["Male", "Female", "Other"],
        layout: "radio",
        direction: "horizontal",
      },
    }),
    defineField({
      name: "birthDate",
      title: "Date of Birth",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
      fieldset: "birthFieldset",
    }),
    defineField({
      name: "birthPlace",
      title: "Place of Birth",
      type: "string",
      fieldset: "birthFieldset",
    }),
  ],
});
