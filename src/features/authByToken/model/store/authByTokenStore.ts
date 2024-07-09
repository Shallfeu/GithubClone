import {create} from "zustand";
import {AuthByTokenStore} from "../types/AuthByTokenStore.ts";
import {authByToken} from "../services/authByToken/authByToken.ts";
import {useUserStore} from "../../../../entities/User";

export const useAuthByTokenStore = create<AuthByTokenStore>((set, getState) => ({
    setState: useUserStore.getState?.().setState,

    username: "",
    token: "",

    isLoading: false,
    error: null,

    setUsername: (value) => {
        set({username: value})
    },

    setToken: (value) => {
        set({token: value})
    },

    clearStore: () => set({ username: '', token: '' }),

    authByToken: async () => {
        const state = getState()

        const params = {
            username: state.username
        }

        set({...state, isLoading: true})

        const {data, error} = await authByToken(params)

        if (data) {
            const authData = {
                username: state.username,
                token: state.token
            }

            state.setState(authData)
        }

        if (error) {
            set({...state, error})
        }
    }
}));