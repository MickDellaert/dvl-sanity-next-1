import { defineArrayMember, defineField, defineType } from "sanity";

const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Homepage Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "homepageDescription",
      title: "Homepage Description",
      type: "string",
    }),
    defineField(
      {
        name: "homepageMainImage",
        title: "Homepage Main Image",
        type: "array",
        of: [
          defineArrayMember({
            type: "image",
            options: { hotspot: true },
            fields: [{ name: "alt", title: "Alt", type: "string" }],
          }),
        ],
      },
      { strict: false },
    ),

    defineField(
      {
        name: "homepageMainImageSingle",
        title: "Homepage Main Image single",
        type: "image",
        options: { hotspot: true },
        fields: [{ name: "alt", title: "Alt", type: "string" }],
      },
      { strict: false },
    ),
    defineField(
      {
        name: "homepageCategories",
        title: "Homepage Categories",
        type: "array",
        of: [
          defineArrayMember({
            type: "reference",
            to: [{ type: "category" }],
          }),
        ],
      },
      { strict: false },
    ),
  ],
  initialValue: {
    homepageTitle: "initial value test",
  },
});

export default homepage;
