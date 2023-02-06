
import { Box, styled } from '@mui/material';
import ProjectImg from '../../../assets/project.jpeg';
import { projectImage } from '../../../data/Constants.tsx';
import { StyleConstants } from '../../../styles/StyleConstants.tsx';
import { CustomButton } from '../../../styles/sectionStyles.tsx';
import { v4 as uuidv4 } from 'uuid';

interface project {
	name?: string;
	description?: string;
	sourceCode?: string;
	demoLink?: string;
	tag: string;
	technologies: string;
}

interface Prop {
	project: project;
}

const InfoWrapper = styled(Box)(() => ({
	"& .name": {
		fontSize: StyleConstants.SIZE_ITEM_TITLE,
	},
	"& .desc": {
		padding: 10,
	},
	"& .actions button": {
		margin: "0 12px 12px 0",
	},
}));

const ProjectWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	marginBottom: StyleConstants.SPACE_BETWEEN_SECTIONS,
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
	borderTop: "1px solid black",
	borderBottom: "1px solid black",
}));

const ImageBox = styled(Box)(({ theme }) => ({
	marginRight: 10,
	width: 400,
	"& img": {
		border: "1px solid black",
		width: 400,
	},
	[theme.breakpoints.down("sm")]: {
		width: 350,
		"& img": {
			width: 350,
		},
	},
}));

export const Project = ({ project }: Prop) => {
	const {
		name = "",
		description = "",
		sourceCode = "",
		demoLink = "",
		tag = "",
		technologies = [],
	} = project;

	return (
		<ProjectWrapper>
			<InfoWrapper>
				<div className="name bold">{name}</div>
				<div className="desc">{description}</div>
				<div className="actions">
					<CustomButton>
						<a href={sourceCode} target="_blank" rel="noreferrer"> View Source Code </a>
					</CustomButton>
					{demoLink && (
						<CustomButton>
							<a href={demoLink} target="_blank" rel="noreferrer">Demo</a>
						</CustomButton>
					)}
				</div>
				<div>Technologies used: </div>
				{technologies.map((tech, i) => (
					<span key={uuidv4()}>| {tech} |</span>
				))}
			</InfoWrapper>
			<ImageBox>
				<img src={projectImage[tag] || ProjectImg} alt="project image" />
			</ImageBox>
		</ProjectWrapper>
	);
};

