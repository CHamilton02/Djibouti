import {country} from '../data/countries.js';
import {userSubmit} from './buttonFunctions.js';

export function welcomeMessage() {
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
  });
};

export function headers() {
  document.querySelector('.js-country-grid').innerHTML = `<div></div>
  <div class="column-heading">Country</div>
  <div class="column-heading">Capital</div>
  <div class="column-heading">Continent</div>
  <div class="column-heading">Population</div>
  <div class="column-heading">Area</div>`
};

export function generateUserChoiceComputer() {
  let userChoiceHTML = `<input class="user-input" list="countries" placeholder="Select a country" id="country-choice" name="country-choice"/>
    <datalist id="countries">`;
    country.forEach((currentCountry) => {
      userChoiceHTML += `<option value="${currentCountry.name}"></option>`
    })
    userChoiceHTML += `</datalist>
    <button class="user-submit js-user-submit">Submit</button>
    <button class="user-clear">Clear</buttton>`;
    document.querySelector('.js-user-choice').innerHTML = userChoiceHTML;
    userSubmit();
};

export function generateUserChoiceMobile() {
  let userChoiceHTML = `<select class="user-input" list="countries" id="country-choice" name="country-choice"/>
    <datalist id="countries">`;
    country.forEach((currentCountry) => {
      userChoiceHTML += `<option value="${currentCountry.name}">${currentCountry.name}</option>`
    })
    userChoiceHTML += `</select>
    <button class="user-submit js-user-submit">Submit</button>`;
    document.querySelector('.js-user-choice').innerHTML = userChoiceHTML;
    userSubmit();
};

