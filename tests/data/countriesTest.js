import {Country} from "../../data/countries.js";

describe('test suite: Country class', () => {
  afterEach(() => {
    document.querySelector('.js-country-grid').innerHTML = '';
  })
  
  it('creates a country object', () => {
    const Canada = new Country({
      flag: 'images/Country Flags/Canada.png',
      name: 'Canada',
      capital: 'Ottawa',
      continent: 'North America',
      population: 40769890,
      area: 9984670
    });

    expect(Canada.flag).toEqual('images/Country Flags/Canada.png');
    expect(Canada.name).toEqual('Canada');
    expect(Canada.capital).toEqual('Ottawa');
    expect(Canada.continent).toEqual('North America');
    expect(Canada.population).toEqual(40769890);
    expect(Canada.area).toEqual(9984670);
  })

  it('generates country HTML for matching target', () => {
    const Canada = new Country({
      flag: 'images/Country Flags/Canada.png',
      name: 'Canada',
      capital: 'Ottawa',
      continent: 'North America',
      population: 40769890,
      area: 9984670
    });

    Canada.generateHTML(Canada);
    expect(document.querySelector('.js-country-grid').innerHTML).toContain(`<img class="country-grid-flag" src="${Canada.flag}">
      <div class="country-details-animation correct-value">${Canada.name}</div>
      <div class="country-details-animation correct-value">${Canada.capital}</div>
      <div class="country-details-animation correct-value">${Canada.continent}</div>
      <div class="country-details-animation correct-value">${Canada.population}</div>
      <div class="country-details-animation correct-value">${Canada.area}km²</div>`);
  })

  it('generates country HTML for matching target', () => {
    const Canada = new Country({
      flag: 'images/Country Flags/Canada.png',
      name: 'Canada',
      capital: 'Ottawa',
      continent: 'North America',
      population: 40769890,
      area: 9984670
    });

    const Afghanistan = new Country({
      flag: 'images/Country Flags/Afghanistan.png',
      name: 'Afghanistan',
      capital: 'Kabul',
      continent: 'Asia',
      population: 42070000,
      area: 652230
    });

    Canada.generateHTML(Afghanistan);
    expect(document.querySelector('.js-country-grid').innerHTML).toContain(`<img class="country-grid-flag" src="images/Country Flags/Canada.png"><div class="country-details-animation"><span class="incorrect-value">C</span>anada</div><div class="country-details-animation"><span class="incorrect-value">O</span>ttawa</div><div class="country-details-animation incorrect-value">North America</div><div class="country-details-animation">40769890 <span class="arrow">↑</span></div><div class="country-details-animation">9984670km² <span class="arrow">↓</span></div>`);
  })
});