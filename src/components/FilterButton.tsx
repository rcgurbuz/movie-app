import React from 'react';
import Button from '@mui/material/Button';

interface FilterButtonProps {
	onClick: () => void;
	label: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ onClick, label }) => {
	return (
		<Button variant="contained" color="primary" onClick={onClick}>
			{label}
		</Button>
	);
};

export default FilterButton;
