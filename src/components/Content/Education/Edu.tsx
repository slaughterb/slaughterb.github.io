
import { clsx } from 'clsx';
import { Box, styled } from '@mui/material';
import { StyleConstants } from '../../../styles/StyleConstants.tsx';
import { educationLogos } from '../../../data/Constants.tsx';

interface Edu {
	name?: string;
	course?: string;
	location?: string;
	span?: string;
	specialization?: string;
	score?: string;
}

interface Prop {
	education: Edu;
	ind: number;
}

const EduWrapper = styled(Box)(( { theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: 20,
	"& .eduLogo": {
		width: 130,
		height: 130
	},
	"&.reverse": {
		flexDirection: "row-reverse",
	},
	"& .span": {
		height: 100,
		width: 100,
		borderWidth: 1,
		borderColor: StyleConstants.BLACK,
		background: StyleConstants.EDUCATION_BG,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontWeight: 600,
		borderRadius: "50%"
	},
	"& .connector": {
		background: "black",
		height: 1,
		flexGrow: 1,
	},
	"& .description": {
		border: "1px solid black",
		background: StyleConstants.EDUCATION_BG,
		padding: 15,
		width: 450,
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			padding: 0,
			"&.reverse": {
				flexDriection: "column",
			}
		},
	},
}));

export const Edu = ({ education, ind }: Prop) => {
	return (
		<EduWrapper className={clsx({ reverse: ind % 2 !== 0})}>
			<div className="span">{education.span}</div>
			<img className="eduLogo" src={educationLogos[education.abbrev]} />
			<div className="connector"></div>
			<div className="description">
				<div>{education.name}</div>
				<div>{education.location}</div>
				<div>
					{education.course}
					{education.specialization && ` - ${education.specialization}`}
				</div>
				<div>{education.score}</div>
			</div>
		</EduWrapper>
	);
};


