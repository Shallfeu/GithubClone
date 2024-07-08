import {gql} from "@apollo/client";

export const GET_REPOSITORY_BY_ID = gql`
    query GetRepositoryById($id: ID!) {
        node(id: $id) {
            ... on Repository {
                id
                name
                description
                url
            }
        }
    }
`;