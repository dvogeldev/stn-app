'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import { BlogCard } from './BlogCard';
import { GET_POSTS, WordPressPost } from '@/lib/graphql/queries';

// Utility function to calculate estimated read time
const calculateReadTime = (excerpt: string): string => {
  const wordsPerMinute = 200;
  const wordCount = excerpt.split(' ').length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readTime} min read`;
};

// Utility function to format WordPress date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Utility function to clean HTML from excerpt
const cleanExcerpt = (excerpt: string): string => {
  return excerpt.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim();
};

// Transform WordPress post to BlogCard props
const transformPostToBlogCard = (post: WordPressPost) => ({
  title: post.title,
  description: cleanExcerpt(post.excerpt),
  author: post.author?.node.name || 'Parish Staff',
  date: formatDate(post.date),
  readTime: calculateReadTime(post.excerpt),
  category: post.categories?.nodes[0]?.name || 'News',
  imageUrl: post.featuredImage?.node.sourceUrl || '/images/parish-family.jpg',
  slug: post.slug
});

export const AnnouncementsSection = () => {
  const { data, loading, error } = useQuery(GET_POSTS, {
    variables: { first: 4 },
    errorPolicy: 'all'
  });

  // Debug logging
  console.log('WordPress GraphQL Debug:', {
    loading,
    error: error?.message,
    data: data?.posts?.nodes?.length || 0,
    apiUrl: process.env.NEXT_PUBLIC_WORDPRESS_API_URL
  });

  // Fallback data when WordPress is unavailable
  const fallbackPosts = [
    {
      title: 'Understanding the Divine Liturgy',
      description: 'Discover the profound meaning behind each element of our ancient worship service and how it connects us to centuries of Christian tradition.',
      author: 'Fr. Michael Thompson',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Worship',
      imageUrl: '/images/parish-family.jpg',
      slug: 'understanding-divine-liturgy'
    },
    {
      title: 'Preparing for Great Lent',
      description: 'Learn about the spiritual disciplines and practices that help Orthodox Christians prepare their hearts for the holiest season of the year.',
      author: 'Deacon Sarah Williams',
      date: 'December 12, 2024',
      readTime: '4 min read',
      category: 'Spiritual Life',
      imageUrl: '/images/christ_icon.webp',
      slug: 'preparing-great-lent'
    },
    {
      title: 'Icons: Windows to Heaven',
      description: 'Explore the rich theology and artistic tradition behind Orthodox iconography and their role in our prayer and worship life.',
      author: 'Maria Konstantinos',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Theology',
      imageUrl: '/images/orthodox_tradition.webp',
      slug: 'icons-windows-heaven'
    },
    {
      title: 'Volunteer Opportunities for Pascha',
      description: 'Sign up to help with various ministries and events as we prepare for the joyous celebration of Holy Pascha!',
      author: 'Parish Council',
      date: 'December 8, 2024',
      readTime: '3 min read',
      category: 'Community',
      imageUrl: '/images/parish_family_cropped.webp',
      slug: 'volunteer-opportunities-pascha'
    }
  ];

  // Use WordPress data if available, otherwise fallback
  const posts = data?.posts?.nodes ? data.posts.nodes.map(transformPostToBlogCard) : fallbackPosts;
  const [featuredPost, ...otherPosts] = posts;

  // Loading state
  if (loading) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-foreground mb-4 rounded-lg">
            Latest News and Events
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto mb-12 rounded-lg">
            Stay updated with parish news, upcoming events, and insights on Orthodox faith and community life.
          </p>
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background font-sans">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title and Description */}
        <h2 className="text-4xl font-extrabold text-foreground mb-4 rounded-lg">
          Latest News and Events
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto mb-12 rounded-lg">
          Stay updated with parish news, upcoming events, and insights on Orthodox faith and community life.
        </p>

        {/* Error message if WordPress is unavailable */}
        {error && (
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800 text-sm">
              Unable to load latest posts from WordPress. Showing sample content.
            </p>
          </div>
        )}

        {/* Featured Post Card */}
        {featuredPost && (
          <div className="mb-12">
            <BlogCard {...featuredPost} variant="primary" />
          </div>
        )}

        {/* Other Latest Posts Grid */}
        {otherPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post: Record<string, unknown>, index: number) => (
              <BlogCard key={post.slug || index} {...post} variant="secondary" />
            ))}
          </div>
        )}

        {/* View All News and Events Button */}
        <div className="mt-12">
          <a
            href="/news-events"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-primary hover:bg-primary/90 md:py-4 md:px-10 text-lg transition-colors duration-300 shadow-md"
          >
            View All News & Events
            <svg className="ml-3 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

