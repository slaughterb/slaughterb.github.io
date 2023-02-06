import ProjectImg from "../assets/project.jpeg";
import ConnectFourProject from '../assets/project-images/connect4_proj.png';
import CompilersProject from '../assets/project-images/compiler.png';
import ColorPickerProject from '../assets/project-images/colorpicker.png';

import Ebikeskool from "../assets/company-logos/eBikeSkool.png";
import ComingSoon from '../assets/company-logos/comingSoon.png';

import FPP from "../assets/company-logos/fpp.png";
import WYR from "../assets/company-logos/wyrwear.png";
import TDC from "../assets/company-logos/tdc.png";
import HFT from '../assets/company-logos/housefivetrading.png';

import selfIcon from '../assets/company-logos/self.png';
import fppLandingPage from '../assets/fpp_frontpage.png';

import uciLogo from '../assets/edu-logos/uciLogo.png';
import ivcLogo from '../assets/edu-logos/ivcLogo.jpeg';

interface Map {
  [key: string]: string | undefined;
}

// google : Google
// google - company name mentioned in Experience.json (lower cased)
// Google - imported nam
export const logo: Map = {
  fpp: FPP,
  wyrwear: WYR,
  tdc: TDC,
  ebikeskool: Ebikeskool,
  undisclosed: ComingSoon,
  housefivetrading: HFT,
  self: selfIcon,
  fppLanding: fppLandingPage
};

export const educationLogos: Map = {
  uci: uciLogo,
  ivc: ivcLogo
};

export enum Constants {
  NAME = "Brian",
}

// "project name 1": ProjectImg
// "project name 1" - project name mentioned in Projects.json (lower cased)
// ProjectImg - imported name 
export const projectImage: Map = {
  "connectfour": ConnectFourProject,
  "compiler": CompilersProject,
  "colorpicker": ColorPickerProject
};