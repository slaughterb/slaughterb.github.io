import { styled, Box } from '@mui/material';
import MyImage from '../../../assets/profile/backyard-orange-upper.png';
import ExampleRes from '../../../assets/exampleres.pdf';
import Contact from '../../../data/Contact.json';
import EmailIcon from '@mui/icons-material/Email';

import {
	CustomButton,
	SectionWrapper,
	TitleWrapper,
	TitleHeader
} from '../../../styles/sectionStyles.tsx';

import aboutInfo from '../../../data/About.json';
import { useEffect } from 'react';

const AboutContainer = styled(Box)(({ theme }) => ({
	display: "flex",
	alignSelf: "center",
	"& img": {
		width: 400,
		[theme.breakpoints.down("sm")]: {
			width: 350,
		},
	},
	[theme.breakpoints.down("md")]: {
		flexDirection: "column",
	},
}));

const DetailsWrapper = styled(Box)(({ theme }) => ({
	fontSize: 16,
	marginLeft: 15,
	"& .actions": {
		margin: "12px 0",
	},
	[theme.breakpoints.down("md")]: {
		margin: "10px 0 0 0",
	},
}));

export const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { emailAddress } = Contact;

	return (
		<SectionWrapper>
			<TitleHeader>About Me</TitleHeader>
			<br />
			<br />
			<AboutContainer>
				<img src={MyImage} />
				<DetailsWrapper>
					<div>{aboutInfo.aboutMe}</div>
					<div className="actions">
						<CustomButton>
							<a href={"mailto:" + emailAddress} rel="noreferrer" target="_blank">Contact Me</a>
						</CustomButton>
					</div>
				</DetailsWrapper>
			</AboutContainer>
		</SectionWrapper>
	);
};

