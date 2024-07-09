import { gql } from '@apollo/client';

export const GET_USER_REPOSITORIES = gql`
    query GetUserRepositories($first: Int, $last: Int, $after: String, $before: String) {
        viewer {
            repositories(first: $first, last: $last, after: $after, before: $before) {
                edges {
                    node {
                        id
                        name
                        url
                        owner {
                            login
                        }
                        stargazerCount
                        defaultBranchRef {
                            target {
                                ... on Commit {
                                    committedDate
                                }
                            }
                        }
                    }
                }
                pageInfo {
                    startCursor
                    hasPreviousPage
                    endCursor
                    hasNextPage
                }
                totalCount
            }
        }
    }
`;