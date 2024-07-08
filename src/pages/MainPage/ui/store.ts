import create from 'zustand';
import {RepositoriesStore} from "../model/types/RepositoriesStore.ts";

const PAGE_SIZE = 10;

const useRepositoriesStore = create<RepositoriesStore>((set) => ({
    repositories: [],
    currentPage: 1,
    totalPages: 1,
    endCursor: null,
    limit: PAGE_SIZE,

    setCurrentPage: (page) => {
        set({currentPage: page})
    },
    setRepositories: (repositories, totalPages, endCursor) => {
        set((state) => ({
            ...state,
            repositories,
            totalPages,
            endCursor,
        }))
    },
    clearRepositories: () => {
        set({
            repositories: [],
            currentPage: 1,
            totalPages: 1,
        })
    }
}));

export default useRepositoriesStore;
