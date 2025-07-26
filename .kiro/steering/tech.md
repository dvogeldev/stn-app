# Technology Stack

## Core Framework
- **Next.js 15.3.5** with App Router (React 19.0.0)
- **TypeScript** for type safety
- **Tailwind CSS 4** for styling with custom Orthodox color palette
- **pnpm** as package manager

## Key Libraries
- **@apollo/client** - GraphQL client for WordPress integration
- **@radix-ui** components - Accessible UI primitives
- **Shadcn/ui** - Pre-built component library with Stone theme
- **Lucide React** - Icon library
- **class-variance-authority** & **clsx** - Conditional styling utilities

## WordPress Integration
- **WPGraphQL** plugin required on WordPress backend
- GraphQL endpoint: `NEXT_PUBLIC_WORDPRESS_API_URL`
- Fallback data handling when WordPress is unavailable

## Development Tools
- **ESLint** with Next.js config
- **PostCSS** with Tailwind
- **Turbopack** for faster development builds

## Code Quality Standards

### JSX Character Escaping
Always properly escape special characters in JSX to prevent ESLint errors and ensure proper rendering:

**Required Escaping:**
- Apostrophes: `'` → `&apos;`
- Quotes: `"` → `&quot;`
- Less than: `<` → `&lt;`
- Greater than: `>` → `&gt;`
- Ampersand: `&` → `&amp;`

**Examples:**
```jsx
// ❌ Incorrect - will cause ESLint errors
<p>It's a beautiful day</p>
<p>The church's mission</p>

// ✅ Correct - properly escaped
<p>It&apos;s a beautiful day</p>
<p>The church&apos;s mission</p>
```

### React/JSX Best Practices
- Always escape special characters in text content
- Use semantic HTML elements with proper ARIA labels
- Ensure all images have descriptive alt text
- Use TypeScript interfaces for component props
- Follow consistent naming conventions (PascalCase for components)

## Common Commands

### Development
```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

### Component Generation
```bash
npx shadcn@latest add [component]  # Add Shadcn UI components
```

## Environment Variables
- `NEXT_PUBLIC_WORDPRESS_API_URL` - WordPress GraphQL endpoint
- Store in `.env.local` (gitignored)

## Deployment
- Optimized for Vercel deployment
- Static generation where possible for performance