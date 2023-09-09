import React, { FC, useEffect } from 'react';
import { ContentCard, ItemTitle, MovieDetailWrapper, MovieInfo, Item } from './styled';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieById } from '../../store/movies/action';
import { RootState } from '../../store/store';
import { IMoviesState } from '../../store/movies/movies';
import { NO_IMAGE_URL } from '../../constants';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CircularProgress as Spinner } from '@material-ui/core';
import { SpinnerWrapper } from '../../theme';

const MovieItem = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { selectedMovie, isLoading } = useSelector<RootState, IMoviesState>((state: RootState) => state?.movies);

	useEffect(() => {
		dispatch(getMovieById(id));
	}, [dispatch]);

	const handleClick = () => {
		navigate(-1);
	};

	return (
		<>
			{isLoading ? (
				<SpinnerWrapper>
					<Spinner color={'secondary'} />
				</SpinnerWrapper>
			) : (
				<ContentCard>
					<ItemTitle>
						<ArrowBackIcon onClick={handleClick} /> Movie Details
					</ItemTitle>
					<MovieDetailWrapper>
						<img src={selectedMovie?.Poster !== 'N/A' ? selectedMovie?.Poster : NO_IMAGE_URL} alt="selected-movie-poster" />
						<MovieInfo>
							<Item>Title: {selectedMovie?.Title}</Item>
							<Item>IMDB Rating: {selectedMovie?.imdbRating}</Item>
							<Item>Actors: {selectedMovie?.Actors}</Item>
							<Item>Year: {selectedMovie?.Year}</Item>
							<Item>Director: {selectedMovie?.Director}</Item>
							<Item>BoxOffice: {selectedMovie?.BoxOffice}</Item>
							<Item>Runtime: {selectedMovie?.Runtime}</Item>
							<Item>Awards: {selectedMovie?.Awards}</Item>
							<Item>Plot: {selectedMovie?.Plot}</Item>
						</MovieInfo>
					</MovieDetailWrapper>
				</ContentCard>
			)}
		</>
	);
};

export default MovieItem;
