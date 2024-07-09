import create from 'zustand';
import {useRepositoriesStore} from "@/pages/MainPage";
import {getRepositoriesBySearch} from "../services/getRepositoriesBySearch/getRepositoriesBySearch";
import {PaginationArgs} from "@/pages/MainPage";

const useSearchStore = create((set, getState) => ({
    setPaginationState: useRepositoriesStore.getState?.().setPaginationState,

    search: "",

    setSearch: (value: string) => set((state) => ({...state, search: value})),

    getRepositoriesBySearch: async (args: PaginationArgs) => {
        const state = getState();

        const options = {
            ...args,
            search: state.search
        }

        state.setPaginationState({isLoading: true});

        const {data, error} = await getRepositoriesBySearch(options);

        if (data) {
            state.setPaginationState({...data, isLoading: false})
        }

        if (error) {
            state.setPaginationState({error, isLoading: false})
        }
    }
}));

export default useSearchStore;