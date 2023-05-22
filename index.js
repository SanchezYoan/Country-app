const search = document.getElementById('inputSearch')
const countriesItems = document.getElementById('countriesItems');
let countries = []

async function fetcher() {
    await fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((data) => countries = data);
    
   
}

 countriesDisplay = () => {
    countriesItems.innertHTML = countries.map((country) => {

    
        // console.log(countries.map(country))
        return `
        <li class="card">
           
            <img src=${country.flag} alt="photo ${country.fifa}">
        </li>
        `;
    });
}

fetcher()
search.addEventListener('input', (e) => {
    fetcher(e.target.value)
})
// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
