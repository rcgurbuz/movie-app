import { call, put } from 'redux-saga/effects';
import { getMovieByIdFail, getMovieByIdSuccess, getMoviesFail, getMoviesSuccess, getTotalPages } from './action';
import { IAction } from './movies';
import axios from 'axios';
import { API_URL, API_KEY } from '../../constants';

export function* handleGetMovies(action: IAction) {
	const { searchName, page, type, year } = action?.payload;

	try {
		const response = yield call(axios.get, API_URL, {
			params: { s: searchName, page, apikey: API_KEY, type, y: year },
		});
		yield put(getMoviesSuccess(response.data));

		yield put(getTotalPages(Math.ceil(response.data.totalResults / 10)));
	} catch (error) {
		yield put(getMoviesFail(error));
	}
}

export function* handleGetMovieById(action: IAction) {
	const { i } = action?.payload;

	try {
		const response = yield call(axios.get, API_URL, {
			params: { i, apikey: API_KEY },
		});

		yield put(getMovieByIdSuccess(response?.data));
	} catch (error) {
		yield put(getMovieByIdFail(error));
	}
}
