import { defineField, defineType } from "sanity";

export const addressObject = defineType({
  name: "addressObject",
  title: "Address",
  type: "object",
  fieldsets: [
    { name: "addressFieldset", title: "Street", options: { columns: 2 } },
    { name: "cityFieldset", title: "City", options: { columns: 3 } },
  ],
  fields: [
    defineField({
      name: "street",
      type: "string",
      fieldset: "addressFieldset",
    }),
    defineField({
      name: "number",
      type: "number",
      fieldset: "addressFieldset",
    }),
    defineField({
      name: "city",
      type: "string",
      fieldset: "cityFieldset",
    }),
    defineField({
      name: "postalCode",
      title: "Postal Code",
      type: "string",
      fieldset: "cityFieldset",
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
      fieldset: "cityFieldset",
    }),
  ],
});
