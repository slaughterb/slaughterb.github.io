import { styled, Box, Button } from '@mui/material';
import { StyleConstants } from './StyleConstants.tsx';

export const SectionWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	width: 800,
	height: "100%",
	padding: "30px 0",
	borderRadius: "8px",
	boxSizing: "border-box",
	backgroundColor: "#9ce5ff",
	[theme.breakpoints.down("md")]: {
		width: 575,
		padding: "20px 0",
	},
	[theme.breakpoints.down("sm")]: {
		width: 370,
		margin: 0,
	},
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
	fontSize: "2em",
	paddingBottom: 50,
	fontWeight: 600,
	[theme.breakpoints.down("md")]: {
		paddingBottom: 25,
	},
}));

export const TitleHeader = styled(Box)(({ theme }) => ({
	textAlign: "center",
	fontWeight: "bold",
	display: "block",
	fontSize: "34px",
	fontFamily: "merriweather",
}));

export const CustomButton = styled(Button)(() => ({
	color: StyleConstants.BLACK_COLOR,
	textTransform: "capitalize",
	fontWeight: 500,
	height: 35,
	borderWidth: 1,
	borderStyle: "solid",
	borderColor: StyleConstants.BLACK_COLOR,

	"& a": {
		color: "inherit",
		textDecoration: "none",
	},
	"&:hover": {
		backgroundColor: StyleConstants.HEADER
	},
}));

export const CustomButtonFooter = styled(Button)(() => ({
	backgroundColor: "rgba(0,0,0,0.8)",
	borderWidth: 1,
	borderStyle: "solid",
	borderColor: StyleConstants.BLACK_COLOR,
	color: StyleConstants.WHITE_COLOR,
	height: 20,
	fontSize: 12,
	fontWeight: 600,
	textTransform: "capitalize",

	"&:hover": {
		backgroundColor: StyleConstants.HEADER
	},
	"& a": {
		color: "inherit",
		textDecoration: "none",
	},
}));