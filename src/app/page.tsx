// src/app/page.tsx
"use client"; // Keep this directive at the top

import { Button } from "@/components/ui/button";
import { useQuery } from "@apollo/client"; // Import useQuery hook
import { GET_SITE_INFO } from "@/lib/graphql/queries"; // Import your GraphQL query

export default function Home() {
  // Use the useQuery hook to execute the GET_SITE_INFO query
  const { loading, error, data } = useQuery(GET_SITE_INFO);

  // Handle loading state
  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
        <p className="text-xl">Loading site information from WordPress...</p>
      </main>
    );
  }

  // Handle error state
  if (error) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
        <p className="text-xl text-red-500">Error fetching data: {error.message}</p>
        <p className="text-lg text-gray-600 mt-2">
          Please ensure your WordPress site is live and the WPGraphQL plugin is installed and activated.
        </p>
      </main>
    );
  }

  // If data is available, display it
  // Use optional chaining (?) and nullish coalescing (??) for safety
  const siteTitle = data?.generalSettings?.title ?? "Site Title Not Found";
  const siteDescription = data?.generalSettings?.description ?? "Site Description Not Found";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold mb-4">
        {siteTitle}
      </h1>
      <p className="text-xl text-gray-700 mb-8">{siteDescription}</p>
      <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
    </main>
  );
}