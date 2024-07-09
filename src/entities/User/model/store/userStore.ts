import {create} from 'zustand'
import {UserStore} from "../types/UserStore.ts";

export const useUserStore = create<UserStore>((set) => ({
    username: "shallfeu",
    token: '',
    setState: (value) => set((state) => ({...value})),
}))

