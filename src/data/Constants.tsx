import ProjectImg from "../assets/project.jpeg";
import ConnectFourProject from '../assets/project-images/connect4_proj.png';
import CompilersProject from '../assets/project-images/compiler.png';
import StockScreenerProject from '../assets/project-images/stockscreener.png';
import AlgoVisualizer from '../assets/project-images/visualizer.png';
import ReactCards from '../assets/project-images/reactcards.png';

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

import htmlLogo from '../assets/skill-logos/html.png';
import cssLogo from '../assets/skill-logos/css.png';
import javascriptLogo from '../assets/skill-logos/javascript.png';
import reactLogo from '../assets/skill-logos/react.png';
import nodeLogo from '../assets/skill-logos/node.png';
import apiLogo from '../assets/skill-logos/apis.png';
import apexChartsLogo from '../assets/skill-logos/apexcharts.png';
import materialuiLogo from '../assets/skill-logos/materialui.png';
import jsxLogo from '../assets/skill-logos/jsx.png';
import javaLogo from '../assets/skill-logos/java.png';
import swingLogo from '../assets/skill-logos/swing.png';


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

export const skillLogos: Map = {
  "html": htmlLogo,
  "css": cssLogo,
  "javascript": javascriptLogo,
  "react": reactLogo,
  "node": nodeLogo,
  "apexcharts": apexChartsLogo,
  "apis": apiLogo,
  "materialui": materialuiLogo,
  "jsx": jsxLogo,
  "java": javaLogo,
  "swing": swingLogo,
}

// "project name 1": ProjectImg
// "project name 1" - project name mentioned in Projects.json (lower cased)
// ProjectImg - imported name 
export const projectImage: Map = {
  "connectfour": ConnectFourProject,
  "compiler": CompilersProject,
  "stockscreener": StockScreenerProject,
  "visualizer": AlgoVisualizer,
  "reactcards": ReactCards
};