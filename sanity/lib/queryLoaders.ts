import project from "../schemas/project-schema";
import { HomePage, Project } from "../types";
import { client } from "./client";
import { homePageQuery, projectsQuery } from "./queries";

export async function getHomePageData() {
  return client.fetch<HomePage[]>(homePageQuery);
}

export async function getProjectsData() {
  return client.fetch<Project[]>(projectsQuery);
}
