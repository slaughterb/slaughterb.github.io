
import { styled, Box, Stack, Link, Divier } from '@mui/material';
import GithubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { StyleConstants } from '../../styles/StyleConstants.tsx';
import Contact from '../../data/Contact.json';

const FooterContainer = styled(Box)(({ theme }) => ({
	width: "100%",
	height: 150,
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	backgroundColor: StyleConstants.FOOTER,
	bottom: 0,
	zIndex: 1,
	fontWeight: 600,
	"& .mail": {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 8,
		minWidth: 330,
		"& svg": {
			paddingRight: 12,
			fontSize: 32,
		},
	},
	"& .links": {
		display: "flex",
		padding: 6,
		width: 350,
		justifyContent: "space-between",
		"& svg": {
			paddingRight: 12,
			fontSize: 32,
		},
	},
	"& .divider": {
		width: 100,
		height: 10,
		borderTop: '1px solid rgba(0,0,0,0.2)',
	},
	"& .signature": {
		opacity: 0.8,
		fontSize: 12,
		padding: "0 0 5px",
		"& a": {
			textDecoration: "none",
			color: StyleConstants.BLACK_COLOR,
			"&:hover": {
				color: StyleConstants.HEADER,
			}
		},
	},
	"& .actions": {
		padding: 5,
		"& button": {
			marginRight: 6,
		},
	},
	"& .contact-email": {
		marginLeft: "10px",
		color: "darkblue",
	},
	"& .github-container": {
		margin: "0 auto",
	},
	"& .git-icon": {
		transform: "scale(1.1)",
		position: "relative",
		top: "8px",
		left: "10px",
	},
	[theme.breakpoints.down("sm")]: {
		fontSize: 14,
	},
}));



export const Footer = () => {
	const { emailAddress='', github='' } = Contact;

	return (
		<FooterContainer>
			<Box className="mail">
				<EmailIcon /> <span>{emailAddress}</span>
				<div className="contact-email" onClick={(e) => {window.location.href ='mailto:{emailAddress}';}}>Write an Email! </div>
			</Box>
			<Box className="links">
				{github && (
					<div className="github-container">
						<Link href={github} target="_blank" style={{ color: StyleConstants.BLACK_COLOR }}>
							<span>Check out my GitHub here!</span><GithubIcon className="git-icon"></GithubIcon>
						</Link>
					</div>
				)}
			</Box>
			<Box className="divider" />
			<Box className="signature">
				<span>Brian S. Online Portfolio, {(new Date().getFullYear())}, Designed with ReactJS</span>
			</Box>
		</FooterContainer>
	);
};