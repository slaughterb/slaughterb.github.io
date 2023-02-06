
import { Box, styled } from '@mui/material';
import SoftSkill from '../../../assets/frontendSkills.png';
import HardSkill from '../../../assets/hardSkills.png';
import { StyleConstants } from '../../../styles/StyleConstants.tsx';

interface Prop {
	skills: string[];
	type: string;
}

const SkillListWrapper = styled(Box)(() => ({
	display: "flex",
	position: "relative",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	"& .skillType":  {
		width: "80%",
		textAlign: "center",
		border: "1px solid black",
		background: StyleConstants.SKILLS_BG,
	},
	"& .skillIcon": {
		height: 75,
		width: 75,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		border: "1px solid black",
		borderRadius: "50%",
		position: "absolute",
		background: StyleConstants.SKILLS_BG,
		top: 23,
		"& img": {
			height: 58,
			width: 58,
		},
	},
	"& .skill-icon-image": {
		borderRadius: "8px",
		transform: "scale(0.95)",
	},
	"& .skillsList": {
		display: "flex",
		flexDirection: "column",
		justifyContent: StyleConstants.SKILLS_BG,
		width: 250,
		height: 250,
		marginTop: 78,
		border: "1px solid black",
		background: "#bcd1e3",
		padding: 25,
		"& div": {
			padding: 5,
		},
	},
}));

export const SkillList = ({ type, skills }: Prop) => {
	return (
		<SkillListWrapper>
			<Box className="skillType bold">{`${type === 'frontendSkills' ? 'Frontend' : 'Backend'} Skills`}</Box>
			<Box className="skillIcon">
				<img className="skill-icon-image" src={type === 'frontendSkills' ? SoftSkill : HardSkill} />
			</Box>
			<Box className="skillsList">
				{skills.map((skill, ind) => (
					<div key={ind}>{`• ${skill}`}</div>
				))}
			</Box>
		</SkillListWrapper>
	);
};