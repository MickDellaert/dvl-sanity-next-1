import { defineArrayMember, defineField, defineType } from "sanity";
// import CategoryDisplay from "../components/CategoryDisplay";
import Subtitle from "@/components/shared/subtitle";
import CategoryListen from "../components/CategoryListen";

const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fieldsets: [
    { name: "artworkData", title: "Artwork Data", options: { columns: 2 } },
  ],
  fields: [
    defineField({
      name: "category",
      title: "Series",
      type: "reference",
      to: [{ type: "category" }],
      components: {
        input: CategoryListen,
      },
    }),
    defineField(
      {
        name: "projectImage",
        title: "Project Image",
        type: "image",
        options: { hotspot: true },
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string",
            description: "A short description of the image",
          },
        ],
      },
      { strict: false },
    ),
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
      description: "Used in the url of the page for navigation",
      // validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: "projectDescription",
    //   title: "Project Description",
    //   type: "array",
    //   of: [{ type: "block" }],
    // }),
    defineField({
      name: "date",
      title: "Project Date",
      type: "string",
      fieldset: "artworkData",
    }),
    defineField({
      name: "material",
      title: "Material",
      type: "string",
      fieldset: "artworkData",
    }),
    defineField({
      name: "size",
      title: "Size",
      type: "string",
      fieldset: "artworkData",
    }),
    defineField({
      name: "soldStatus",
      title: "Sold",
      type: "boolean",
      fieldset: "artworkData",
    }),
  ],

  initialValue: {
    projectTitle: "Artwork title",
    material: "oil on canvas",
    date: "1912-12-12",
  },

  preview: {
    select: {
      title: "projectTitle",
      subtitle: "material",
      image: "projectImage",
    },
    prepare(selection) {
      const { title, image, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle,
        media: image,
      };
    },
  },
});

export default project;
