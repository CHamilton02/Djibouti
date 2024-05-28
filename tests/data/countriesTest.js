import {Country} from "../../data/countries.js";

describe('test suite: Country class', () => {
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

  it('generates country HTML', () => {
    const Canada = new Country({
      flag: 'images/Country Flags/Canada.png',
      name: 'Canada',
      capital: 'Ottawa',
      continent: 'North America',
      population: 40769890,
      area: 9984670
    });

    expect(Canada.getHTML()).toEqual(`<img class="country-grid-flag" src="images/Country Flags/Canada.png">
      <div class="correct-value">Canada</div>
      <div class="correct-value">Ottawa</div>
      <div class="correct-value">North America</div>
      <div class="correct-value">40769890</div>
      <div class="correct-value">9984670km&#178;</div>`)
  })
})