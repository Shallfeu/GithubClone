import { gql } from '@apollo/client';

export const AUTH_BY_TOKEN = gql`
  query GetUserRepositories($username: String!) {
    user(login: $username) {
      repositories(first: $first, after: $after) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;