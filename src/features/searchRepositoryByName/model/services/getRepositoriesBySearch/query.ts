import { gql } from '@apollo/client';

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
        }
    }
`;