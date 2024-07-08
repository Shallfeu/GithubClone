export interface RepositoryCard {
    id: string;
    name: string;
    description: string;
    url: string;
    owner: {
        login: string;
    };
}