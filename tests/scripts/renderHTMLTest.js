import {welcomeMessage, headers} from '../../scripts/renderHTML.js';

function normalizeString(str) {
  return str.replace(/\s+/g, ' ').trim();
}

describe('test suite: Render HTML', () => {
  it('creates welcome message', () => {
    localStorage.clear();
    welcomeMessage();
    const actualHTML = normalizeString(document.querySelector('.js-welcome-message').innerHTML);
    const expectedHTML = normalizeString(`<div class="faded-background">
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
        <div style="text-align: center" ;=""><button class="get-started-button js-get-started-button">Get Started</button><input class="show-again" type="checkbox" id="showAgain"><label for="showAgain">Don't show this message again.</label></div>
      </div>
    </div>`)
    expect(actualHTML).toMatch(expectedHTML);
    document.querySelector('.js-welcome-message').innerHTML = '';
  });

  it('creates headers', () => {
    headers();
    const actualHTML = normalizeString(document.querySelector('.js-country-grid').innerHTML);
    const expectedHTML = normalizeString(`<div></div>
    <div class="column-heading">Country</div>
    <div class="column-heading">Capital</div>
    <div class="column-heading">Continent</div>
    <div class="column-heading">Population</div>
    <div class="column-heading">Area</div>`);
    expect(actualHTML).toMatch(expectedHTML);
    document.querySelector('.js-country-grid').innerHTML = '';
  });
});