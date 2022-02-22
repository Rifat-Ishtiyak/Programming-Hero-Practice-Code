const getCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => showCountries(data))
}

const showCountries = (data) =>{
    // console.log(data);
    const countriesDiv = document.getElementById('countries');
    data.forEach(country => {
        const divCounrty = document.createElement('div');
        divCounrty.classList='country';
        divCounrty.innerHTML = `<h1>${country.name}</h2>
                                <h3>${country.capital}</h3>
                                <button onclick="countryDetails('${country.name}')">Show Details</button>`
        countriesDiv.appendChild(divCounrty);
    }); 
}


const countryDetails = (cName) => {
    fetch(`https://restcountries.com/v2/name/${cName}`)
    .then(response => response.json())
    .then(data => showCountryDetails(data))
}

function showCountryDetails(country){
    const divDetails = document.getElementById('country-details');
    const div = document.createElement('div');
    for (const countryDetails of country) {
        divDetails.innerHTML = `<h2>Name : ${countryDetails.name}</h2>
                        <h2>Native Name : ${countryDetails.nativeName}</h2>
                        <h2>Capital : ${countryDetails.capital}</h2>
                        <h2>Population : ${countryDetails.population}</h2>
                        <h2>Region : ${countryDetails.region}</h2>
                        <img src='${countryDetails.flag}' width="400" alt="">`;

    }
}
getCountries();