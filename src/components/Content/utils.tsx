
import Person from '../../assets/homeIcon.png';
import Education from '../../assets/education.png';
import Skills from '../../assets/skills.png';
import Experience from '../../assets/experience.png';
import Projects from '../../assets/idea.png';
import OnlineIcon from '../../assets/onlineIcon.png';
import Contact from '../../assets/contact.png';

import ExperienceContainer from './Experience/Experience.tsx';
import { About } from './About/About.tsx';
import { ProjectsContainer } from './Projects/Projects.tsx';
import { EducationContainer } from './Education/Education.tsx';
import { SkillsContainer } from './Skills/Skills.tsx';
import { OnlineContent} from './OnlineContent/OnlineContent.tsx';

interface SectionImages {
	[key: string]: string | undefined;
}

interface SectionsInfo {
	[key: string]: any | undefined;
}

export const sectionsInfo: SectionsInfo = {
	about: { src: Person, component: <About /> },
	experience: { src: Experience, component: <ExperienceContainer /> },
	projects: { src: Projects, component: <ProjectsContainer /> },
	education: { src: Projects, component: <EducationContainer /> },
	skills: { src: Skills, component: <SkillsContainer /> },
	onlinecontent: {
		src: OnlineIcon,
		component: <OnlineContent />
	},
};

export const sectionImages: SectionImages = {
	about: Person,
	experience: Experience,
	projects: Projects,
	education: Education,
	skills: Skills,
	onlinecontent: OnlineIcon,
};