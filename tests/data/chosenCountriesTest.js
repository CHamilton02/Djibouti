import {countryList} from "../../data/chosenCountries.js";

describe('test suite: CountryList class', () => {
  beforeEach(() => {
    spyOn(localStorage, 'setItem');
  });

  it('adds a new country to list', () => {
    countryList.countries = [];

    countryList.addCountry('Canada');
    expect(countryList.countries.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(countryList.countries[0]).toEqual('Canada');
  })
})