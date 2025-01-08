import type { StructureResolver } from "sanity/structure";
import DocumentsPane from "sanity-plugin-documents-pane";
import {
  singletonDocumentListItem,
  singletonDocumentListItems,
  filteredDocumentListItems,
} from "sanity-plugin-singleton-tools";
import CategoryListen from "../schemas/components/CategoryListen";
import CategoryListenCopy from "../schemas/components/CategoryListenCopy";

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
                            query: `*[references($id) && _type == "category"]`,
                            params: { id: `_id` },
                            options: { perspective: "previewDrafts" },
                          })
                          .title("Used in series"),
                        S.view
                          .component(DocumentsPane)
                          .options({
                            query: `*[references($id) && _type == "exhibition"]`,
                            params: { id: `_id` },
                            options: { perspective: "previewDrafts" },
                          })
                          .title("Used in exhibition"),
                      ]),
                  ),
                ),
              S.documentTypeListItem("category").title("Series"),
            ]),
        ),
      S.documentTypeListItem("person").title("Artist"),
      S.documentTypeListItem("exhibition").title("Exhibition"),
      S.divider(),
      S.listItem()
        .title("dvl")
        // .id("dvl")
        // .schemaType("project")
        .child(
          S.documentList()
            .title("paintings")
            .filter(
              '_type == "project" && artist[]->identity.firstName match "David" && artist[]->identity.lastName match "Van Loon"',
            ),
        ),
      S.listItem()
        .title("others")
        // .id("dvl")
        // .schemaType("project")
        .child(
          S.documentList()
            .title("paintings")
            .filter(
              '_type == "project" && !(artist[]->identity.firstName match "David") && !(artist[]->identity.lastName match "Van Loon")',
            ),
        ),

      S.documentTypeListItem("project")
        .title("componentTest")
        .child(
          S.documentTypeList("project").child((id) =>
            S.document()
              .documentId(id)
              .schemaType("project")
              .views([
                S.view.form(),
                S.view
                  .component(CategoryListenCopy)
                  .title("componentTest")
                  .options({ testProp: "Im a test prop" }),
              ]),
          ),
        ),

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
