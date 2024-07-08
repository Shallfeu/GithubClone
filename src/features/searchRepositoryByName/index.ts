import { searchMovieReducer } from './model/slice/searchMovie';
import {SearchInput} from './ui/SearchInput/SearchInput';

export {
    SearchInput,
    searchMovieReducer,
};

export type {
    SearchMovieByNameSchema,
} from './model/types/searchMovieByNameSchema';