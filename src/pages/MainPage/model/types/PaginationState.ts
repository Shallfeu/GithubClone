import {Repository} from "@/entities/RepositoryDetails";

export interface PaginationState {
    repositories?: Repository[];

    isLoading: boolean;
    error?: string | null;

    startCursor?: string;
    hasPreviousPage?: boolean;
    endCursor?: string;
    hasNextPage?: boolean;
}