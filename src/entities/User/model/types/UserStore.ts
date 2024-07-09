
type State = {
    username: string;
    token: string;
}

type Actions = {
    setUsername: (value: string) => void;
    setToken: (value: string) => void;
}

export type UserStore = State | Actions;

