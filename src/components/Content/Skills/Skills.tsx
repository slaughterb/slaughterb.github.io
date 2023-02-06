
import { useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { TitleWrapper, TitleHeader, SectionWrapper } from '../../../styles/sectionStyles.tsx';
import { SkillList } from './SkillList.tsx';

import Skills from '../../../data/Skills.json';

export const SkillsContainer = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<SectionWrapper>
			<TitleWrapper><TitleHeader>SKILLS</TitleHeader></TitleWrapper>
			<Box>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						<SkillList type="frontendSkills" skills={Skills.frontendSkills} />
					</Grid>
					<Grid item xs={12} md={6}>
						<SkillList type="backendSkills" skills={Skills.backendSkills} />
					</Grid>
				</Grid>
			</Box>
		</SectionWrapper>
	);
};