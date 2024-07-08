// src/queries.ts
import { gql } from '@apollo/client';

export const GET_USER_REPOSITORIES = gql`
    query GetUserRepositories($first: Int, $after: String) {
        viewer {
            repositories(first: $first, after: $after) {
                edges {
                    node {
                        id
                        name
                        description
                        url
                        owner {
                            login
                        }
                    }
                }
                pageInfo {
                    endCursor
                    hasNextPage
                }
                totalCount
            }
        }
    }
`;

export const SEARCH_REPOSITORIES = gql`
    query SearchRepositories($query: String!, $first: Int, $after: String) {
        search(query: $query, type: REPOSITORY, first: $first, after: $after) {
            edges {
                node {
                    ... on Repository {
                        id
                        name
                        description
                        url
                        owner {
                            login
                        }
                    }
                }
            }
            pageInfo {
                endCursor
                hasNextPage
            }
            repositoryCount
        }
    }
`;
