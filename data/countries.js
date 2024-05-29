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
  new Country({flag: 'images/Country Flags/Afghanistan.png', name: 'Afghanistan', capital: 'Kabul', continent: 'Asia', population: 42070000, area: 652230}),
  new Country({flag: 'images/Country Flags/Albania.png', name: 'Albania', capital: 'Tirana', continent: 'Europe', population: 2838000, area: 28748}),
  new Country({flag: 'images/Country Flags/Algeria.png', name: 'Algeria', capital: 'Algiers', continent: 'Africa', population: 44700000, area: 2381741}),
  new Country({flag: 'images/Country Flags/Andorra.png', name: 'Andorra', capital: 'Andorra la Vella', continent: 'Europe', population: 79658, area: 468}),
  new Country({flag: 'images/Country Flags/Angola.png', name: 'Angola', capital: 'Luanda', continent: 'Africa', population: 35300000, area: 1246700}),
  new Country({flag: 'images/Country Flags/Antigua_and_Barbuda.png', name: 'Antigua and Barbuda', capital: 'Saint John\'s', continent: 'North America', population: 97440, area: 442}),
  new Country({flag: 'images/Country Flags/Argentina.webp', name: 'Argentina', capital: 'Buenos Aires', continent: 'South America', population: 45720000, area: 2780400}),
  new Country({flag: 'images/Country Flags/Armenia.png', name: 'Armenia', capital: 'Yerevan', continent: 'Asia', population: 2963000, area: 29743}),
  new Country({flag: 'images/Country Flags/Australia.png', name: 'Australia', capital: 'Canberra', continent: 'Oceania', population: 26850000, area: 7692024}),
  new Country({flag: 'images/Country Flags/Austria.png', name: 'Austria', capital: 'Vienna', continent: 'Europe', population: 9006000, area: 83871}),
  new Country({flag: 'images/Country Flags/Azerbaijan.png', name: 'Azerbaijan', capital: 'Baku', continent: 'Asia', population: 10350000, area: 86600}),
  new Country({flag: 'images/Country Flags/Bahamas.png', name: 'Bahamas', capital: 'Nassau', continent: 'North America', population: 400516, area: 13943}),
  new Country({flag: 'images/Country Flags/Bahrain.png', name: 'Bahrain', capital: 'Manama', continent: 'Asia', population: 1530000, area: 765}),
  new Country({flag: 'images/Country Flags/Bangladesh.png', name: 'Bangladesh', capital: 'Dhaka', continent: 'Asia', population: 169400000, area: 147570}),
  new Country({flag: 'images/Country Flags/Barbados.png', name: 'Barbados', capital: 'Bridgetown', continent: 'North America', population: 287711, area: 430}),
  new Country({flag: 'images/Country Flags/Belarus.png', name: 'Belarus', capital: 'Minsk', continent: 'Europe', population: 9466000, area: 207600}),
  new Country({flag: 'images/Country Flags/Belgium.png', name: 'Belgium', capital: 'Brussels', continent: 'Europe', population: 11590000, area: 30528}),
  new Country({flag: 'images/Country Flags/Belize.png', name: 'Belize', capital: 'Belmopan', continent: 'North America', population: 441471, area: 22966}),
  new Country({flag: 'images/Country Flags/Benin.png', name: 'Benin', capital: 'Porto-Novo', continent: 'Africa', population: 13000000, area: 114763}),
  new Country({flag: 'images/Country Flags/Bhutan.png', name: 'Bhutan', capital: 'Thimphu', continent: 'Asia', population: 770000, area: 38394}),
  new Country({flag: 'images/Country Flags/Bolivia.png', name: 'Bolivia', capital: 'Sucre', continent: 'South America', population: 11910000, area: 1098581}),
  new Country({flag: 'images/Country Flags/Bosnia_and_Herzegovina.png', name: 'Bosnia and Herzegovina', capital: 'Sarajevo', continent: 'Europe', population: 3281000, area: 51197}),
  new Country({flag: 'images/Country Flags/Botswana.png', name: 'Botswana', capital: 'Gaborone', continent: 'Africa', population: 2458000, area: 581730}),
  new Country({flag: 'images/Country Flags/Brazil.png', name: 'Brazil', capital: 'Brasília', continent: 'South America', population: 213900000, area: 8515767}),
  new Country({flag: 'images/Country Flags/Brunei.png', name: 'Brunei', capital: 'Bandar Seri Begawan', continent: 'Asia', population: 464478, area: 5765}),
  new Country({flag: 'images/Country Flags/Bulgaria.png', name: 'Bulgaria', capital: 'Sofia', continent: 'Europe', population: 6753000, area: 110879}),
  new Country({flag: 'images/Country Flags/Burkina_Faso.png', name: 'Burkina Faso', capital: 'Ouagadougou', continent: 'Africa', population: 23400000, area: 272967}),
  new Country({flag: 'images/Country Flags/Burundi.png', name: 'Burundi', capital: 'Gitega', continent: 'Africa', population: 13110000, area: 27834}),
  new Country({flag: 'images/Country Flags/Cabo_Verde.png', name: 'Cabo Verde', capital: 'Praia', continent: 'Africa', population: 560349, area: 4033}),
  new Country({flag: 'images/Country Flags/Cambodia.png', name: 'Cambodia', capital: 'Phnom Penh', continent: 'Asia', population: 17091464, area: 181035}),
  new Country({flag: 'images/Country Flags/Cameroon.png', name: 'Cameroon', capital: 'Yaoundé', continent: 'Africa', population: 28300000, area: 475442}),
  new Country({flag: 'images/Country Flags/Canada.png', name: 'Canada', capital: 'Ottawa', continent: 'North America', population: 40769890, area: 9984670}),
  new Country({flag: 'images/Country Flags/Central_African_Republic.png', name: 'Central African Republic', capital: 'Bangui', continent: 'Africa', population: 4998000, area: 622984}),
  new Country({flag: 'images/Country Flags/Chad.png', name: 'Chad', capital: 'N\'Djamena', continent: 'Africa', population: 18100000, area: 1284000}),
  new Country({flag: 'images/Country Flags/Chile.png', name: 'Chile', capital: 'Santiago', continent: 'South America', population: 19210000, area: 756102}),
  new Country({flag: 'images/Country Flags/China.png', name: 'China', capital: 'Beijing', continent: 'Asia', population: 1402000000, area: 9596961}),
  new Country({flag: 'images/Country Flags/Colombia.png', name: 'Colombia', capital: 'Bogotá', continent: 'South America', population: 51730000, area: 1141748}),
  new Country({flag: 'images/Country Flags/Comoros.png', name: 'Comoros', capital: 'Moroni', continent: 'Africa', population: 873724, area: 2235}),
  new Country({flag: 'images/Country Flags/Congo.png', name: 'Congo', capital: 'Brazzaville', continent: 'Africa', population: 5809000, area: 342000}),
  new Country({flag: 'images/Country Flags/Costa_Rica.png', name: 'Costa Rica', capital: 'San José', continent: 'North America', population: 5208000, area: 51100}),
  new Country({flag: 'images/Country Flags/Croatia.png', name: 'Croatia', capital: 'Zagreb', continent: 'Europe', population: 3800000, area: 56594}),
  new Country({flag: 'images/Country Flags/Cuba.png', name: 'Cuba', capital: 'Havana', continent: 'North America', population: 11330000, area: 109884}),
  new Country({flag: 'images/Country Flags/Cyprus.png', name: 'Cyprus', capital: 'Nicosia', continent: 'Asia', population: 1210000, area: 9251}),
  new Country({flag: 'images/Country Flags/Czechia.png', name: 'Czechia', capital: 'Prague', continent: 'Europe', population: 10700000, area: 78866}),
  new Country({flag: 'images/Country Flags/Denmark.png', name: 'Denmark', capital: 'Copenhagen', continent: 'Europe', population: 5830000, area: 42931}),
  new Country({flag: 'images/Country Flags/Djibouti.png', name: 'Djibouti', capital: 'Djibouti', continent: 'Africa', population: 976143, area: 23200}),
  new Country({flag: 'images/Country Flags/Dominica.png', name: 'Dominica', capital: 'Roseau', continent: 'North America', population: 72000, area: 751}),
  new Country({flag: 'images/Country Flags/Dominican_Republic.png', name: 'Dominican Republic', capital: 'Santo Domingo', continent: 'North America', population: 10940000, area: 48671}),
  new Country({flag: 'images/Country Flags/Ecuador.png', name: 'Ecuador', capital: 'Quito', continent: 'South America', population: 17900000, area: 283561}),
  new Country({flag: 'images/Country Flags/Egypt.png', name: 'Egypt', capital: 'Cairo', continent: 'Africa', population: 109300000, area: 1002450}),
  new Country({flag: 'images/Country Flags/El_Salvador.png', name: 'El Salvador', capital: 'San Salvador', continent: 'North America', population: 6486000, area: 21041}),
  new Country({flag: 'images/Country Flags/Equatorial_Guinea.png', name: 'Equatorial Guinea', capital: 'Malabo', continent: 'Africa', population: 1600000, area: 28051}),
  new Country({flag: 'images/Country Flags/Eritrea.png', name: 'Eritrea', capital: 'Asmara', continent: 'Africa', population: 3720000, area: 117600}),
  new Country({flag: 'images/Country Flags/Estonia.png', name: 'Estonia', capital: 'Tallinn', continent: 'Europe', population: 1328000, area: 45228}),
  new Country({flag: 'images/Country Flags/Eswatini.png', name: 'Eswatini', capital: 'Mbabane', continent: 'Africa', population: 1170000, area: 17364}),
  new Country({flag: 'images/Country Flags/Ethiopia.svg', name: 'Ethiopia', capital: 'Addis Ababa', continent: 'Africa', population: 126500000, area: 1104300}),
  new Country({flag: 'images/Country Flags/Fiji.png', name: 'Fiji', capital: 'Suva', continent: 'Oceania', population: 929000, area: 18274}),
  new Country({flag: 'images/Country Flags/Finland.png', name: 'Finland', capital: 'Helsinki', continent: 'Europe', population: 5541000, area: 338424}),
  new Country({flag: 'images/Country Flags/France.png', name: 'France', capital: 'Paris', continent: 'Europe', population: 67390000, area: 551695}),
  new Country({flag: 'images/Country Flags/Gabon.png', name: 'Gabon', capital: 'Libreville', continent: 'Africa', population: 2382000, area: 267668}),
  new Country({flag: 'images/Country Flags/Gambia.png', name: 'Gambia', capital: 'Banjul', continent: 'Africa', population: 2640000, area: 11295}),
  new Country({flag: 'images/Country Flags/Georgia.png', name: 'Georgia', capital: 'Tbilisi', continent: 'Asia', population: 3720000, area: 69700}),
  new Country({flag: 'images/Country Flags/Germany.png', name: 'Germany', capital: 'Berlin', continent: 'Europe', population: 83520000, area: 357022}),
  new Country({flag: 'images/Country Flags/Ghana.png', name: 'Ghana', capital: 'Accra', continent: 'Africa', population: 33250000, area: 238533}),
  new Country({flag: 'images/Country Flags/Greece.png', name: 'Greece', capital: 'Athens', continent: 'Europe', population: 10350000, area: 131957}),
  new Country({flag: 'images/Country Flags/Grenada.png', name: 'Grenada', capital: 'Saint George\'s', continent: 'North America', population: 113019, area: 344}),
  new Country({flag: 'images/Country Flags/Guatemala.png', name: 'Guatemala', capital: 'Guatemala City', continent: 'North America', population: 19550000, area: 108889}),
  new Country({flag: 'images/Country Flags/Guinea.png', name: 'Guinea', capital: 'Conakry', continent: 'Africa', population: 13930000, area: 245857}),
  new Country({flag: 'images/Country Flags/Guinea-Bissau.png', name: 'Guinea-Bissau', capital: 'Bissau', continent: 'Africa', population: 2036000, area: 36125}),
  new Country({flag: 'images/Country Flags/Guyana.png', name: 'Guyana', capital: 'Georgetown', continent: 'South America', population: 791000, area: 214970}),
  new Country({flag: 'images/Country Flags/Haiti.png', name: 'Haiti', capital: 'Port-au-Prince', continent: 'North America', population: 11380000, area: 27750}),
  new Country({flag: 'images/Country Flags/Honduras.png', name: 'Honduras', capital: 'Tegucigalpa', continent: 'North America', population: 10200000, area: 112492}),
  new Country({flag: 'images/Country Flags/Hungary.png', name: 'Hungary', capital: 'Budapest', continent: 'Europe', population: 9679000, area: 93028}),
  new Country({flag: 'images/Country Flags/Iceland.png', name: 'Iceland', capital: 'Reykjavik', continent: 'Europe', population: 387000, area: 103000}),
  new Country({flag: 'images/Country Flags/India.png', name: 'India', capital: 'New Delhi', continent: 'Asia', population: 1423000000, area: 3287263}),
  new Country({flag: 'images/Country Flags/Indonesia.png', name: 'Indonesia', capital: 'Jakarta', continent: 'Asia', population: 277700000, area: 1904569}),
  new Country({flag: 'images/Country Flags/Iran.png', name: 'Iran', capital: 'Tehran', continent: 'Asia', population: 86000000, area: 1648195}),
  new Country({flag: 'images/Country Flags/Iraq.png', name: 'Iraq', capital: 'Baghdad', continent: 'Asia', population: 43900000, area: 438317}),
  new Country({flag: 'images/Country Flags/Ireland.png', name: 'Ireland', capital: 'Dublin', continent: 'Europe', population: 5077000, area: 70273}),
  new Country({flag: 'images/Country Flags/Israel.png', name: 'Israel', capital: 'Jerusalem', continent: 'Asia', population: 9736000, area: 20770}),
  new Country({flag: 'images/Country Flags/Italy.png', name: 'Italy', capital: 'Rome', continent: 'Europe', population: 58853482, area: 301340}),
  new Country({flag: 'images/Country Flags/Ivory_Coast.png', name: 'Ivory Coast', capital: 'Yamoussoukro', continent: 'Africa', population: 27780000, area: 322463}),
  new Country({flag: 'images/Country Flags/Jamaica.png', name: 'Jamaica', capital: 'Kingston', continent: 'North America', population: 2961000, area: 10991}),
  new Country({flag: 'images/Country Flags/Japan.png', name: 'Japan', capital: 'Tokyo', continent: 'Asia', population: 123970000, area: 377975}),
  new Country({flag: 'images/Country Flags/Jordan.png', name: 'Jordan', capital: 'Amman', continent: 'Asia', population: 11190000, area: 89342}),
  new Country({flag: 'images/Country Flags/Kazakhstan.png', name: 'Kazakhstan', capital: 'Astana', continent: 'Asia', population: 19300000, area: 2724900}),
  new Country({flag: 'images/Country Flags/Kenya.png', name: 'Kenya', capital: 'Nairobi', continent: 'Africa', population: 54800000, area: 580367}),
  new Country({flag: 'images/Country Flags/Kiribati.png', name: 'Kiribati', capital: 'Tarawa', continent: 'Oceania', population: 119940, area: 811}),
  new Country({flag: 'images/Country Flags/Kosovo.png', name: 'Kosovo', capital: 'Pristina', continent: 'Europe', population: 1831000, area: 10908}),
  new Country({flag: 'images/Country Flags/Kuwait.png', name: 'Kuwait', capital: 'Kuwait City', continent: 'Asia', population: 4500000, area: 17818}),
  new Country({flag: 'images/Country Flags/Kyrgyzstan.png', name: 'Kyrgyzstan', capital: 'Bishkek', continent: 'Asia', population: 6685000, area: 199951}),
  new Country({flag: 'images/Country Flags/Laos.png', name: 'Laos', capital: 'Vientiane', continent: 'Asia', population: 7570000, area: 236800}),
  new Country({flag: 'images/Country Flags/Latvia.png', name: 'Latvia', capital: 'Riga', continent: 'Europe', population: 1840000, area: 64559}),
  new Country({flag: 'images/Country Flags/Lebanon.png', name: 'Lebanon', capital: 'Beirut', continent: 'Asia', population: 5500000, area: 10452}),
  new Country({flag: 'images/Country Flags/Lesotho.png', name: 'Lesotho', capital: 'Maseru', continent: 'Africa', population: 2260000, area: 30355}),
  new Country({flag: 'images/Country Flags/Liberia.png', name: 'Liberia', capital: 'Monrovia', continent: 'Africa', population: 5700000, area: 111369}),
  new Country({flag: 'images/Country Flags/Libya.png', name: 'Libya', capital: 'Tripoli', continent: 'Africa', population: 6770000, area: 1759540}),
  new Country({flag: 'images/Country Flags/Liechtenstein.png', name: 'Liechtenstein', capital: 'Vaduz', continent: 'Europe', population: 39878, area: 160}),
  new Country({flag: 'images/Country Flags/Lithuania.png', name: 'Lithuania', capital: 'Vilnius', continent: 'Europe', population: 2688000, area: 65300}),
  new Country({flag: 'images/Country Flags/Luxembourg.png', name: 'Luxembourg', capital: 'Luxembourg', continent: 'Europe', population: 660809, area: 2586}),
  new Country({flag: 'images/Country Flags/Madagascar.png', name: 'Madagascar', capital: 'Antananarivo', continent: 'Africa', population: 29140000, area: 587041}),
  new Country({flag: 'images/Country Flags/Malawi.png', name: 'Malawi', capital: 'Lilongwe', continent: 'Africa', population: 20840000, area: 118484}),
  new Country({flag: 'images/Country Flags/Malaysia.png', name: 'Malaysia', capital: 'Kuala Lumpur', continent: 'Asia', population: 33620000, area: 330803}),
  new Country({flag: 'images/Country Flags/Maldives.png', name: 'Maldives', capital: 'Malé', continent: 'Asia', population: 528215, area: 298}),
  new Country({flag: 'images/Country Flags/Mali.png', name: 'Mali', capital: 'Bamako', continent: 'Africa', population: 23020000, area: 1240192}),
  new Country({flag: 'images/Country Flags/Malta.png', name: 'Malta', capital: 'Valletta', continent: 'Europe', population: 514564, area: 316}),
  new Country({flag: 'images/Country Flags/Marshall_Islands.png', name: 'Marshall Islands', capital: 'Majuro', continent: 'Oceania', population: 59000, area: 181}),
  new Country({flag: 'images/Country Flags/Mauritania.png', name: 'Mauritania', capital: 'Nouakchott', continent: 'Africa', population: 4961000, area: 1030700}),
  new Country({flag: 'images/Country Flags/Mauritius.png', name: 'Mauritius', capital: 'Port Louis', continent: 'Africa', population: 1272000, area: 2040}),
  new Country({flag: 'images/Country Flags/Mexico.png', name: 'Mexico', capital: 'Mexico City', continent: 'North America', population: 128000000, area: 1964375}),
  new Country({flag: 'images/Country Flags/Micronesia.png', name: 'Micronesia', capital: 'Palikir', continent: 'Oceania', population: 115021, area: 702}),
  new Country({flag: 'images/Country Flags/Moldova.png', name: 'Moldova', capital: 'Chișinău', continent: 'Europe', population: 2622000, area: 33846}),
  new Country({flag: 'images/Country Flags/Monaco.png', name: 'Monaco', capital: 'Monaco', continent: 'Europe', population: 38300, area: 2}),
  new Country({flag: 'images/Country Flags/Mongolia.png', name: 'Mongolia', capital: 'Ulaanbaatar', continent: 'Asia', population: 3400000, area: 1564116}),
  new Country({flag: 'images/Country Flags/Montenegro.png', name: 'Montenegro', capital: 'Podgorica', continent: 'Europe', population: 617000, area: 13812}),
  new Country({flag: 'images/Country Flags/Morocco.png', name: 'Morocco', capital: 'Rabat', continent: 'Africa', population: 37000000, area: 446550}),
  new Country({flag: 'images/Country Flags/Mozambique.png', name: 'Mozambique', capital: 'Maputo', continent: 'Africa', population: 33620000, area: 801590}),
  new Country({flag: 'images/Country Flags/Myanmar.png', name: 'Myanmar', capital: 'Naypyidaw', continent: 'Asia', population: 55870000, area: 676578}),
  new Country({flag: 'images/Country Flags/Namibia.png', name: 'Namibia', capital: 'Windhoek', continent: 'Africa', population: 2590000, area: 825615}),
  new Country({flag: 'images/Country Flags/Nauru.png', name: 'Nauru', capital: 'Yaren', continent: 'Oceania', population: 10834, area: 21}),
  new Country({flag: 'images/Country Flags/Nepal.png', name: 'Nepal', capital: 'Kathmandu', continent: 'Asia', population: 30220000, area: 147516}),
  new Country({flag: 'images/Country Flags/Netherlands.png', name: 'Netherlands', capital: 'Amsterdam', continent: 'Europe', population: 17470000, area: 41543}),
  new Country({flag: 'images/Country Flags/New_Zealand.png', name: 'New Zealand', capital: 'Wellington', continent: 'Oceania', population: 5130000, area: 268838}),
  new Country({flag: 'images/Country Flags/Nicaragua.png', name: 'Nicaragua', capital: 'Managua', continent: 'North America', population: 6960000, area: 130373}),
  new Country({flag: 'images/Country Flags/Niger.png', name: 'Niger', capital: 'Niamey', continent: 'Africa', population: 27520000, area: 1267000}),
  new Country({flag: 'images/Country Flags/Nigeria.png', name: 'Nigeria', capital: 'Abuja', continent: 'Africa', population: 223800000, area: 923768}),
  new Country({flag: 'images/Country Flags/North_Korea.png', name: 'North Korea', capital: 'Pyongyang', continent: 'Asia', population: 25800000, area: 120540}),
  new Country({flag: 'images/Country Flags/North_Macedonia.png', name: 'North Macedonia', capital: 'Skopje', continent: 'Europe', population: 2072000, area: 25713}),
  new Country({flag: 'images/Country Flags/Norway.png', name: 'Norway', capital: 'Oslo', continent: 'Europe', population: 5420000, area: 323802}),
  new Country({flag: 'images/Country Flags/Oman.png', name: 'Oman', capital: 'Muscat', continent: 'Asia', population: 4413000, area: 309500}),
  new Country({flag: 'images/Country Flags/Pakistan.png', name: 'Pakistan', capital: 'Islamabad', continent: 'Asia', population: 235000000, area: 881912}),
  new Country({flag: 'images/Country Flags/Palau.png', name: 'Palau', capital: 'Ngerulmud', continent: 'Oceania', population: 18000, area: 459}),
  new Country({flag: 'images/Country Flags/Palestine.png', name: 'Palestine', capital: 'Ramallah', continent: 'Asia', population: 5181000, area: 6220}),
  new Country({flag: 'images/Country Flags/Panama.png', name: 'Panama', capital: 'Panama City', continent: 'North America', population: 4510000, area: 75417}),
  new Country({flag: 'images/Country Flags/Papua_New_Guinea.png', name: 'Papua New Guinea', capital: 'Port Moresby', continent: 'Oceania', population: 10600000, area: 462840}),
  new Country({flag: 'images/Country Flags/Paraguay.png', name: 'Paraguay', capital: 'Asunción', continent: 'South America', population: 7252000, area: 406752}),
  new Country({flag: 'images/Country Flags/Peru.png', name: 'Peru', capital: 'Lima', continent: 'South America', population: 33400000, area: 1285216}),
  new Country({flag: 'images/Country Flags/Philippines.png', name: 'Philippines', capital: 'Manila', continent: 'Asia', population: 116000000, area: 300000}),
  new Country({flag: 'images/Country Flags/Poland.png', name: 'Poland', capital: 'Warsaw', continent: 'Europe', population: 37970000, area: 312696}),
  new Country({flag: 'images/Country Flags/Portugal.png', name: 'Portugal', capital: 'Lisbon', continent: 'Europe', population: 10260000, area: 92090}),
  new Country({flag: 'images/Country Flags/Qatar.png', name: 'Qatar', capital: 'Doha', continent: 'Asia', population: 2960000, area: 11586}),
  new Country({flag: 'images/Country Flags/Republic_of_the_Congo.png', name: 'Republic of the Congo', capital: 'Brazzaville', continent: 'Africa', population: 5809000, area: 342000}),
  new Country({flag: 'images/Country Flags/Romania.png', name: 'Romania', capital: 'Bucharest', continent: 'Europe', population: 19160000, area: 238397}),
  new Country({flag: 'images/Country Flags/Russia.png', name: 'Russia', capital: 'Moscow', continent: 'Europe', population: 143400000, area: 17098242}),
  new Country({flag: 'images/Country Flags/Rwanda.png', name: 'Rwanda', capital: 'Kigali', continent: 'Africa', population: 13610000, area: 26338}),
  new Country({flag: 'images/Country Flags/Saint_Kitts_and_Nevis.png', name: 'Saint Kitts and Nevis', capital: 'Basseterre', continent: 'North America', population: 47000, area: 261}),
  new Country({flag: 'images/Country Flags/Saint_Lucia.png', name: 'Saint Lucia', capital: 'Castries', continent: 'North America', population: 180000, area: 617}),
  new Country({flag: 'images/Country Flags/Saint_Vincent_and_the_Grenadines.png', name: 'Saint Vincent and the Grenadines', capital: 'Kingstown', continent: 'North America', population: 104332, area: 389}),
  new Country({flag: 'images/Country Flags/Samoa.png', name: 'Samoa', capital: 'Apia', continent: 'Oceania', population: 200874, area: 2831}),
  new Country({flag: 'images/Country Flags/San_Marino.png', name: 'San Marino', capital: 'San Marino', continent: 'Europe', population: 33459, area: 61}),
  new Country({flag: 'images/Country Flags/Sao_Tome_and_Principe.png', name: 'São Tomé and Príncipe', capital: 'São Tomé', continent: 'Africa', population: 228000, area: 964}),
  new Country({flag: 'images/Country Flags/Saudi_Arabia.png', name: 'Saudi Arabia', capital: 'Riyadh', continent: 'Asia', population: 35600000, area: 2149690}),
  new Country({flag: 'images/Country Flags/Senegal.png', name: 'Senegal', capital: 'Dakar', continent: 'Africa', population: 17700000, area: 196722}),
  new Country({flag: 'images/Country Flags/Serbia.png', name: 'Serbia', capital: 'Belgrade', continent: 'Europe', population: 6546000, area: 77474}),
  new Country({flag: 'images/Country Flags/Seychelles.png', name: 'Seychelles', capital: 'Victoria', continent: 'Africa', population: 99462, area: 459}),
  new Country({flag: 'images/Country Flags/Sierra_Leone.png', name: 'Sierra Leone', capital: 'Freetown', continent: 'Africa', population: 8740000, area: 71740}),
  new Country({flag: 'images/Country Flags/Singapore.png', name: 'Singapore', capital: 'Singapore', continent: 'Asia', population: 5888000, area: 728}),
  new Country({flag: 'images/Country Flags/Slovakia.png', name: 'Slovakia', capital: 'Bratislava', continent: 'Europe', population: 5430000, area: 49037}),
  new Country({flag: 'images/Country Flags/Slovenia.png', name: 'Slovenia', capital: 'Ljubljana', continent: 'Europe', population: 2072000, area: 20273}),
  new Country({flag: 'images/Country Flags/Solomon_Islands.png', name: 'Solomon Islands', capital: 'Honiara', continent: 'Oceania', population: 707000, area: 28896}),
  new Country({flag: 'images/Country Flags/Somalia.png', name: 'Somalia', capital: 'Mogadishu', continent: 'Africa', population: 17910000, area: 637657}),
  new Country({flag: 'images/Country Flags/South_Africa.png', name: 'South Africa', capital: 'Pretoria', continent: 'Africa', population: 60200000, area: 1221037}),
  new Country({flag: 'images/Country Flags/South_Korea.png', name: 'South Korea', capital: 'Seoul', continent: 'Asia', population: 51780000, area: 100210}),
  new Country({flag: 'images/Country Flags/South_Sudan.png', name: 'South Sudan', capital: 'Juba', continent: 'Africa', population: 13870000, area: 619745}),
  new Country({flag: 'images/Country Flags/Spain.png', name: 'Spain', capital: 'Madrid', continent: 'Europe', population: 47470000, area: 505992}),
  new Country({flag: 'images/Country Flags/Sri_Lanka.png', name: 'Sri Lanka', capital: 'Colombo', continent: 'Asia', population: 21870000, area: 65610}),
  new Country({flag: 'images/Country Flags/Sudan.png', name: 'Sudan', capital: 'Khartoum', continent: 'Africa', population: 49380000, area: 1886068}),
  new Country({flag: 'images/Country Flags/Suriname.png', name: 'Suriname', capital: 'Paramaribo', continent: 'South America', population: 618000, area: 163821}),
  new Country({flag: 'images/Country Flags/Sweden.png', name: 'Sweden', capital: 'Stockholm', continent: 'Europe', population: 10440000, area: 450295}),
  new Country({flag: 'images/Country Flags/Switzerland.png', name: 'Switzerland', capital: 'Bern', continent: 'Europe', population: 8637000, area: 41284}),
  new Country({flag: 'images/Country Flags/Syria.png', name: 'Syria', capital: 'Damascus', continent: 'Asia', population: 21720000, area: 185180}),
  new Country({flag: 'images/Country Flags/Tajikistan.png', name: 'Tajikistan', capital: 'Dushanbe', continent: 'Asia', population: 10370000, area: 143100}),
  new Country({flag: 'images/Country Flags/Tanzania.png', name: 'Tanzania', capital: 'Dodoma', continent: 'Africa', population: 67350000, area: 947303}),
  new Country({flag: 'images/Country Flags/Thailand.png', name: 'Thailand', capital: 'Bangkok', continent: 'Asia', population: 66170000, area: 513120}),
  new Country({flag: 'images/Country Flags/Timor-Leste.png', name: 'Timor-Leste', capital: 'Dili', continent: 'Asia', population: 1383000, area: 14919}),
  new Country({flag: 'images/Country Flags/Togo.png', name: 'Togo', capital: 'Lomé', continent: 'Africa', population: 8620000, area: 56785}),
  new Country({flag: 'images/Country Flags/Tonga.png', name: 'Tonga', capital: 'Nukuʻalofa', continent: 'Oceania', population: 104494, area: 748}),
  new Country({flag: 'images/Country Flags/Trinidad_and_Tobago.png', name: 'Trinidad and Tobago', capital: 'Port of Spain', continent: 'North America', population: 1400000, area: 5130}),
  new Country({flag: 'images/Country Flags/Tunisia.png', name: 'Tunisia', capital: 'Tunis', continent: 'Africa', population: 12120000, area: 163610}),
  new Country({flag: 'images/Country Flags/Turkey.png', name: 'Turkey', capital: 'Ankara', continent: 'Asia', population: 87170000, area: 783356}),
  new Country({flag: 'images/Country Flags/Turkmenistan.png', name: 'Turkmenistan', capital: 'Ashgabat', continent: 'Asia', population: 6480000, area: 488100}),
  new Country({flag: 'images/Country Flags/Tuvalu.png', name: 'Tuvalu', capital: 'Funafuti', continent: 'Oceania', population: 10400, area: 26}),
  new Country({flag: 'images/Country Flags/Uganda.png', name: 'Uganda', capital: 'Kampala', continent: 'Africa', population: 45740000, area: 241550}),
  new Country({flag: 'images/Country Flags/Ukraine.png', name: 'Ukraine', capital: 'Kyiv', continent: 'Europe', population: 36670000, area: 603550}),
  new Country({flag: 'images/Country Flags/United_Arab_Emirates.png', name: 'United Arab Emirates', capital: 'Abu Dhabi', continent: 'Asia', population: 9786000, area: 83600}),
  new Country({flag: 'images/Country Flags/United_Kingdom.png', name: 'United Kingdom', capital: 'London', continent: 'Europe', population: 67560000, area: 243610}),
  new Country({flag: 'images/Country Flags/United_States.png', name: 'United States', capital: 'Washington, D.C.', continent: 'North America', population: 332300000, area: 9833517}),
  new Country({flag: 'images/Country Flags/Uruguay.png', name: 'Uruguay', capital: 'Montevideo', continent: 'South America', population: 3497000, area: 176215}),
  new Country({flag: 'images/Country Flags/Uzbekistan.png', name: 'Uzbekistan', capital: 'Tashkent', continent: 'Asia', population: 36040000, area: 448978}),
  new Country({flag: 'images/Country Flags/Vanuatu.png', name: 'Vanuatu', capital: 'Port Vila', continent: 'Oceania', population: 319000, area: 12189}),
  new Country({flag: 'images/Country Flags/Vatican_City.png', name: 'Vatican City', capital: 'Vatican City', continent: 'Europe', population: 825, area: 0.49}),
  new Country({flag: 'images/Country Flags/Venezuela.png', name: 'Venezuela', capital: 'Caracas', continent: 'South America', population: 31300000, area: 916445}),
  new Country({flag: 'images/Country Flags/Vietnam.png', name: 'Vietnam', capital: 'Hanoi', continent: 'Asia', population: 99480000, area: 331212}),
  new Country({flag: 'images/Country Flags/Yemen.png', name: 'Yemen', capital: 'Sana\'a', continent: 'Asia', population: 33690000, area: 527968}),
  new Country({flag: 'images/Country Flags/Zambia.png', name: 'Zambia', capital: 'Lusaka', continent: 'Africa', population: 19660000, area: 752612}),
  new Country({flag: 'images/Country Flags/Zimbabwe.png', name: 'Zimbabwe', capital: 'Harare', continent: 'Africa', population: 15920000, area: 390757})
  ];

export const desiredCountry = new Country(country[Math.floor(Math.random() * country.length)]);
export const chosenCountries = [];