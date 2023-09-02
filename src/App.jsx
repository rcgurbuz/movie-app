import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { theme, GlobalStyle, SpinnerWrapper } from './theme';
import { CircularProgress as Spinner } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import Home from './views/Home';
import React from 'react';
import MovieItem from './views/MovieItem';
import { useSelector } from 'react-redux';

function App() {
	const { isLoading } = useSelector(state => state?.movies);

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				{isLoading && (
					<SpinnerWrapper>
						<Spinner />
					</SpinnerWrapper>
				)}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie/:id" element={<MovieItem />} />
				</Routes>
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
