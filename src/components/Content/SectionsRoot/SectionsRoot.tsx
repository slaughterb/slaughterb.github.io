import React from 'react';
import { Box, Fade } from '@mui/material';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store/types';
import { sectionsInfo } from '../utils.tsx';

export const SectionsRoot = () => {
	const sections = useSelector((state: IRootState) => state.sections?.sections) || [];
	const selectedSection = useSelector((state: IRootState) => state.sections?.currentSection) || '';

	return (
		<div>
			{sections.map(({ key, name }) => (
				<React.Fragment key={key}>
					{key === selectedSection && (
						<Box key={key} style={{height: "100%", display: "flex"}}>
							<Fade in={key === selectedSection} {...(key === selectedSection ? {timeout: 2000} : {})}
								easing={{ enter: 'linear', exit: 'linear',}}>
								<div>
									{sectionsInfo[key]?.component}
								</div>
							</Fade>
						</Box>
					)}
				</React.Fragment>
			))}
		</div>
	);
};