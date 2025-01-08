import { Item } from "react-photoswipe-gallery";
import { list } from "postcss";
import type { StructureResolver } from "sanity/structure";
import DocumentsPane from "sanity-plugin-documents-pane";

const options = {
  query: `*[references($id)]`,
  params: { id: `_id` },
  options: { perspective: "previewDrafts" },
};

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("David Van Loon")
        .id("davidvanloon")
        .child(
          S.list()
            .title("David Van Loon content")
            .items([
              S.listItem()
                .title("Homepage")
                .id("homePage")
                .child(
                  S.document()
                    .title("Homepage")
                    .schemaType("homepage")
                    .documentId("52195575-f6eb-4dda-b2dd-77162a618ec3"),
                ),
              S.divider(),
              S.documentTypeListItem("project")
                .title("Paintings")
                .child(
                  S.documentTypeList("project")
                    .filter(
                      '_type == "project" && artist[]->identity.firstName match "David" && artist[]->identity.lastName match "Van Loon"',
                    )
                    .child((documentId) =>
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
                            .title("Series"),
                          S.view
                            .component(DocumentsPane)
                            .options({
                              query: `*[references($id) && _type == "exhibition"]`,
                              params: { id: `_id` },
                              options: { perspective: "previewDrafts" },
                            })
                            .title("Exhibitions"),
                        ]),
                    ),
                ),
              S.documentTypeListItem("category").title("Series"),
              S.documentTypeListItem("exhibition").title("Exhibitions"),
              S.divider(),
              S.listItem()
                .schemaType("person")
                .title("Bio")
                .child((documentId) =>
                  S.document()
                    .documentId("e4cef25b-39e1-4311-afbc-3f642086d59a")
                    .schemaType("person")
                    .views([
                      S.view.form(),
                      S.view
                        .component(DocumentsPane)
                        .options({
                          query: `*[references($id) && _type == "exhibition"]`,
                          params: { id: `_id` },
                          options: { perspective: "previewDrafts" },
                        })
                        .title("Exhibitions"),
                      S.view
                        .component(DocumentsPane)
                        .options({
                          query: `*[references($id) && _type == "project"]`,
                          params: { id: `_id` },
                          options: { perspective: "previewDrafts" },
                        })
                        .title("Artworks"),
                    ]),
                ),
            ]),
        ),

      S.listItem()
        .title("3 Art Park")
        .id("3artpark")
        .child(
          S.list()
            .title("3 Art Park Content")
            .items([
              S.listItem()
                .title("3 Art Park page")
                .id("3artpark")
                .child(
                  S.document()
                    .title("3ArtPark")
                    .schemaType("homepage")
                    .documentId("52195575-f6eb-4dda-b2dd-77162a618ec3"),
                ),
              S.divider(),
              S.documentTypeListItem("project")
                .title("3 Art Park Artworks")
                .child(
                  S.documentTypeList("project")
                    .title("3 Art Park Artworks")
                    .filter(
                      '_type == "project" && _id in *[_type == "exhibition" && gallery._ref == "bf448972-df0a-42f5-b98d-da4b1510b24a"].artwork[]._ref ',
                    )
                    .child((documentId) =>
                      S.document()
                        .documentId(documentId)
                        .schemaType("project")
                        .views([
                          S.view.form(),
                          S.view
                            .component(DocumentsPane)
                            .options({
                              query: `*[references($id) && _type == "exhibition"]`,
                              params: { id: `_id` },
                              options: { perspective: "previewDrafts" },
                            })
                            .title("Exhibitions"),
                        ]),
                    ),
                ),
              S.documentTypeListItem("exhibition")
                .title("3 Art Park Exhibitions")
                .child(
                  S.documentList()
                    .filter(
                      `_type == "exhibition" && gallery->_id == "bf448972-df0a-42f5-b98d-da4b1510b24a"`,
                    )
                    .title("3 Art Park Exhibitions"),
                ),
              S.documentTypeListItem("person").title("3 Art Park Artists"),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title("Library")
        .child(
          S.list()
            .id("library")
            .items([
              S.documentTypeListItem("project").title("All Artworks"),
              S.documentTypeListItem("person").title("All Artists"),
              S.documentTypeListItem("exhibition").title("All Exhibitions"),
              S.documentTypeListItem("gallery").title("All Galleries"),
            ]),
        ),
    ]);
