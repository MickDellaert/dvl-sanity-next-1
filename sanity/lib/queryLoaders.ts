import { client } from "./client";
import { Category, HomePage, Page, Project, Setting, Test } from "../types";
import { homePageQuery, projectsQuery, categoryQuery,pageQuery, pagesQuery, settingsQuery, testQuery } from "./queries";

export async function getHomePageData(): Promise<HomePage> {
  return client.fetch(homePageQuery);
}

export async function getProjectsData(): Promise<Project[]> {
  return client.fetch(projectsQuery);
}

export async function getCategoriesData(): Promise<Category[]> {
  return client.fetch(categoryQuery);
}

export async function getPageData(slug: string): Promise<Page> {
  return client.fetch(pageQuery, {slug});
}

export async function getPagesData(): Promise<Page[]> {
  return client.fetch(pagesQuery);
}

export async function getSettings(): Promise<Setting> {
  return client.fetch(settingsQuery);
}

export async function getTest(): Promise<Test> {
  return client.fetch(testQuery);
}
