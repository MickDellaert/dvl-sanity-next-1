import { defineField, defineType } from "sanity";
const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "projectImage",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    }),
    defineField({
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "projectTitle" },
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: "projectDescription",
      title: "Project Description",
      type: "array",
      of: [{type: "block"}]
    }),
    defineField({
      name: "date",
      title: "Project Date",
      type: "date",
      options: {
        dateFormat: "YYYY",
      },
    }),
    defineField({
      name: "material",
      title: "Material",
      type: "string",
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "string",
    }),
  ],

  initialValue: {
    material: "oil on canvas",
  },
});

export default project;
