
import { Box, styled } from '@mui/material';
import { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../../../store/types.tsx';
import { setCurrentSection } from './slice/Slice.tsx';
import { sectionImages } from '../utils.tsx';
import { useNavigationSize } from '../../../hooks/useNavigationSize.tsx';
import { StyleConstants } from '../../../styles/StyleConstants.tsx';
import Arrow from '../../../assets/arrow.png';

const NavigationWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: "center",
	backgroundColor: StyleConstants.NAVIGATION_BG,
	padding: "0 20px",
	borderRadius: 12,
	position: "sticky",
	backgroundColor: "rgba(0,0,0,0.05)",
	width: "100%",
	zIndex: 1,
	top: 84,
	"& .nav-section": {
		display: "flex",
		padding: 8,
		flexDirection: "column",

		"&:hover": {
			transform: "scale(1.1)",
		},
	},
	"& .section-name": {
		display: "flex",
		justifyContent: "center",
		width: 84, 
		fontSize: 12,
		borderRadius: 10,
	},
	"& .nav-item": {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		borderStyle: "solid",
		borderColor: StyleConstants.SECTION_BORDER,
		borderRadius: "50%",
		borderWidth: 2,

		"& img": {
			height: 75, 
			width: 75,
		},
	},
	"& .arrow": {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		margin: "10px 0 0 0",
		height: 65,
		width: 72,
		padding: 5,
		borderRadius: "50%",
		transform: "rotate(271deg)",

		"& img": {
			width: 58,
			height: 58,
		},
	},
	"& .before": {
		transform: "rotate(90deg)",
	},
	"& .active .nav-item": {
		backgroundColor: StyleConstants.ACTIVE_SECTION,
	},
	"& .active .section-name": {
		backgroundColor: StyleConstants.ACTIVE_SECTION,
	},
	"& .disabled": {
		opacity: "0.2",
		pointerEvents: "none"
	},
	[theme.breakpoints.down("md")]: {
		justifyContent: "center",
		padding: 8,

		"& .nav-section": {
			padding: "0 3px",
		},
	},
}));

export const NavigationList = () => {
	const dispatch = useDispatch();
	const sections = useSelector((state: IRootState) => state.sections?.sections) || [];

	const selectedSection = useSelector((state: IRootState) => state.sections?.currentSection) || '';

	const filteredSections = sections.filter((section) => !section?.hide);

	const [start, setStart] = useState(0);
	const limit = useNavigationSize();

	return (
		<NavigationWrapper>
			{limit && filteredSections.length && (
				<Box className={`arrow before ${start === 0 && 'disabled'}`}
					onClick={() => setStart((val) => val - 1)}>
					<img src={Arrow} />
				</Box>
			)}
			{filteredSections.slice(start, start + limit).map((section) => (
				<Box key={section.key} className={`nav-section ${selectedSection === section.key && 'active'}`}>
					<Box className="nav-item" onClick={() => dispatch(setCurrentSection(section.key))}>
						<img src={sectionImages[section.key]} alt={section.key} />
					</Box>
					<div className="section-name">{section.name}</div>
				</Box>
			))}
			{limit < filteredSections.length && (
				<Box className={`arrow after ${start === filteredSections.length - limit && 'disabled'}`}
					onClick={() => setStart((val) => val + 1)}>
					<img src={Arrow} />
				</Box>
			)}
		</NavigationWrapper>
	);
};
