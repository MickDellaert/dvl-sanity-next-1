import { defineType, defineField } from "sanity";

export const educationObject = defineType({
  name: "education",
  title: "Education",
  type: "object",
  fields: [
    defineField({
      name: "schoolName",
      title: "School Name",
      type: "string",
    }),
    defineField({
      name: "schoolDirection",
      title: "School Direction",
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
      type: "durationEducation",
    }),
  ],
});
