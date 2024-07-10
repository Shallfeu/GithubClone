import { gql } from '@apollo/client';

export const AUTH_BY_TOKEN = gql`
  query GetUserRepositories($username: String!, $first: Int!) {
    user(login: $username) {
      repositories(first: $first) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;