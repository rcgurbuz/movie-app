import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface TypeSelectProps {
	selectedType: string | undefined;
	onTypeChange: (newType: string) => void;
}

const TypeSelect = ({ selectedType, onTypeChange }: TypeSelectProps) => {
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
	);
};

export default TypeSelect;
