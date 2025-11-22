// mollyrose-web/src/app/page.tsx

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">Welcome to Mollyrose</h1>
      <p className="text-xl mb-4">This is the new homepage placeholder.</p>
      <Link href="/news" className="text-blue-600 hover:underline text-lg">
        Go to News &rarr;
      </Link>
    </main>
  );
}
