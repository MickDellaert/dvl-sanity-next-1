import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
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
      S.listItem()
        .title("SingletonTest")
        .id("singletonTest")
        .child(
          S.document()
            .title("documentTitleTest")
            .schemaType("singletonTest")
            .documentId("singletonTestDocumentId"),
        ),

      // 4612500c-17eb-4b4c-9f2f-ada4a653d7eb

      // Regular document types
      S.documentTypeListItem("settings").title("Settings"),
      S.divider(),
      S.documentTypeListItem("homepage").title("Homepage"),
      S.documentTypeListItem("page").title("Page"),
      S.divider(),
      S.documentTypeListItem("project").title("Artwork"),
      S.documentTypeListItem("category").title("Series"),
      S.documentTypeListItem("person").title("Person"),
      S.documentTypeListItem("contact").title("Contact"),
      S.documentTypeListItem("aboutpage").title("About"),
      S.documentTypeListItem("post").title("Posts"),
      // S.documentTypeListItem("settingsTest").title("SettingsTest"),
    ]);
