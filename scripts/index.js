import {country, desiredCountry, chosenCountries} from '../data/countries.js';
import { welcomeMessage } from './renderHTML.js';
import {isMobile} from './utils/mobileCheck.js';

function renderHTML() {
  if (!isMobile.any()) {
    let userChoiceHTML = `<input class="user-input" list="countries" placeholder="Select a country" id="country-choice" name="country-choice"/>
    <datalist id="countries">`;
    country.forEach((currentCountry) => {
      userChoiceHTML += `<option value="${currentCountry.name}"></option>`
    })
    userChoiceHTML += `</datalist>
    <button class="user-submit js-user-submit">Submit</button>`;
    document.querySelector('.js-user-choice').innerHTML = userChoiceHTML;

    document.querySelector('.js-user-submit').addEventListener('click', () => {
      const chosenValue = document.getElementById('country-choice').value;
      if (chosenValue === desiredCountry.name) {
        desiredCountry.generateHTML(desiredCountry);
        document.querySelector('.js-user-choice').innerHTML = '';
        document.querySelector('.js-endgame').innerHTML = `<div class="congrats-message">Congrats! You found the country in ${chosenCountries.length + 1} attempts.</div>`;
        setTimeout(() => {
          document.querySelector('.js-endgame').insertAdjacentHTML('beforeend', '<div class="organize-button"><button class="reset-button js-reset-button">Reset</button></div>');
          document.querySelector('.js-reset-button').addEventListener('click', () => {
            chosenCountries.length = 0;
            document.querySelector('.js-endgame').innerHTML = '';
            renderHTML();
          });
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
  } else {
    let userChoiceHTML = `<select class="user-input" list="countries" id="country-choice" name="country-choice"/>
    <datalist id="countries">`;
    country.forEach((currentCountry) => {
      userChoiceHTML += `<option value="${currentCountry.name}">${currentCountry.name}</option>`
    })
    userChoiceHTML += `</select>
    <button class="user-submit js-user-submit">Submit</button>`;
    document.querySelector('.js-user-choice').innerHTML = userChoiceHTML;

    document.querySelector('.js-user-submit').addEventListener('click', () => {
      const chosenValue = document.getElementById('country-choice').value;
      if (chosenValue === desiredCountry.name) {
        desiredCountry.generateHTML(desiredCountry);
        document.querySelector('.js-user-choice').innerHTML = '';
        document.querySelector('.js-endgame').innerHTML = `<div class="congrats-message">Congrats! You found the country in ${chosenCountries.length + 1} attempts.</div>`;
        setTimeout(() => {
          document.querySelector('.js-endgame').insertAdjacentHTML('beforeend', '<div class="organize-button"><button class="reset-button js-reset-button">Reset</button></div>');
          document.querySelector('.js-reset-button').addEventListener('click', () => {
            chosenCountries.length = 0;
            document.querySelector('.js-endgame').innerHTML = '';
            renderHTML();
          });
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
  }

  document.querySelector('.js-country-grid').innerHTML = `<div></div>
  <div class="column-heading">Country</div>
  <div class="column-heading">Capital</div>
  <div class="column-heading">Continent</div>
  <div class="column-heading">Population</div>
  <div class="column-heading">Area</div>`
}

renderHTML();
const noMessage = localStorage.getItem('noMessage');
if (!noMessage) {
  welcomeMessage();
}