import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  stega: {
    studioUrl: process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/admin`
      : process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  },
});
