import {create} from "zustand";

const useRepositoriesStore = create((set) => ({
    repositories: [],

    endCursor: null,

    hasNextPage: false,

    setRepositories: (repositories, endCursor, hasNextPage) =>
        set((state) => ({
            repositories: [...state.repositories, ...repositories],
            endCursor,
            hasNextPage,
        })),

    clearRepositories: () =>
        set({
            repositories: [],
            endCursor: null,
            hasNextPage: false,
        }),
}))