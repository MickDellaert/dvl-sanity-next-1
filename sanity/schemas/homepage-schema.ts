import { defineField, defineType } from "sanity";

const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({ name: "homepageTitle", title: "Homepage Title", type: "string" }),
    defineField({ name: "homepageDescription", title: "Homepage Description", type: "string" }),
    defineField({
      name: "homepageMainImage",
      title: "Homepage Main Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt", type: "string" }],
    }),
  ],
  initialValue: {
    homepageTitle: "initial value test",
  },
});

export default homepage;


