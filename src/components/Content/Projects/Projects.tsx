
import { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { TitleWrapper, SectionWrapper, TitleHeader } from '../../../styles/sectionStyles.tsx';
import { Project } from './Project.tsx';
import { v4 as uuidv4 } from 'uuid';

import projects from '../../../data/Projects.json';

export const ProjectsContainer = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<SectionWrapper>
			<TitleHeader>Projects</TitleHeader>
			<br />
			<br />
			<Box>
				{projects.map((project, ind) => (
					<Project project={project} key={uuidv4()} />
				))}
			</Box>
		</SectionWrapper>
	);
};