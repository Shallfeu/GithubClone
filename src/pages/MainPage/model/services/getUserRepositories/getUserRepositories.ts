import {GET_USER_REPOSITORIES} from "./query.ts";
import {ApiService} from "@/shared/api/api.service.ts";
import {PaginationArgs} from "../../types/PaginationArgs.ts";
import {Repository} from "@/entities/RepositoryDetails";
import {addQueryParams} from "@/shared/lib/url/addQueryParams/addQueryParams.ts";

export const getUserRepositories = async (args: PaginationArgs) => {
    const {data, error} = await ApiService.query(GET_USER_REPOSITORIES, args)

    const repositories = data.viewer.repositories.edges.map((edge: any): Repository => {
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

    addQueryParams({})

    const startCursor = data.viewer.repositories.pageInfo.startCursor;
    const hasPreviousPage = data.viewer.repositories.pageInfo.hasPreviousPage;
    const endCursor = data.viewer.repositories.pageInfo.endCursor;
    const hasNextPage = data.viewer.repositories.pageInfo.hasNextPage;

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