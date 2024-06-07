import { useEffect } from 'react';
import { Box } from '@mui/material';
import { SectionWrapper, TitleHeader } from '../../../styles/sectionStyles.tsx';
import Profiles from '../../../data/OnlineLearning.json';
import { OnlineLearning } from './OnlineLearning.tsx';

export const OnlineContent = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<SectionWrapper>
			<TitleHeader>ONLINE LEARNING</TitleHeader>
			<br />
			<br />
			<Box>
				{Profiles.map((profile) => (
					<OnlineLearning profile={profile} key={profile.name} />
				))}
			</Box>
		</SectionWrapper>
	);
};