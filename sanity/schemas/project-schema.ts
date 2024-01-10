import { defineField, defineType } from "sanity";
const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "projectTitle", title: "Project Title", type: "string" }),
    defineField({ name: "projectDescription", title: "Project Description", type: "string" }),
  ],
});

export default project;
