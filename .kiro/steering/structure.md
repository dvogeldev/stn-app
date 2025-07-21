# Project Structure

## Directory Organization

```
stn-app/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── calendar/      # Calendar integration
│   │   │   └── disable-comments/ # WordPress comment management
│   │   ├── posts/[slug]/      # Dynamic post pages
│   │   ├── calendar/          # Calendar page
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles + Tailwind
│   ├── components/            # React components
│   │   ├── ui/               # Shadcn UI components
│   │   ├── providers/        # Context providers (Apollo)
│   │   └── [ComponentName].tsx # Page sections & features
│   └── lib/                   # Utilities and configurations
│       ├── apollo/           # GraphQL client setup
│       ├── graphql/          # GraphQL queries
│       ├── comments.ts       # Comment management utilities
│       ├── wordpress.ts      # WordPress API integration
│       └── utils.ts          # Shared utilities
├── public/                    # Static assets
│   ├── images/               # Church photos and graphics
│   └── assets/               # Icons and SVGs
├── docs/                     # Project documentation
└── .kiro/                    # Kiro configuration
    └── steering/             # AI assistant guidance
```

## Naming Conventions

### Components
- **PascalCase** for component files: `HeroSection.tsx`
- **Descriptive names** reflecting purpose: `FirstTimeVisitorSection.tsx`
- **Section suffix** for page sections: `OrthodoxTraditionSection.tsx`

### Files & Directories
- **kebab-case** for API routes: `disable-comments/`
- **camelCase** for utility files: `wordpress.ts`
- **Descriptive paths** in public: `public/images/parish-family.jpg`

## Component Architecture

### Page Structure
- Homepage (`page.tsx`) composed of section components
- Each major section is a separate component
- Consistent section wrapper patterns

### Data Fetching
- Server components for initial data loading
- Apollo Client for dynamic GraphQL queries
- Fallback data when WordPress unavailable

### Styling Patterns
- Tailwind classes with Orthodox color palette
- Custom CSS variables in `globals.css`
- Responsive design with mobile-first approach

## Key Patterns

### WordPress Integration
- GraphQL queries in `src/lib/graphql/`
- Fallback handling in `src/lib/wordpress.ts`
- Environment-based API configuration

### Component Organization
- UI components in `src/components/ui/`
- Feature components at `src/components/` root
- Provider components in `src/components/providers/`