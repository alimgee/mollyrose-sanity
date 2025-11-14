// mollyrose-web/lib/sanity.ts

import { createClient } from "next-sanity";

// Ensure these environment variables are set in your .env.local file
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = "2024-01-01"; // Use a fixed date for consistent API behavior

if (!projectId || !dataset) {
  throw new Error("Missing Sanity Project ID or Dataset. Check your .env.local file.");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for faster read access (set to false for fresh data during development)
});

// Helper function to get the image URL
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
