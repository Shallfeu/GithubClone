import {PaginationState} from "./PaginationState.ts";
import {PaginationArgs} from "./PaginationArgs.ts";
import {Repository} from "@/entities/RepositoryDetails";

type State = {
    username: string;

    repositories: Repository[];

    isLoading: boolean;
    error: string | null;

    currentPage: number;
    perPage: number;

    startCursor: string;
    hasPreviousPage: boolean;
    endCursor: string;
    hasNextPage: boolean;
}

type Actions = {
    setCurrentPage: (value: number) => void;
    setPaginationState: (value: PaginationState) => void;
    getUserRepositories: (args: PaginationArgs) => void;
    nextPage: (callback: (args: PaginationArgs) => void) => void;
    prevPage: (callback: (args: PaginationArgs) => void) => void;
}

export type RepositoriesStore = State & Actions;
