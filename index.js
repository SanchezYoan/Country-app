const countriesContainer = document.querySelector(".countries-container");
let countriesData = [];
let sortMethod = "maxToMin";
const btnSort = document.querySelectorAll(".btnSort")


async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countriesData = data));

  console.log(countriesData);
  countriesDisplay();
}

function countriesDisplay() {
  countriesContainer.innerHTML = countriesData
  .filter((country) =>
  country.translations.fra.common
    .toLowerCase()
    .includes(inputSearch.value.toLowerCase())
  )
  .sort((a, b) => {
    if (sortMethod === "maxToMin") {
      return b.population - a.population;
    } else if (sortMethod === "minToMax") {
      return a.population - b.population;
    } else if (sortMethod === "alpha") {
      return a.translations.fra.common.localeCompare(
        b.translations.fra.common
      );
    }
  })
  .slice(0, inputRange.value)
  .map(
    (country) =>
      `
        <div class="card">
        <img src=${country.flags.svg} alt="drapeau ${
        country.translations.fra.common
      }" > 
        <h2>${country.translations.fra.common}</h2>
        <h4>${country.capital}</h4>
        <p>Population : ${country.population.toLocaleString()}</p>
        </div>
      `
  )
  .join("");
}

window.addEventListener("load", fetchCountries);
inputSearch.addEventListener("input", countriesDisplay);

inputRange.addEventListener("input", (e) => {

    rangeValue.textContent = e.target.value
    inputRange.value = e.target.value
    countriesDisplay();
})
btnSort.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      sortMethod = e.target.id;
      countriesDisplay();
    });
});
  

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
