
import { Box, styled } from '@mui/material';
import { SectionWrapper, TitleHeader } from '../../../styles/sectionStyles.tsx';
import Exp from './Exp.tsx';
import ExperienceList from '../../../data/Experience.json';
import { logo } from '../../../data/Constants.tsx';

const ExperienceWrapper = styled(Box)(() => ({}));

const CompanyLogos = styled(Box)(() => ({
	"& img": {
		width: 145,
		height: 125,
		margin: 10,
		borderRadius: 5,
	},
	"& img:hover": {
		opacity: 0.8,
	}
}));

const ExperienceContainer = () => {
	return (
		<SectionWrapper>
			<TitleHeader>Experience</TitleHeader>
			<br />
			<br />
			<ExperienceWrapper>
				{ExperienceList.map((exp, ind) => (
					<Exp experience={exp} key={ind} />
				))}
			</ExperienceWrapper>
			<CompanyLogos>
				<h3>Some Sample Designs: </h3>
				<a href="https://thedirtycookieoc.com" target="_blank"><img src={logo.tdc} /></a>
				<a href="https://wyrwear.com" target="_blank"><img src={logo.wyrwear} /></a>
				<a href={logo.fppLanding} target="_blank"><img src={logo.fpp} /></a>
			</CompanyLogos>
		</SectionWrapper>
	);
};

export default ExperienceContainer;