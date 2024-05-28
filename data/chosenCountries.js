export class CountryList {
  countries;
  #localStorageKey;

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    //this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.countries = JSON.parse(localStorage.getItem(this.#localStorageKey));

    if (!this.countries) {
      this.countries = [];
    };
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.countries));
  }

  addCountry(countryName) {
    this.countries.push(countryName);
    this.saveToStorage();
  }
}

export const countryList = new CountryList('countries');