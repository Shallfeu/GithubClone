import { gql } from '@apollo/client';

export const GET_USER_REPOSITORIES = gql`
  query GetUserRepositories($username: String!, $first: Int!, $after: String) {
    user(login: $username) {
      repositories(first: $first, after: $after) {
        edges {
          node {
            id
            name
            description
            url
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;