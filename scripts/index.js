import {generateNewCountry} from '../data/countries.js';
import {welcomeMessage, headers, generateUserChoiceComputer, generateUserChoiceMobile} from './renderHTML.js';
import {isMobile} from './utils/mobileCheck.js';

export function renderHTML() {
  if (!isMobile.any()) {
    generateUserChoiceComputer();
  } else {
    generateUserChoiceMobile();
  }

  headers();
}

generateNewCountry();
renderHTML();
const noMessage = localStorage.getItem('noMessage');
if (!noMessage) {
  welcomeMessage();
}