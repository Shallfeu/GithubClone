import {gql} from '@apollo/client';

export const SEARCH_REPOSITORIES = gql`
    query SearchRepositories($query: String!, $first: Int, $last: Int, $after: String, $before: String) {
        search(query: $query, type: REPOSITORY, first: $first, last: $last, after: $after, before: $before) {
            edges {
                node {
                    ... on Repository {
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
            }
            pageInfo {
                startCursor
                hasPreviousPage
                endCursor
                hasNextPage
            }
            repositoryCount
        }
    }
`;