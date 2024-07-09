import {DocumentNode} from "@apollo/client";
import {$api} from "./api.ts";
import type {OperationVariables} from "@apollo/client/core";

export class ApiService {
    private static basicRequest = async (callback) => {
        let resError;
        let resData;

        try {
            const {data} = await callback();
            resData = data;
        } catch (error: unknown) {
            resError = error
        }

        return {
            data: resData,
            error: resError
        }
    }

    static query = async (method: DocumentNode, options?: OperationVariables) => {
        return this.basicRequest(() => $api.query({
            query: method,
            variables: options,
        }))
    }
}