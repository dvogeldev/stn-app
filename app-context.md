# Next.js App with WordPress Backend (stn-app) - LLM Context Document

## Project Goal
To build a Next.js 14+ frontend application with Tailwind CSS, TypeScript, Shadcn UI, and GraphQL (Apollo Client) using the App Router, acting as a decoupled frontend for a WordPress backend.

## Project Name
`stn-app`

## Live Site (WordPress Backend)
`https://stn-app.instawp.site`
(Assumes WPGraphQL plugin is installed and active on this WordPress instance.)

## Core Technologies Stack
* **Framework:** Next.js (v15.3.5, App Router)
* **React:** React (v19.0.0), React-DOM (v19.0.0)
* **UI Components:** Shadcn UI (initialized with 'Stone' base color, includes `tw-animate-css`)
* **Styling:** Tailwind CSS (configured)
* **Language:** TypeScript (configured)
* **GraphQL Client:** Apollo Client (v3+)
* **Package Manager:** pnpm (preferred runner)
* **Version Control:** Git (initialized, first commit made)

## Project Structure (Key Directories/Files)
* `stn-app/` (Project Root)
    * `.env.local` (Contains `NEXT_PUBLIC_WORDPRESS_API_URL`)
    * `.gitignore`
    * `pnpm-lock.yaml`
    * `package.json`
    * `tailwind.config.ts`
    * `src/`
        * `src/app/`
            * `src/app/layout.tsx` (Root layout, wraps `ApolloProvider`)
            * `src/app/page.tsx` ("use client" component, displays site info and button)
            * `src/app/globals.css` (Global CSS, Tailwind directives, Shadcn CSS variables)
        * `src/components/`
            * `src/components/ui/`
                * `src/components/ui/button.tsx` (Shadcn Button component)
            * `src/components/providers/`
                * `src/components/providers/apollo-provider.tsx` ("use client" component, provides Apollo Client to app)
        * `src/lib/`
            * `src/lib/apollo/`
                * `src/lib/apollo/client.ts` (Apollo Client instance configuration)
            * `src/lib/graphql/`
                * `src/lib/graphql/queries.ts` (Contains GraphQL query definitions, e.g., `GET_SITE_INFO`)
            * `src/lib/utils.ts` (Shadcn utility functions)
    * ...other Next.js generated files

## Current State & Completed Steps

1.  **Next.js App Creation:**
    * Used `npx create-next-app@latest stn-app` with TypeScript, ESLint, Tailwind CSS, App Router (no `src` dir initially specified in CLI prompts, but project ended up with `src` dir).
    * Verified default Next.js starter page running on `http://localhost:3000`.

2.  **Shadcn UI Integration:**
    * Initialized using `npx shadcn@latest init` (note: `shadcn-ui` deprecated).
    * Configured for TypeScript, 'Default' style, 'Stone' base color, `src/app/globals.css`, `tailwind.config.ts`, `@/components` alias, `@/lib/utils` alias, React Server Components (Yes).
    * Added `button` component using `npx shadcn@latest add button`.
    * `src/app/page.tsx` was converted to a "use client" component to allow interactive button (`onClick`).
    * Verified Shadcn styled button displayed.

3.  **GraphQL Client Setup (Apollo Client):**
    * Installed `@apollo/client` and `graphql` using `pnpm install`.
    * Configured `NEXT_PUBLIC_WORDPRESS_API_URL` in `.env.local`.
    * Created `src/lib/apollo/client.ts` for Apollo Client instance creation and management.
    * Created `src/components/providers/apollo-provider.tsx` (a "use client" component) to wrap the application with `ApolloProvider`.
    * Integrated `ApolloProvider` into `src/app/layout.tsx`.
    * **Crucial Correction:** Ensured all file paths (`src/lib/apollo/client.ts`, `src/components/providers/apollo-provider.tsx`, `src/app/layout.tsx`, `src/app/page.tsx`) correctly reflect the `src` directory structure.
    * Verified no setup-related errors on `http://localhost:3000`.

4.  **Git Version Control:**
    * Initialized Git repository (`git init`).
    * Verified/created `.gitignore` (specifically for `.env.local` and `node_modules`).
    * Staged all initial files (`git add .`).
    * Created first commit: `feat: Initial Next.js app with Tailwind CSS, TypeScript, Shadcn UI, and Apollo Client setup`.

5.  **Initial GraphQL Data Fetching:**
    * Created `src/lib/graphql/queries.ts` with `GET_SITE_INFO` query for `generalSettings { title description }`.
    * Modified `src/app/page.tsx` to use the `useQuery` hook to fetch and display the WordPress site's title and description. Includes loading and error states.
    * Verified the WordPress site title and description are correctly displayed on `http://localhost:3000`.

## Next Logical Steps (Potential Areas for Development)
* Fetching and displaying a list of WordPress posts.
* Implementing dynamic routing for individual post pages (`[slug].tsx`).
* Adding navigation (e.g., header, footer) using Shadcn UI.
* Implementing pagination for post lists.
* Adding search functionality.
* Displaying categories/tags.
* Implementing custom post types.
* Setting up server-side rendering (SSR) or static site generation (SSG) for content.