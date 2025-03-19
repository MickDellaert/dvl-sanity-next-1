import { defineArrayMember, defineField, defineType } from "sanity";
// import CategoryDisplay from "../components/CategoryDisplay";
import Subtitle from "@/components/shared/subtitle";
import CategoryListen from "../components/CategoryListen";

const project = defineType({
  name: "project",
  title: "Artwork",
  type: "document",
  fieldsets: [
    { name: "artworkData", title: "Artwork Data", options: { columns: 2 } },
  ],
  fields: [
    // defineField({
    //   name: "category",
    //   title: "Series",
    //   type: "reference",
    //   to: [{ type: "category" }],
    //   components: {
    //     field: CategoryListen,
    //   },
    // }),
    defineField(
      {
        name: "projectImage",
        title: "Artwork Image",
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
      title: "Artwork Title",
      type: "string",
    }),
    // defineField({
    //   name: "slug",
    //   title: "Slug",
    //   type: "slug",
    //   options: { source: "projectTitle" },
    //   description: "Used in the url of the page for navigation",
    //   // validation: (rule) => rule.required(),
    // }),
    defineField({
      name: "artist",
      title: "Artist",
      type: "array",
      of: [{ type: "reference", to: { type: "person" } }],
    }),
    // defineField({
    //   name: "projectDescription",
    //   title: "Project Description",
    //   type: "array",
    //   of: [{ type: "block" }],
    // }),
    defineField({
      name: "date",
      title: "Artwork Date",
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
      title: "Dimensions",
      type: "object",
      fieldset: "artworkData",
      description: "Only numbers in cm.",
      fields: [
        { name: "width", type: "string", initialValue: "100" },
        { name: "height", type: "string" },
      ],
      options: {
        columns: 2,
      },
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
    artist: [{ _ref: "e4cef25b-39e1-4311-afbc-3f642086d59a" }],
  },

  preview: {
    select: {
      title: "projectTitle",
      artistFirstName: "artist.0.identity.firstName",
      artistLastName: "artist.0.identity.lastName",
      material: "material",
      size: "size",
      width: "size.width",
      date: "date",
      soldStatus: "soldStatus",
      image: "projectImage",
    },
    prepare(selection) {
      const {
        title,
        artistFirstName,
        artistLastName,
        image,
        material,
        size,
        width,
        date,
        soldStatus,
      } = selection;
      return {
        title: `${title} by ${artistFirstName} ${artistLastName}`,
        subtitle: `${material} - ${width} x ${size.height} cm - ${date} ${soldStatus ? "- sold" : ""}`,
        media: image,
      };
    },
  },
});

export default project;
