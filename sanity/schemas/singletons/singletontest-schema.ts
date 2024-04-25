import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

const singletonTest = defineType({
  name: "singletonTest",
  title: "singletonTestTitleFromSchema",
  type: "document",
  icon: CogIcon,

  fields: [
    // defineField({
    //   name: "empty",
    //   title: "empty",
    //   type: "string"
    // })
    defineField(
      {
        name: "menuItems",
        title: "Menu Item List",
        type: "array",
        of: [
          {
            title: "Reference",
            type: "reference",
            to: [
              {
                type: "homepage",
              },
              {
                type: "page",
              },
            ],
          },
        ],
      },
      { strict: false },
    ),
  ],
  preview: {
    // select: {
    //   title: "title",
    // },
    prepare() {
      return {
        title: "Menu Items",
      };
    },
  },
});

export default singletonTest;
