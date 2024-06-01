import {country, desiredCountry, chosenCountries} from '../data/countries.js';
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
  document.querySelector('.js-welcome-message').innerHTML = `<div class="faded-background">
  <div class="welcome-box">
    <div class="welcome-title">Welcome to Djibouti - the ultimate geography guessing game!</div>
    <div>How to Play:</div>
    <div>1. Enter a country name to start.</div>
    <div>2. Receive hints based on:</div>
    <ul>
      <li>The starting letter of the country.</li>
      <li>The starting letter of the capital.</li>
      <li>The continent the country is located in.</li>
      <li>Whether the population is higher or lower.</li>
      <li>Whether the area is larger or smaller.</li>
    </ul>
    <div>3. Use the hints to make your next guess.</div>
    <div>4. Continue guessing until you identify the correct country.</div>
    <div>Test your knowledge, sharpen your geography skills, and see how quickly you can guess the right country. Good luck and have fun exploring the world with Djibouti.</div>
    <div style="text-align: center";><button class="get-started-button js-get-started-button">Get Started</button><input class="show-again" type="checkbox" id="showAgain"><label for="showAgain">Don't show this message again.</label></div>
  </div>
</div>`
  document.querySelector('.js-get-started-button').addEventListener('click', () => {
    if (document.getElementById("showAgain").checked) {
      localStorage.setItem('noMessage', true);
    }
    document.querySelector('.faded-background').remove();
  })
}