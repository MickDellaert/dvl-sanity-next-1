import { CogIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "settingsTest",
  title: "SettingsTest",
  type: "document",
  icon: CogIcon,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: "menuItems",
      title: "Menu Item list",
      description: "Links displayed on the header of your site.",
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
            {
              type: "project",
            },
          ],
        },
      ],
    }),
  ],
  // preview: {
  //   select: {
  //     title: 'title'
  //   }
  // }

  preview: {
    prepare() {
      return {
        title: "Menu Items",
      }
    },
  },
});
