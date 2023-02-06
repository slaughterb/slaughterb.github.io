
import { styled, Box } from '@mui/material';
import { Constants } from '../../data/Constants.tsx';
import { StyleConstants } from '../../styles/StyleConstants.tsx';

const IntroductionContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  height: 84,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: StyleConstants.HEADER,
  top: 0,
  fontSize: "2em",
  zIndex: 1,
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.45em",
  },
  "& .header-tagline": {
    fontFamily: "merriweather", 
    color: "white",
    textAlign: "center",
  }
}));

export const Header = () => {
  return (
    <IntroductionContainer>
      <div className="header-tagline">Hi, I'm {Constants.NAME}. Welcome to my online portfolio!</div>
    </IntroductionContainer>
  );
};