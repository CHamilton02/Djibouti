import {country, desiredCountry, chosenCountries} from '../data/countries.js';


function renderHTML() {
  let gameHTML = '';
  if (!chosenCountries.includes(desiredCountry.name)) {
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
      chosenCountries.push(chosenValue);
      renderHTML();
    });
  } else {
    document.querySelector('.js-user-choice').innerHTML = '';
    document.querySelector('.js-endgame').innerHTML = `Congrats! You found the country in ${chosenCountries.length} attempts.`;
  }

  gameHTML += `<div></div>
  <div class="column-heading">Country</div>
  <div class="column-heading">Capital</div>
  <div class="column-heading">Continent</div>
  <div class="column-heading">Population</div>
  <div class="column-heading">Area</div>`

  chosenCountries.forEach((currentCountry) => {
    country.forEach((chosenCountry) => {
      if (currentCountry === chosenCountry.name) {
        gameHTML += chosenCountry.getHTML(desiredCountry);
      }
    });
  })

  document.querySelector('.js-country-grid').innerHTML = gameHTML;
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
    <div style="text-align: center";><button class="get-started-button js-get-started-button">Get Started</button></div>
  </div>
</div>`
  document.querySelector('.js-get-started-button').addEventListener('click', () => {
    document.querySelector('.faded-background').remove();
    localStorage.setItem('noMessage', true);
  })
}