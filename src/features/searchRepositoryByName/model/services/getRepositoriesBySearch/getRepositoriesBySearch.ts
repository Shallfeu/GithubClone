import {ApiService} from "@/shared/api/api.service.ts";
import {SEARCH_REPOSITORIES} from "./query.ts";
import {Repository} from "@/entities/RepositoryDetails";
import {addQueryParams} from "@/shared/lib/url/addQueryParams/addQueryParams.ts";

interface GetRepositoriesBySearchParams {
    search: string;
    first: number;
    last: number;
    after: string;
    before: string;
}

export const getRepositoriesBySearch = async (params: GetRepositoriesBySearchParams) => {
    const {
        search,
        first,
        last,
        after,
        before
    } = params;

    const options = {
        query: search,
        first,
        last,
        after,
        before
    }

    const {data, error} = await ApiService.query(SEARCH_REPOSITORIES, options);

    addQueryParams({search})

    const repositories = data.search.edges.map((edge: unknown): Repository => {
        const node = edge.node;

        return {
            id: node.id,
            name: node.name,
            stars: node.stargazerCount,
            lastCommit: node.defaultBranchRef.target.committedDate,
            url: node.url,
            owner: node.owner.login,
        } as Repository;
    });
    const startCursor = data.search.pageInfo.startCursor;
    const hasPreviousPage = data.search.pageInfo.hasPreviousPage;
    const endCursor = data.search.pageInfo.endCursor;
    const hasNextPage = data.search.pageInfo.hasNextPage;

    return {
        data: {
            repositories,
            startCursor,
            hasPreviousPage,
            endCursor,
            hasNextPage
        },
        error
    }
}
