import {ApiService} from "@/shared/api/api.service.ts";
import {AUTH_BY_TOKEN} from "./query.ts";

interface AuthByTokenParams {
    username: string;
}

export const authByToken = async (params: AuthByTokenParams) => {
    const {data, error} = await ApiService.query(AUTH_BY_TOKEN, {...params, first: 1});

    return {
        data: !!data,
        error
    }
}
