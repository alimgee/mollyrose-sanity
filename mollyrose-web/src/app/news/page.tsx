// mollyrose-web/src/app/page.tsx

import { client } from "@/lib/sanity";
import { POSTS_QUERY } from "@/lib/queries";
import { PortableText } from '@portabletext/react';
import Link from 'next/link';

// Define the type for a single post based on the query
interface Post {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  mainImage?: string;
  body: any;
  externalUrl: string; // <--- NEW FIELD
}

// Fetch function to get all posts
async function getPosts(): Promise<Post[]> {
  // The client automatically uses the environment variables
  return client.fetch(POSTS_QUERY);
}

// Main Home Page Component
export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Mollyrose News</h1>

      {posts.length === 0 ? (
        <p>No news posts found. Please add some in your Sanity Studio.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post._id} className="border p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              {/* Changed to an external link */}
              <a 
                href={post.externalUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:underline"
              >
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
