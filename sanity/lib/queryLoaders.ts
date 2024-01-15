import { client } from "./client";
import { Category, HomePage, Project } from "../types";
import { homePageQuery, projectsQuery, categoryQuery } from "./queries";

export async function getHomePageData(): Promise<HomePage[]> {
  return client.fetch(homePageQuery);
}

export async function getProjectsData(): Promise<Project[]> {
  return client.fetch(projectsQuery);
}

export async function getCategoryData(): Promise<Category[]> {
  return client.fetch(categoryQuery);
}
