import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, MovieItem, MovieItemText, NotFound, PaginationWrapper } from './styled';
import { NO_IMAGE_URL } from '../../constants';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';
import { getMovies, setSearchParams } from '../../store/movies/action';
import { IMoviesState } from '../../store/movies/movies';
import { RootState } from '../../store/store';
import { StyledHeader } from './styled';
import { Container } from '../../theme/index';
import SearchBox from '../../components/SearchBox';
import YearSelect from '../../components/YearSelect';
import TypeSelect from '../../components/TypeSelect';
import FilterButton from '../../components/FilterButton';
import { SpinnerWrapper } from '../../theme';
import { CircularProgress as Spinner } from '@material-ui/core';

const Home = () => {
	const { movies, totalPages, sarchParams, isLoading } = useSelector<RootState, IMoviesState>((state: RootState) => state?.movies);
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		dispatch(getMovies(sarchParams?.searchTitle, currentPage, sarchParams?.type, sarchParams?.year));
	}, [dispatch, currentPage]);

	const handlePageChange = (event, newPage) => {
		setCurrentPage(newPage);
		window.scroll({ top: 0, left: 0, behavior: 'smooth' });
	};

	const handleSearch = (searchTerm: string) => {
		dispatch(setSearchParams({ searchTitle: searchTerm }));
		setCurrentPage(1);
	};

	const handleTypeChange = (newType: string) => {
		dispatch(setSearchParams({ type: newType }));
	};

	const handleYearChange = (newYear: string) => {
		dispatch(setSearchParams({ year: newYear }));
	};

	const handleFilter = () => {
		dispatch(getMovies(sarchParams?.searchTitle || ' ', 1, sarchParams?.type, sarchParams?.year));
	};

	const handleClear = () => {
		dispatch(setSearchParams({ searchTitle: 'john' }));
		setCurrentPage(1);
		dispatch(getMovies('john', 1, '', ''));
	};

	return (
		<>
			<StyledHeader>
				<Container>Movie App</Container>
				<YearSelect selectedYear={sarchParams?.year} onYearChange={handleYearChange} />
				<TypeSelect selectedType={sarchParams?.type} onTypeChange={handleTypeChange} />
				<SearchBox onSearch={handleSearch} searchTitle={sarchParams?.searchTitle} />
				<FilterButton onClick={handleFilter} label="Filtrele" />
				<FilterButton onClick={handleClear} label="Temizle" />
			</StyledHeader>

			{isLoading ? (
				<SpinnerWrapper>
					<Spinner color={'secondary'} />
				</SpinnerWrapper>
			) : (
				<>
					<Wrapper>
						{movies?.Search?.length > 0 ? (
							movies?.Search.map((item, index) => (
								<MovieItem key={index}>
									<Link to={`/movie/${item?.imdbID}`}>
										<img src={item?.Poster !== 'N/A' ? item?.Poster : NO_IMAGE_URL} alt="movie-poster" />
									</Link>

									<MovieItemText> Name: {item?.Title}</MovieItemText>
									<MovieItemText>Year: {item?.Year}</MovieItemText>
									<MovieItemText>Imdb Id: {item?.imdbID}</MovieItemText>
								</MovieItem>
							))
						) : (
							<NotFound>{movies?.Error}</NotFound>
						)}
					</Wrapper>
					{movies?.Search?.length > 0 && (
						<PaginationWrapper>
							<Pagination count={totalPages} onChange={handlePageChange} color="primary" page={currentPage} />{' '}
						</PaginationWrapper>
					)}
				</>
			)}
		</>
	);
};

export default Home;
