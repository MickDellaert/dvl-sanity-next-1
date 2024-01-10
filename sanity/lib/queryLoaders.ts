import { client } from "./client";
import { HomePage, Project } from "../types";
import { homePageQuery, projectsQuery } from "./queries";

export async function getHomePageData(): Promise<HomePage[]> {
  return client.fetch(homePageQuery);
}

export async function getProjectsData(): Promise<Project[]> {
  return client.fetch(projectsQuery);
}
