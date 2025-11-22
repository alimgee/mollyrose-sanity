// mollyrose-web/src/lib/queries.ts

import { groq } from "next-sanity";

// Query to fetch all posts, ordered by published date, selecting only necessary fields
export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "mainImage": mainImage.asset->url,
    externalUrl, // <--- NEW FIELD
  }
`;

// Query to fetch the content for Molly's Story page
export const MOLLYS_STORY_QUERY = groq`
  *[_type == "mollysStory"][0] {
    title,
    body
  }
`;

// Query to fetch the content for the About Us page
export const ABOUT_US_QUERY = groq`
  *[_type == "aboutUs"][0] {
    title,
    body
  }
`;
