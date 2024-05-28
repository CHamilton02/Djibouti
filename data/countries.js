export class Country {
  flag;
  name;
  capital;
  continent;
  population;
  area;

  constructor(countryDetails) {
    this.flag = countryDetails.flag;
    this.name = countryDetails.name;
    this.capital = countryDetails.capital;
    this.continent = countryDetails.continent;
    this.population = countryDetails.population;
    this.area = countryDetails.area;
  }

  getHTML(targetCountry) {
    let HTML = '';
    if (this.name === targetCountry.name) {
      return `<img class="country-grid-flag" src="${this.flag}">
      <div class="correct-value">${this.name}</div>
      <div class="correct-value">${this.capital}</div>
      <div class="correct-value">${this.continent}</div>
      <div class="correct-value">${this.population}</div>
      <div class="correct-value">${this.area}km&#178;</div>`
    }
    HTML += `<img class="country-grid-flag" src="${this.flag}">`
    if (this.name.charAt(0) === targetCountry.name.charAt(0)) {
      HTML += `<div><span class="correct-value">${this.name.charAt(0)}</span>${this.name.substring(1)}</div>`
    } else {
      HTML += `<div><span class="incorrect-value">${this.name.charAt(0)}</span>${this.name.substring(1)}</div>`
    }
    if (this.capital.charAt(0) === targetCountry.capital.charAt(0)) {
      HTML += `<div><span class="correct-value">${this.capital.charAt(0)}</span>${this.capital.substring(1)}</div>`
    } else {
      HTML += `<div><span class="incorrect-value">${this.capital.charAt(0)}</span>${this.capital.substring(1)}</div>`
    }
    if (this.continent === targetCountry.continent) {
      HTML += `<div class="correct-value">${this.continent}</div>`
    } else {
      HTML += `<div class="incorrect-value">${this.continent}</div>`
    }
    if (this.population > targetCountry.population) {
      HTML += `<div>${this.population} <span class="arrow">&#8595;</span></div>`
    } else {
      HTML += `<div>${this.population} <span class=arrow>&#8593;</span></div>`
    }
    if (this.area > targetCountry.area) {
      HTML += `<div>${this.area}km&#178; <span class="arrow">&#8595;</span></div>`
    } else {
      HTML += `<div>${this.area}km&#178; <span class=arrow>&#8593;</span></div>`
    }
    return HTML;
  }
}

export const country = [
  new Country({flag: 'images/Country Flags/Italy.png', name: 'Italy', capital: 'Rome', continent: 'Europe', population: 58853482, area: 301340}),
  new Country({flag: 'images/Country Flags/Canada.png', name: 'Canada', capital: 'Ottawa', continent: 'North America', population: 40769890, area: 9984670}),
  new Country({flag: 'images/Country Flags/USA.png', name: 'USA', capital: 'Washington', continent: 'North America', population: 334914895, area: 9833520}),
  new Country({flag: 'images/Country Flags/Japan.png', name: 'Japan', capital: 'Tokyo', continent: 'Asia', population: 123970000, area: 377975}),
  new Country({flag: 'images/Country Flags/Cambodia.png', name: 'Cambodia', capital: 'Phnom Penh', continent: 'Asia', population: 17091464, area: 181035})
];

export const desiredCountry = new Country(country[1]);