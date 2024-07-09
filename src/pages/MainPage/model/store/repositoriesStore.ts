import {create} from "zustand";
import {useUserStore} from "@/entities/User";
import {getUserRepositories} from "../services/getUserRepositories/getUserRepositories.ts";
import {PaginationState} from "../types/PaginationState.ts";
import {RepositoriesStore} from "../types/RepositoriesStore.ts";
import {PaginationArgs} from "../types/PaginationArgs.ts";

export const useRepositoriesStore = create<RepositoriesStore>((set, getState) => ({
    username: useUserStore.getState?.().username,

    repositories: [],

    currentPage: 1,
    perPage: 10,

    startCursor: '',
    hasPreviousPage: false,
    endCursor: '',
    hasNextPage: false,

    isLoading: false,
    error: null,

    setCurrentPage: (value: number) => {
        set({
            currentPage: value
        })
    },

    setPaginationState: (value: PaginationState) => {
        const state = getState()

        const {
            isLoading,
            repositories,
            startCursor,
            hasPreviousPage,
            endCursor,
            hasNextPage,
            error
        } = value;

        set({
            isLoading: isLoading ?? state.isLoading,
            repositories: repositories ?? state.repositories,
            startCursor: startCursor ?? state.startCursor,
            hasPreviousPage: hasPreviousPage ?? state.hasPreviousPage,
            endCursor: endCursor ?? state.endCursor,
            hasNextPage: hasNextPage ?? state.hasNextPage,
            error: error ?? state.error,
        });
    },

    async getUserRepositories(args: PaginationArgs){
        const state = getState();

        const options = {
            ...args,
            username: state.username,
        }

        state.setPaginationState({isLoading: true});

        const {data, error} = await getUserRepositories(options);

        if (data) {
            state.setPaginationState({...data, isLoading: false})
        }

        if (error) {
            state.setPaginationState({error, isLoading: false})
        }
    },

    nextPage: (callback: (args: PaginationArgs) => void) => {
        const state = getState();

        const args = {
            first: state.perPage,
            after: state.endCursor
        }

        callback(args);
    },

    prevPage: (callback: (args: PaginationArgs) => void) => {
        const state = getState();

        const args = {
            last: state.perPage,
            before: state.startCursor
        }

        callback(args);
    },
}))