import create from 'zustand';
import {RepositoryStore} from "../types/RepositoryStore.ts";
import {getRepositoryById} from "../services/getRepositoryById/getRepositoryById.ts";

const useRepositoryStore = create<RepositoryStore>((set, getState) => ({
    repository: null,

    isLoading: false,
    error: null,

    setState: (data) => set({...data}),

    getRepositoryById: async (id: string) => {
        const state = getState();

        const {data, error} = await getRepositoryById({id});

        if (data) {
            state.setState({...data, isLoading: false})
        }

        if (error) {
            state.setState({error, isLoading: false})
        }
    }
}));

export default useRepositoryStore;