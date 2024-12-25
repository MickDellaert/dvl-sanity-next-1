import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  stega: { studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL },
});
