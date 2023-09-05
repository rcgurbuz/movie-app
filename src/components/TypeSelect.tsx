import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface TypeSelectProps {
	selectedType: string | undefined;
	onTypeChange: (newType: string) => void;
}

const TypeSelect: React.FC<TypeSelectProps> = ({ selectedType, onTypeChange }) => {
	const mediaTypes = [
		{ value: 'movie', label: 'Film' },
		{ value: 'series', label: 'Dizi' },
		{ value: 'episode', label: 'Bölüm' },
	];

	const handleChange = (event: SelectChangeEvent<string>) => {
		const newMediaType = event.target.value;
		onTypeChange(newMediaType);
	};

	return (
		<div>
			<FormControl>
				<InputLabel>Medya Türünü Seçin</InputLabel>
				<Select value={selectedType} onChange={handleChange}>
					{mediaTypes.map(mediaType => (
						<MenuItem key={mediaType.value} value={mediaType.value}>
							{mediaType.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default TypeSelect;
