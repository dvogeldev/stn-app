// src/app/page.tsx
"use client";

import { useQuery } from "@apollo/client";
import { Button } from "@/components/ui/button";
import { GET_SITE_INFO, GET_POSTS } from "@/lib/graphql/queries";
import Link from "next/link";

export default function Home() {
  const {
    loading: siteInfoLoading,
    error: siteInfoError,
    data: siteInfoData,
  } = useQuery(GET_SITE_INFO, {
    fetchPolicy: 'no-cache', // Add this line to bypass cache for site info
  });

  const {
    loading: postsLoading,
    error: postsError,
    data: postsData,
  } = useQuery(GET_POSTS);

  if (siteInfoLoading || postsLoading) return <p>Loading...</p>;
  if (siteInfoError) return <p>Error loading site info: {siteInfoError.message}</p>;
  if (postsError) return <p>Error loading posts: {postsError.message}</p>;

  const siteTitle = siteInfoData?.generalSettings?.title || "Site Title Not Found";
  const siteDescription =
    siteInfoData?.generalSettings?.description || "Site Description Not Found";
  const posts = postsData?.posts?.nodes || [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          WordPress Backend:{" "}
          <code className="font-mono font-bold">https://stn-app.instawp.site</code>{" "}
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        {/* Placeholder for potential future logo/image */}
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
        <h1 className="text-4xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: siteTitle }} />
        <p className="text-lg mb-8">{siteDescription}</p>

        <Button onClick={() => alert("Button Clicked!")} className="mb-8">
          Click Me
        </Button>

        <h2 className="text-3xl font-semibold mb-4">Latest Posts</h2>
        {posts.length > 0 ? (
          <div className="grid gap-6">
            {posts.map((post: any) => (
              <div key={post.id} className="border p-4 rounded-lg shadow-md">
                <Link href={`/posts/${post.slug}`} passHref>
                  <h3 className="text-2xl font-bold mb-2 text-blue-600 hover:underline cursor-pointer">
                    {post.title}
                  </h3>
                </Link>
                <div
                  className="text-gray-700 mb-2"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <p className="text-sm text-gray-500">
                  Published on: {new Date(post.date).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </main>
  );
}