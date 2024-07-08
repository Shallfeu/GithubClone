import {useLazyQuery} from "@apollo/client";
import {SEARCH_REPOSITORIES} from "./query.ts";

interface GetRepositoriesBySearchParams {
    search: string;
    first: number;

}

const getRepositoriesBySearch = (params: GetRepositoriesBySearchParams) => {
    const {
        search,
        first
    } = params;

    const [searchRepositories, {loading, error}] = useLazyQuery(SEARCH_REPOSITORIES, {
        variables: {query: search, first},

        notifyOnNetworkStatusChange: true,

        onCompleted: (data) => {
            console.log(data)
            // setRepositories(
            //     data.search.edges.map((edge) => edge.node),
            //     data.search.pageInfo.endCursor,
            //     data.search.pageInfo.hasNextPage
            // );
        },
    });
}
