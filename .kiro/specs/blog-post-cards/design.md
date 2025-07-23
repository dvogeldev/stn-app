# Design Document

## Overview

The blog post cards feature will enhance the existing AnnouncementsSection component by integrating it with real WordPress data through GraphQL queries. The design leverages the existing BlogCard component and Apollo Client setup while adding proper data fetching, error handling, and loading states. The feature will transform the current static announcements section into a dynamic blog section that automatically displays the latest posts from the WordPress backend.

## Architecture

### Component Hierarchy
```
BlogSection (new component)
├── BlogCard (existing, enhanced)
├── LoadingState (new component)
└── ErrorFallback (new component)
```

### Data Flow
1. BlogSection component fetches posts using Apollo Client
2. GraphQL query retrieves post data from WordPress
3. Data is transformed to match BlogCard interface
4. BlogCard components render with real data
5. Fallback content displays when WordPress is unavailable

### Integration Points
- **WordPress Backend**: GraphQL endpoint via WPGraphQL plugin
- **Apollo Client**: Existing setup in `src/lib/apollo/client.ts`
- **GraphQL Queries**: Existing `GET_POSTS` query in `src/lib/graphql/queries.ts`
- **Homepage**: Replace AnnouncementsSection with new BlogSection

## Components and Interfaces

### BlogSection Component
**Location**: `src/components/BlogSection.tsx`

**Purpose**: Main container component that fetches and displays blog posts

**Props**: None (self-contained)

**Key Features**:
- Uses Apollo Client's `useQuery` hook
- Handles loading, error, and success states
- Transforms WordPress data to BlogCard format
- Implements responsive grid layout
- Manages featured post selection

### Enhanced BlogCard Component
**Location**: `src/components/BlogCard.tsx` (existing, minor enhancements)

**Current Interface**:
```typescript
interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  variant?: 'primary' | 'secondary';
}
```

**Enhancements Needed**:
- Add `slug` prop for navigation
- Add `onClick` handler for post navigation
- Improve image fallback handling
- Add loading state for images

### LoadingState Component
**Location**: `src/components/LoadingState.tsx` (new)

**Purpose**: Skeleton loading state for blog cards

**Features**:
- Matches BlogCard dimensions
- Animated skeleton placeholders
- Responsive grid layout
- Maintains visual consistency

### ErrorFallback Component
**Location**: `src/components/ErrorFallback.tsx` (new)

**Purpose**: Graceful error handling when WordPress is unavailable

**Features**:
- Displays fallback content
- Maintains section structure
- Provides retry mechanism
- Uses Orthodox design language

## Data Models

### WordPress Post Response
```typescript
interface WordPressPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  commentStatus: string;
  author?: {
    node: {
      name: string;
    };
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  categories?: {
    nodes: Array<{
      name: string;
    }>;
  };
}
```

### Transformed Blog Data
```typescript
interface BlogData {
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
  slug: string;
  variant: 'primary' | 'secondary';
}
```

### Data Transformation Logic
- **Title**: Direct mapping from WordPress `title`
- **Description**: Extract from `excerpt`, strip HTML tags
- **Author**: From `author.node.name` or fallback to "Parish Staff"
- **Date**: Format WordPress date to readable format
- **Read Time**: Calculate based on excerpt length (estimated)
- **Category**: From first category or fallback to "Announcements"
- **Image**: From `featuredImage.node.sourceUrl` or fallback image
- **Slug**: Direct mapping for navigation
- **Variant**: First post gets 'primary', others get 'secondary'

## Error Handling

### WordPress Unavailable
- Display fallback content with sample posts
- Show informative message about temporary unavailability
- Maintain visual consistency with loading states
- Log errors for debugging

### Network Errors
- Implement retry mechanism with exponential backoff
- Show user-friendly error messages
- Provide manual retry button
- Cache last successful response

### Data Validation
- Validate required fields before rendering
- Provide default values for missing data
- Handle malformed HTML in excerpts
- Sanitize user-generated content

### Image Loading Errors
- Implement fallback images for missing featured images
- Use Next.js Image component error handling
- Provide alt text for accessibility
- Optimize image loading performance

## Testing Strategy

### Unit Tests
**Location**: `src/components/__tests__/`

**BlogSection Tests**:
- Data fetching and transformation
- Loading state rendering
- Error state handling
- Responsive layout behavior

**BlogCard Tests**:
- Props rendering correctly
- Navigation functionality
- Image loading and fallbacks
- Accessibility compliance

**Utility Tests**:
- Data transformation functions
- Date formatting utilities
- Read time calculation
- HTML sanitization

### Integration Tests
**Location**: `src/app/__tests__/`

**GraphQL Integration**:
- Query execution with mock data
- Apollo Client cache behavior
- Error response handling
- Network retry logic

**Component Integration**:
- BlogSection with BlogCard interaction
- Homepage integration
- Responsive behavior across devices
- Performance with large datasets

### Visual Regression Tests
- BlogCard variants rendering correctly
- Loading states appearance
- Error states display
- Responsive grid layouts
- Orthodox color palette consistency

### Accessibility Tests
- Screen reader compatibility
- Keyboard navigation
- Color contrast compliance
- Focus management
- ARIA labels and descriptions

## Performance Considerations

### Data Fetching
- Implement query caching with Apollo Client
- Use appropriate cache policies
- Limit initial post count to 6-10 posts
- Consider pagination for future expansion

### Image Optimization
- Leverage Next.js Image component
- Implement proper sizing and lazy loading
- Use WebP format when supported
- Provide responsive image sizes

### Bundle Size
- Reuse existing components where possible
- Minimize new dependencies
- Use tree shaking for utilities
- Consider code splitting for large features

### Runtime Performance
- Memoize expensive calculations
- Optimize re-renders with React.memo
- Use efficient data structures
- Monitor Core Web Vitals impact