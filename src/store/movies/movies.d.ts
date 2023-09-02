export interface IMoviesState {
	movies: IMovies;
	selectedMovie: ISelectedMovie | undefined;
	isLoading: boolean;
	error?: string;
	totalPages: number;
}

export interface IMovies {
	Search: IMovieDetail[];
	Response: string;
	totalResults?: string;
	Error?: string;
}

export interface IMovieDetail {
	Poster: string;
	Title: string;
	Type: string;
	Year: string;
	imdbID: string;
}

export interface ISelectedMovie {
	Title: string;
	Year: string;
	Rated: string;
	Released: string;
	Runtime: string;
	Genre: string;
	Director: string;
	Writer: string;
	Actors: string;
	Plot: string;
	Language: string;
	Country: string;
	Awards: string;
	Poster: string;
	Ratings: [
		{
			Source: string;
			Value: string;
		},
		{
			Source: string;
			Value: string;
		},
		{
			Source: string;
			Value: string;
		},
	];
	Metascore: string;
	imdbRating: string;
	imdbVotes: string;
	imdbID: string;
	Type: string;
	DVD: string;
	BoxOffice: string;
	Production: string;
	Website: string;
	Response: string;
}

export interface IAction {
	type: string;
	payload?: any;
	error?: boolean;
	meta?: any;
	page?: number;
	searchName?: string;
	year?: string;
	i?: string;
}
