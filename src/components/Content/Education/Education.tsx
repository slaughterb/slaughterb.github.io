
import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { SectionWrapper, TitleHeader } from '../../../styles/sectionStyles.tsx';
import { Edu } from './Edu.tsx';

import education from '../../../data/Education.json';

import './styles.css';

export const EducationContainer = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<SectionWrapper className="educationSection">
			<TitleHeader>Education</TitleHeader>
			<Box>
				<Grid container spacing={3}>
					{education.map((edu, ind) => (
						<Grid item xs={12} key={ind}>
							<Edu education={edu} ind={ind} />
						</Grid>
					))}
				</Grid>
			</Box>
		</SectionWrapper>
	);
};