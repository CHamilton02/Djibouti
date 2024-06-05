import {renderHTML} from './index.js';
import {generateNewCountry, desiredCountry, chosenCountries, country} from '../data/countries.js';

function handleSubmit() {
  const chosenValue= document.getElementById('country-choice').value.toUpperCase();
    if (chosenValue === desiredCountry.name.toUpperCase()) {
      desiredCountry.generateHTML(desiredCountry);
      document.querySelector('.js-user-clear').removeEventListener('click', handleClear);
      document.querySelector('.js-user-submit').removeEventListener('click', handleSubmit);
      document.querySelector('.js-endgame').innerHTML = `<div class="congrats-message">Congrats! You found the country in ${chosenCountries.length + 1} attempts.</div>`;
      setTimeout(() => {
        document.querySelector('.js-endgame').insertAdjacentHTML('beforeend', '<div class="organize-button"><button class="reset-button js-reset-button">Reset</button></div>');
        userReset();
      }, 2000);
    } else if (!chosenCountries.includes(chosenValue)) {
      chosenCountries.push(chosenValue);
      country.forEach((chosenCountry) => {
        if (chosenValue === chosenCountry.name.toUpperCase()) {
          chosenCountry.generateHTML(desiredCountry);
        }
      });
      document.getElementById('country-choice').value = '';
    } else {
      document.getElementById('country-choice').value = '';
    }
};

function handleClear() {
  document.getElementById('country-choice').value = '';
};

function handleReset() {
  chosenCountries.length = 0;
  document.querySelector('.js-endgame').innerHTML = '';
  generateNewCountry();
  renderHTML();
}

export function userSubmit() {
  document.querySelector('.js-user-submit').addEventListener('click', handleSubmit);
};

export function userReset() {
  document.querySelector('.js-reset-button').addEventListener('click', handleReset);
};

export function userClear() {
  document.querySelector('.js-user-clear').addEventListener('click', handleClear);
};