import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

//reducers
import movieReducer from './movies';

//saga watch
import { watchHome } from './saga';

//merge reducer with combineReducers()
const rootReducer = combineReducers({
	movies: movieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const sagaMiddleware = createSagaMiddleware();

//global store for app

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(watchHome);

export default store;
