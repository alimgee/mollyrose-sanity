// mollyrose-web/src/app/story/page.tsx

import { client } from "@/lib/sanity";
import { MOLLYS_STORY_QUERY } from "@/lib/queries";
import { PortableText } from '@portabletext/react';

interface StoryPage {
  title: string;
  body: any;
}

async function getStory(): Promise<StoryPage> {
  return client.fetch(MOLLYS_STORY_QUERY);
}

export default async function StoryPage() {
  const story = await getStory();

  if (!story) {
    return <div className="p-8">Content not found. Please check Sanity Studio.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">{story.title}</h1>
      <div className="prose prose-lg max-w-none">
        <PortableText value={story.body} />
      </div>
    </main>
  );
}
