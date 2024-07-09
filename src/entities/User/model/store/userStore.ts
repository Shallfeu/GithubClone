import { create } from 'zustand'
import {UserStore} from "../types/UserStore.ts";

export const useUserStore = create<UserStore>((set) => ({
    username: "shallfeu",
    token: '',
    setUsername: (value: string) => set((state) => ({ username: value })),
    setToken: (value: string) => set((state) => ({ token: value })),
}))

