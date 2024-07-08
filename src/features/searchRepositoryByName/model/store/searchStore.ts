import create from 'zustand';

const useSearchStore = create((set) => ({
    search: "",
    setSearch: (value: string) => set((state) => ({...state, search: value})),
}));

export default useSearchStore;