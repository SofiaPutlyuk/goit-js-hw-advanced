const searchInputCountry = document.getElementById("countryInput");
const createWrapperCountry = document.createElement('div');
createWrapperCountry.classList.remove("wrapperStyle");
document.body.appendChild(createWrapperCountry);

searchInputCountry.addEventListener("input", _.debounce(() => {
    const urlCountry = 'https://restcountries.com/v3.1/all?fields=name,flags,capital,population,languages';
    const valueInputCountry = searchInputCountry.value.trim().toLowerCase();

    fetch(urlCountry, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(country => country.json())
    .then(info => {
        console.log(info);
    
        createWrapperCountry.innerHTML = "";
    
        const matchingCountries = info.filter(element => 
            element.name && element.name.common && element.name.common.toLowerCase().startsWith(valueInputCountry)
        );
    
        if (matchingCountries.length > 10) {
            PNotify.alert({
                text: "Too many matches found",
                type: 'success',
                styling: 'brighttheme'
            });
        } else if (matchingCountries.length === 1) {
            const element = matchingCountries[0]; 
            const createTextCapital = document.createElement('h1');
            createTextCapital.textContent = `Capital: ${element.capital[0]}`;
            createTextCapital.classList.add("style-capital");
            createWrapperCountry.appendChild(createTextCapital);
            createWrapperCountry.classList.add('wrapperStyle');
            
            const createImg = document.createElement('img');
            createImg.src = element.flags.png;
            createWrapperCountry.appendChild(createImg);
            
            const population = document.createElement('h2');
            population.textContent = `Population: ${element.population}`;
            createWrapperCountry.appendChild(population);
    
            const createUltLanguages = document.createElement('ul');
            Object.values(element.languages).forEach(value => {
                const createLiLanguages = document.createElement('li');
                createLiLanguages.textContent = value; 
                createUltLanguages.appendChild(createLiLanguages);
            });
            createWrapperCountry.appendChild(createUltLanguages);
        }
    
        matchingCountries.forEach(element => {
            const createTitle = document.createElement('li');
            createTitle.textContent = element.name.common;
            createWrapperCountry.appendChild(createTitle);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}, 500));
