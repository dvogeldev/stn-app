// src/lib/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_SITE_INFO = gql`
  query GetSiteInfo {
    generalSettings {
      title
      description
    }
  }
`;

export const GET_POSTS = gql`
  query GetPosts {
    posts(first: 10) { # You can adjust 'first' to fetch more or fewer posts
      nodes {
        id
        title
        slug
        excerpt
        date
        # You can add more fields here if needed, e.g., featuredImage { node { sourceUrl } }
      }
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query GetSinglePost($id: ID!, $idType: PostIdType = SLUG) {
    post(id: $id, idType: $idType) {
      id
      title
      content
      date
      author {
        node {
          name
        }
      }
      # You can add more fields like featuredImage here if needed
    }
  }
`;