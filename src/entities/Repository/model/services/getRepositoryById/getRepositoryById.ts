import {ApiService} from "@/shared/api/api.service.ts";
import {GET_REPOSITORY_BY_ID} from "./query.ts";
import {RepositoryDetails} from "../../types/RepositoryDetails.ts";

interface GetRepositoryByIdParams {
    id: string;
}

export const getRepositoryById = async (params: GetRepositoryByIdParams) => {
    const {data, error} = await ApiService.query(GET_REPOSITORY_BY_ID, params);

    const node = data.node;

    const repository = {
        id: node.id,
        name: node.name,
        stars: node?.stargazerCount,
        lastCommit: node?.defaultBranchRef?.target?.committedDate,
        url: node.url,
        owner: node?.owner?.login,
        ownerImage: node?.owner?.avatarUrl,
        ownerUrl: node?.owner?.url,
        description: node?.description,
        languages: node?.languages?.nodes?.map(language => language.name),
    } as RepositoryDetails;

    return {
        data: {
            repository,
        },
        error
    }
}
