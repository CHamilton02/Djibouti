import {countryList} from '../data/chosenCountries.js';
import {country, desiredCountry} from '../data/countries.js';


function renderHTML() {
  let gameHTML = '';
  if (!countryList.countries.includes(desiredCountry.name)) {
    let userChoiceHTML = '<select class="user-input" id="country-choice"><option disabled selected value>Select a country</option>';
    country.forEach((currentCountry) => {
      userChoiceHTML += `<option value="${currentCountry.name}">${currentCountry.name}</option>`
    })
    userChoiceHTML += '</select><button class="user-submit js-user-submit">Submit</button>';
    document.querySelector('.js-user-choice').innerHTML = userChoiceHTML;

    document.querySelector('.js-user-submit').addEventListener('click', () => {
      const chosenValue = document.getElementById('country-choice').value;
      countryList.addCountry(chosenValue);
      renderHTML();
    });
  } else {
    document.querySelector('.js-user-choice').innerHTML = '';
    document.querySelector('.js-endgame').innerHTML = `Congrats! You found the country in ${countryList.countries.length} attempts.`;
  }

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
}

renderHTML();