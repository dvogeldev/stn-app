// src/lib/graphql/queries.ts
import { gql } from '@apollo/client';

// TypeScript interfaces for WordPress GraphQL responses
export interface WordPressAuthor {
  node: {
    name: string;
    slug: string;
    avatar?: {
      url: string;
    };
  };
}

export interface WordPressFeaturedImage {
  node: {
    sourceUrl: string;
    altText: string;
    mediaDetails?: {
      width: number;
      height: number;
    };
  };
}

export interface WordPressCategory {
  name: string;
  slug: string;
  description?: string;
}

export interface WordPressPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  modified: string;
  commentStatus: string;
  status: string;
  author?: WordPressAuthor;
  featuredImage?: WordPressFeaturedImage;
  categories?: {
    nodes: WordPressCategory[];
  };
  tags?: {
    nodes: Array<{
      name: string;
      slug: string;
    }>;
  };
}

export interface WordPressPostsResponse {
  posts: {
    nodes: WordPressPost[];
  };
}

export interface WordPressSinglePostResponse {
  post: WordPressPost & {
    content: string;
  };
}

export interface WordPressSiteInfo {
  generalSettings: {
    title: string;
    description: string;
  };
}

export const GET_SITE_INFO = gql`
  query GetSiteInfo {
    generalSettings {
      title
      description
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts($first: Int = 10) {
    posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        slug
        excerpt
        date
        modified
        commentStatus
        status
        author {
          node {
            name
            slug
            avatar {
              url
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        categories {
          nodes {
            name
            slug
            description
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query GetSinglePost($id: ID!, $idType: PostIdType = SLUG) {
    post(id: $id, idType: $idType) {
      id
      title
      slug
      content
      excerpt
      date
      modified
      commentStatus
      status
      author {
        node {
          name
          slug
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          sourceUrl
          altText
          mediaDetails {
            width
            height
          }
        }
      }
      categories {
        nodes {
          name
          slug
          description
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
    }
  }
`;