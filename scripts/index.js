import {countryList} from '../data/chosenCountries.js';
import {country, desiredCountry} from '../data/countries.js';


function renderHTML() {
  let gameHTML = '';
  document.querySelector('.js-user-choice').innerHTML = `<div class="user-choice">
    <select class="user-input" id="country-choice">
      <option disabled selected value>Select a country</option>
      <option value="Canada">Canada</option>
      <option value="USA">USA</option>
      <option value="Italy">Italy</option>
    </select>
    <button class="user-submit js-user-submit">Submit</button>
  </div>`;

  gameHTML += `<div></div>
  <div class="column-heading">Country</div>
  <div class="column-heading">Capital</div>
  <div class="column-heading">Continent</div>
  <div class="column-heading">Population</div>
  <div class="column-heading">Area</div>`

  country.forEach((currentCountry) => {
    if (countryList.countries.includes(currentCountry.name)) {
      gameHTML += currentCountry.getHTML(desiredCountry);
    }
  })

  document.querySelector('.js-country-grid').innerHTML = gameHTML;

  document.querySelector('.js-user-submit').addEventListener('click', () => {
    const chosenValue = document.getElementById('country-choice').value
    countryList.addCountry(chosenValue);
    renderHTML();
  });
}

renderHTML();