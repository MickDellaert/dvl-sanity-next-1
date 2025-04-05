import {
  defineLocations,
  PresentationPluginOptions,
} from "sanity/presentation";
import project from "../schemas/documents/projectType";

export const resolve: PresentationPluginOptions["resolve"] = {
  locations: {
    project: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: "Gallery",
            href: "/gallery",
          },
        ],
      }),
    }),
    category: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: "Homepage",
            href: "/",
          },
          {
            title: "Series",
            href: "/series",
          },
        ],
      }),
    }),
  },
};
