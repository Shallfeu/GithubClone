import {create} from "zustand";
import {AuthByTokenStore} from "../types/AuthByTokenStore.ts";
import {authByToken} from "../services/authByToken/authByToken.ts";
import {useUserStore} from "../../../../entities/User";
import {$api} from "../../../../shared/api/api.ts";

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

        set({...state, error: null, isLoading: true})

        localStorage.setItem('AUTH_KEY', state.token);

        const {data, error} = await authByToken(params)

        if (data) {
            const authData = {
                username: state.username,
                token: state.token
            }

            state.setState(authData)
            set({...state, isLoading: false})

            return true;
        }

        if (error) {
            set({...state, error: error.message, isLoading: false})

            localStorage.removeItem('AUTH_KEY')

            return false;
        }
    }
}));