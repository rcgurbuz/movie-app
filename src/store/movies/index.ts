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
import { IAction, IMoviesState } from './movies';

const initalState: IMoviesState = {
	movies: {
		Search: [],
		Response: '',
	},
	selectedMovie: undefined,
	isLoading: false,
	error: undefined,
	totalPages: 0,
	sarchParams: { searchTitle: 'john' },
};

export default function rootReducer(state = initalState, action: IAction) {
	switch (action.type) {
		case GET_MOVIES:
		case GET_MOVIE_BY_ID:
			return {
				...state,
				isLoading: true,
			};
		case GET_MOVIES_SUCCESS:
			return {
				...state,
				isLoading: false,
				movies: action.payload,
			};
		case GET_MOVIE_BY_ID_SUCCESS:
			return {
				...state,
				isLoading: false,
				selectedMovie: action.payload,
			};
		case GET_MOVIES_FAIL:
		case GET_MOVIE_BY_ID_FAIL:
			return {
				...state,
				isLoading: false,
			};
		case GET_TOTAL_PAGES:
			return {
				...state,
				isLoading: false,
				totalPages: action.payload,
			};
		case SET_SEARCH_PARAMS:
			return {
				...state,
				isLoading: false,
				sarchParams: { ...state.sarchParams, ...action.payload },
			};
		default:
			return state;
	}
}
