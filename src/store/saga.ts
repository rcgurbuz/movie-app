import { takeLatest } from 'redux-saga/effects';
import { handleGetMovieById, handleGetMovies } from './movies/saga';
import { GET_MOVIES, GET_MOVIE_BY_ID } from './movies/types';

export function* watchHome() {
	yield takeLatest(GET_MOVIES, handleGetMovies);
	yield takeLatest(GET_MOVIE_BY_ID, handleGetMovieById);
}
