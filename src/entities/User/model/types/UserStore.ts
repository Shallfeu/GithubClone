
type State = {
    username: string;
    token: string;
}

type Actions = {
    setState: (value: State) => void;
}

export type UserStore = State & Actions;

