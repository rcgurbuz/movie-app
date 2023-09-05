import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { theme, GlobalStyle } from './theme';
import { ThemeProvider } from 'styled-components';
import Home from './views/Home';
import React from 'react';
import MovieItem from './views/MovieItem';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
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
