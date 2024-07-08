import create from 'zustand';

const useRepositoryStore = create((set) => ({
    repository: null,
    setRepository: (repository) => set({ repository }),
}));

export default useRepositoryStore;