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

// We no longer need POST_SLUG_QUERY since we are not creating internal pages.
