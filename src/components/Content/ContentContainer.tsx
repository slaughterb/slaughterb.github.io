
import { styled, Box, Grid } from '@mui/material';
import { NavigationList } from './Navigation/Navigation.tsx';

import { SectionsRoot } from './SectionsRoot/SectionsRoot.tsx';

const Wrapper = styled(Box)(({ theme }) => ({
	width: "85%",
	margin: "0 auto",
	display: "flex",
	flex: 1,
	marginTop: 84,
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "center",
	[theme.breakpoints.down("sm")]: {
		width: "92%"
	},
}));

export const ContentContainer = () => {
	return (
		<Wrapper>
			<NavigationList />
			<SectionsRoot />
		</Wrapper>
	);
};