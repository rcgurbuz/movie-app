import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBoxProps {
	onSearch: (searchTerm: string) => void;
	searchTitle?: string;
}

const SearchBox = ({ onSearch, searchTitle }: SearchBoxProps) => {
	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newSearchTerm = event.target.value;
		onSearch(newSearchTerm);
	};

	return (
		<TextField
			autoComplete="off"
			variant="outlined"
			fullWidth
			placeholder="Search..."
			value={searchTitle}
			onChange={handleSearch}
			InputProps={{
				startAdornment: <SearchIcon />,
			}}
		/>
	);
};

export default SearchBox;
