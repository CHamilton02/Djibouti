import {renderHTML} from './index.js';
import {generateNewCountry, desiredCountry, chosenCountries, country} from '../data/countries.js';

export function userSubmit() {
  document.querySelector('.js-user-submit').addEventListener('click', () => {
    const chosenValue = document.getElementById('country-choice').value;
    if (chosenValue === desiredCountry.name) {
      desiredCountry.generateHTML(desiredCountry);
      document.querySelector('.js-user-choice').innerHTML = '';
      document.querySelector('.js-endgame').innerHTML = `<div class="congrats-message">Congrats! You found the country in ${chosenCountries.length + 1} attempts.</div>`;
      setTimeout(() => {
        document.querySelector('.js-endgame').insertAdjacentHTML('beforeend', '<div class="organize-button"><button class="reset-button js-reset-button">Reset</button></div>');
        userReset();
      }, 2000);
    } else if (!chosenCountries.includes(chosenValue)) {
      chosenCountries.push(chosenValue);
      country.forEach((chosenCountry) => {
        if (chosenValue === chosenCountry.name) {
          chosenCountry.generateHTML(desiredCountry);
        }
      });
      document.getElementById('country-choice').value = '';
    } else {
      document.getElementById('country-choice').value = '';
    }
  });
};

export function userReset() {
  document.querySelector('.js-reset-button').addEventListener('click', () => {
    chosenCountries.length = 0;
    document.querySelector('.js-endgame').innerHTML = '';
    generateNewCountry();
    renderHTML();
  });
}