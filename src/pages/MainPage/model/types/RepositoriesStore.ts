import {RepositoryCard} from "./RepositoryCard.ts";



export interface RepositoriesStore {
    repositories: RepositoryCard[];
    currentPage: number;
    totalPages: number;
    endCursor: string | null;

    setRepositories: (repositories: RepositoryCard[], totalPages: number) => void;
    setCurrentPage: (page: number) => void;
    clearRepositories: () => void;
}