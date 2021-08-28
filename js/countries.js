const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();
const displayCountries = (countries) => {
    const container = document.getElementById('container');
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        container.appendChild(div)
    })

};
const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
}
const displayCountryDetails = country => {
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h5>Country Deatils about ${country.name}</h5>
    <h5>${country.name}</h5>
    <p>Population: ${country.population}</p>
    <img width = "200px" src = "${country.flag}">
    `
}