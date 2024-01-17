import { CogIcon } from "@sanity/icons";
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemas";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

const singletonTypes = new Set([""]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  // schema,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Our singleton type has a list item with a custom child
            // S.listItem().title("Homepage").id("homepage").child(
            //   // Instead of rendering a list of documents, we render a single
            //   // document, specifying the `documentId` manually to ensure
            //   // that we're editing the single instance of the document
            //   S.document().schemaType("homepage").documentId("homepage")
            // ),
            // S.listItem()
            //   .title("Settings")
            //   .icon(CogIcon)
            //   .id("settings")
            //   .child(S.document().schemaType("settings").documentId("settings")),
            // S.listItem().title("SettingsTest").id("settingsTest").child(
            //   S.document().schemaType("settingsTest").documentId("settingsTest")
            // ),

            // Regular document types
            S.documentTypeListItem("homepage").title("Homepage"),
            S.documentTypeListItem("project").title("Project"),
            S.documentTypeListItem("category").title("Category"),
            S.documentTypeListItem("page").title("Page"),
            S.documentTypeListItem("settings").title("Settings"),
            // S.documentTypeListItem("settingsTest").title("SettingsTest"),
          ]),
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],

  schema: {
    types: schemaTypes.types,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
