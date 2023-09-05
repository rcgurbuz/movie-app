import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

interface YearSelectProps {
	selectedYear: string | undefined;
	onYearChange: (newYear: string) => void;
}

const YearSelect = ({ selectedYear, onYearChange }: YearSelectProps) => {
	const startYear = 1900;
	const endYear = 2023;
	const years: string[] = [];

	for (let year = startYear; year <= endYear; year++) {
		years.push(year.toString());
	}

	const handleChange = (event: SelectChangeEvent<string>) => {
		const newYear = event.target.value;
		onYearChange(newYear);
	};

	return (
		<div>
			<FormControl>
				<InputLabel>Yıl Seçin</InputLabel>
				<Select value={selectedYear} onChange={handleChange}>
					{years.map(year => (
						<MenuItem key={year} value={year}>
							{year}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default YearSelect;
