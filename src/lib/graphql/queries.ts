// src/lib/graphql/queries.ts
import { gql } from "@apollo/client";

export const GET_SITE_INFO = gql`
  query GetSiteInfo {
    generalSettings {
      title
      description
    }
  }
`;