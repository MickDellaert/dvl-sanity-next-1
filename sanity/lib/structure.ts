import type { StructureResolver } from "sanity/structure";
import DocumentsPane from "sanity-plugin-documents-pane";
import {
  singletonDocumentListItem,
  singletonDocumentListItems,
  filteredDocumentListItems,
} from "sanity-plugin-singleton-tools";

const options = {
  query: `*[references($id)]`,
  params: { id: `_id` },
  options: { perspective: "previewDrafts" },
};

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      // ...singletonDocumentListItems({ S, context }),
      // S.listItem()
      //   .title("SingletonTest")
      //   .id("singletonTest")
      //   .child(
      //     S.document()
      //       .title("documentTitleTest")
      //       .schemaType("singletonTest")
      //       .documentId("singletonTestDocumentId"),
      //   ),
      S.listItem()
        .title("Settings")
        .child(
          S.list()
            .title("settings")
            .items([
              S.documentListItem()
                .title("Menu Items")
                .schemaType("settings")
                .id("4612500c-17eb-4b4c-9f2f-ada4a653d7eb"),
            ]),
        ),
      S.listItem()
        .title("Homepage")
        .id("homePage")
        .child(
          S.document()
            .title("Homepage")
            .schemaType("homepage")
            .documentId("52195575-f6eb-4dda-b2dd-77162a618ec3"),
        ),

      // 4612500c-17eb-4b4c-9f2f-ada4a653d7eb

      // Regular document types
      // S.documentTypeListItem("settings").title("Settings"),
      S.divider(),
      S.listItem()
        .title("Artwork")
        .child(
          S.list()
            .title("Artwork content")
            .items([
              S.documentTypeListItem("project")
                .title("Paintings")
                .child(
                  S.documentTypeList("project").child((documentId) =>
                    S.document()
                      .documentId(documentId)
                      .schemaType("project")
                      .views([
                        S.view.form(),
                        S.view
                          .component(DocumentsPane)
                          .options({
                            query: `*[references($id)]`,
                            params: { id: `_id` },
                            options: { perspective: "previewDrafts" },
                          })
                          .title("Used in series"),
                      ]),
                  ),
                ),
              S.documentTypeListItem("category").title("Series"),
            ]),
        ),
      S.documentTypeListItem("personType").title("Artist"),
      S.documentTypeListItem("exhibition").title("Exhibition"),
      S.divider(),

      // S.documentTypeListItem("homepage").title("Homepage"),
      // S.documentTypeListItem("page").title("Page"),
      // S.divider(),
      // S.documentTypeListItem("project").title("Artwork"),
      // S.documentTypeListItem("category").title("Series"),
      // S.documentTypeListItem("person").title("Person"),
      // S.documentTypeListItem("contact").title("Contact"),
      // S.documentTypeListItem("aboutpage").title("About"),
      // S.documentTypeListItem("post").title("Posts"),
      // S.documentTypeListItem("personType").title("PersonType"),
      // S.documentTypeListItem("settingsTest").title("SettingsTest"),
    ]);
