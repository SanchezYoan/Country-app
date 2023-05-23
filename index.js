
const countriesContainer = document.querySelector(".countries-container");
let countriesData = []

async function fetchCountries() {
    await fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => countriesData = data)

    // console.log(countriesData);
    countriesDisplay();
    
   
}

countriesDisplay = () => {
    countriesContainer.innertHTML = countriesData.map(
        (country) => 
        
        `
        <div class="card">
          <img src=${country.flags.svg} alt="drapeau ${
        country.translations.fra.common}" > 
          <h2>${country.translations.fra.common}</h2>
          <h4>${country.capital}</h4>
          <p>Population : ${country.population.toLocaleString()}</p>
        </div>
      `
    )
}

window.addEventListener("load", fetchCountries);

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
