import { defineType, defineField } from "sanity";

export const educationObject = defineType({
  name: "education",
  title: "Education",
  type: "object",
  fields: [
    defineField({
      name: "schoolName",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "schoolAddress",
      title: "Location",
      type: "addressObject",
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "duration",
    }),
  ],
});
