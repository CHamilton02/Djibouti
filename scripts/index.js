

let gameHTML = '';
function renderHTML() {
  document.querySelector('.js-user-choice').innerHTML = `<div class="user-choice">
    <select class="user-input">
      <option disabled selected value>Select a country</option>
      <option value="Canada">Canada</option>
      <option value="USA">USA</option>
      <option value="Mexico">Mexico</option>
    </select>
    <button class="user-submit">Submit</button>
  </div>`

  document.querySelector('.js-country-grid').innerHTML = `<div></div>
    <div class="column-heading">Country</div>
    <div class="column-heading">Capital</div>
    <div class="column-heading">Continent</div>
    <div class="column-heading">Population</div>
    <div class="column-heading">Area</div>
    <img class="country-grid-flag" src="images/Country Flags/Italypng.png">
    <div><span class="incorrect-first-letter">I</span>taly</div>
    <div><span class="incorrect-first-letter">R</span>ome</div>
    <div class="incorrect-continent">Europe</div>
    <div style="font-size: 28px;">
      <div>58853482 <span style="color: rgb(255, 208, 0);">&#8595;</span></div>
    </div>
    <div style="font-size: 28px;">
      <div>301340km&#178; <span style="color: rgb(255, 208, 0);">&#8593;</span></div>
    </div>
    <img class="country-grid-flag" src="images/Country Flags/Canada.png">
    <div class="correct-value">Canada</div>
    <div class="correct-value">Ottawa</div>
    <div class="correct-value">North America</div>
    <div class="correct-value">40769890</div>
    <div class="correct-value">9984670km&#178;</div>`
}

renderHTML();