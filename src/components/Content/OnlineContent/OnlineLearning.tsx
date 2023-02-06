
import { Box, styled, Button } from '@mui/material';
import { CustomButton } from '../../../styles/sectionStyles.tsx';
import { StyleConstants } from '../../../styles/StyleConstants.tsx';

const OnlineProfileWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	justifyContent: "space-between",
	marginBottom: StyleConstants.SPACE_BETWEEN_SECTIONS,
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
}));

const InfoWrapper = styled(Box)(() => ({
	paddingRight: 15,
	lineHeight: 1.53,
	"& .name": {
		marginBottom: 15,
		fontSize: StyleConstants.SIZE_ITEM_TITLE,
	},
	" &.actions": {
		margin: "12px 0",
	},
}));

const ImageBox = styled(Box)(({ theme }) => ({
	marginRight: 10,
	width: 400,
	minHeight: 250,
	border: "1px solid black",
	"& img": {
		width: 400,
	},
	[theme.breakpoints.down("sm")]: {
		width: 350,
		"& img": {
			width: 350
		},
	},
}));

interface profile {
	name?: string;
	org?: string;
	orgUrl?: string;
	url?: string;
}

interface Prop {
	profile: profile;
}

export const OnlineLearning = ({ profile }: Prop) => {
	const {
		name = "",
		orgUrl = "",
		urlImage = "",
		description = "",
	} = profile;

	return (
		<OnlineProfileWrapper>
			<InfoWrapper>
				<div className="name bold">{name}</div>
				<div className="actions">
					<CustomButton>
						<a href={orgUrl} target="_blank" rel="noreferrer">
							My Activity
						</a>
					</CustomButton>
				</div>
				<div>
					<b>Description: </b> {description}
				</div>
			</InfoWrapper>
			<ImageBox>
				<img src={urlImage} alt="profile" />
			</ImageBox>
		</OnlineProfileWrapper>
	);
};
