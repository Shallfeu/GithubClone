import {RepositoryDetails} from "./RepositoryDetails.ts";

export interface RepositoryStore {
    repository: RepositoryDetails;

    isLoading: boolean;
    error: string | null;

    setRepository: (value: RepositoryDetails) => void;
}