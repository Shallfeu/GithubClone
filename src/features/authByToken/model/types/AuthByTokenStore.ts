
type State = {
    username: string;
    token: string;

    idLoading: boolean;
    error: string | null;
}

type Actions = {
    setUsername: (value: string) => void;
    setToken: (value: string) => void;
    authByToken: () => void;
    clearStore: () => void;
}

export type AuthByTokenStore = State & Actions;

