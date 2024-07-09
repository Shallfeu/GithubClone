import { MainPageAsync } from './ui/MainPage/MainPage.async.tsx';
import {useRepositoriesStore} from "./model/store/repositoriesStore.ts";
import type {PaginationArgs} from "./model/types/PaginationArgs";

export {
    MainPageAsync as MainPage,
    useRepositoriesStore,
    PaginationArgs
};
