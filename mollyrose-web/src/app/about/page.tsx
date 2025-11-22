// mollyrose-web/src/app/about/page.tsx

import { client } from "@/lib/sanity";
import { ABOUT_US_QUERY } from "@/lib/queries";
import { PortableText } from '@portabletext/react';

interface AboutPage {
  title: string;
  body: any;
}

async function getAbout(): Promise<AboutPage> {
  return client.fetch(ABOUT_US_QUERY);
}

export default async function AboutPage() {
  const about = await getAbout();

  if (!about) {
    return <div className="p-8">Content not found. Please check Sanity Studio.</div>;
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">{about.title}</h1>
      <div className="prose prose-lg max-w-none">
        <PortableText value={about.body} />
      </div>
    </main>
  );
}
