// mollyrose-web/lib/queries.ts

import { groq } from "next-sanity";

// Query to fetch all posts, ordered by published date, selecting only necessary fields
export const POSTS_QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "mainImage": mainImage.asset->url,
    body,
  }
`;

// Query to fetch a single post by its slug
export const POST_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    publishedAt,
    "mainImage": mainImage.asset->url,
    body,
  }
`;
