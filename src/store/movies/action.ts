import { IAction, IMovies, ISearchParams } from './movies.d';
import {
	GET_MOVIES,
	GET_MOVIES_FAIL,
	GET_MOVIES_SUCCESS,
	GET_MOVIE_BY_ID,
	GET_MOVIE_BY_ID_FAIL,
	GET_MOVIE_BY_ID_SUCCESS,
	GET_TOTAL_PAGES,
	SET_SEARCH_PARAMS,
} from './types';

export const getMovies = (searchName: string | undefined, page: number, type: string | undefined, year: string | undefined) => {
	return {
		type: GET_MOVIES,
		payload: { searchName, page, type, year },
	};
};

export const getMoviesSuccess = (movies: IMovies): IAction => {
	return {
		type: GET_MOVIES_SUCCESS,
		payload: movies,
	};
};

export const getMoviesFail = (error: any) => {
	return {
		type: GET_MOVIES_FAIL,
		payload: error,
	};
};

export const getMovieById = (i: string | undefined) => {
	return {
		type: GET_MOVIE_BY_ID,
		payload: { i },
	};
};

export const getMovieByIdSuccess = (selectedMovie: IMovies[]): IAction => {
	return {
		type: GET_MOVIE_BY_ID_SUCCESS,
		payload: selectedMovie,
	};
};

export const getMovieByIdFail = (error: any) => {
	return {
		type: GET_MOVIE_BY_ID_FAIL,
		payload: error,
	};
};

export const getTotalPages = data => {
	return {
		type: GET_TOTAL_PAGES,
		payload: data,
	};
};

export const setSearchParams = (action: ISearchParams) => {
	return {
		type: SET_SEARCH_PARAMS,
		payload: action,
	};
};
