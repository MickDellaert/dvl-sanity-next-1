import { client } from "./client";
import { Category, HomePage, Page, Project, Setting, Test } from "../types";
import {
  homePageQuery,
  projectsQuery,
  categoryQuery,
  pageQuery,
  pagesQuery,
  settingsQuery,
  testQuery,
  singleCategory,
  singleCategoryOrder,
} from "./queries";
import next from "next";
import { sanityFetch } from "./live";

// export async function getHomePageData() {
//   return sanityFetch({ query: homePageQuery, params: {} });
// }

// export async function getHomePageDataTest() {
//   return client.fetch(homePageQueryTest);
// }

// export async function getProjectsData(): Promise<Project[]> {
//   return client.fetch(projectsQuery, {}, { next: { tags: ["projects"] } });
// }

export async function getProjectsData() {
  return client.fetch(projectsQuery);
}

export async function getCategoryData(slug: string) {
  return client.fetch(singleCategory, { slug });
}

export async function getCategoryDataOrder(slug: string) {
  return client.fetch(singleCategoryOrder, { slug });
}

export async function getCategoriesData() {
  return client.fetch(categoryQuery);
}

export async function getPageData(slug: string): Promise<Page> {
  return client.fetch(pageQuery, { slug });
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
