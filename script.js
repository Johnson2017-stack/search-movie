let searchInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#searchBtn");
let container = document.querySelector(".container");
let img = document.querySelector(".img");
let info = document.querySelector(".info");
// console.log (searchInput);
// console.dir(searchInput);
let baseApiUrl = "https://www.omdbapi.com/?apikey=4e32e49b&t=";

function searchFunc() {
    let apiUrl = baseApiUrl + searchInput.value;
    // alert(searchInput.value);

fetch(apiUrl).then(res => res.json()) .then(data => {
    let poster = document.createElement("img");
    poster.src = data.Poster;
    
    let title = document.createElement("p");

    let year = document.createElement("p");
    title.textContent = data.Title;
    year.textContent = data.Year;

    let rated = document.createElement("p");
    rated.textContent = "Rated"; + data.Rated;

    let released = document.createElement("p")
    released.textContent = "Released"; + data.Released;

    let runtime = document.createElement("p")
    runtime.textContent = "Runtime"; + data.Runtime;

    img.appendChild(poster);
    info.appendChild(title, year, rated, released, runtime);
    container.append(poster, title, year)
})
}

function enterKeyFunc(e) {
    if (e.keyCode == 13)
    searchFunc();
}

searchBtn.addEventListener("click", searchFunc);

window.addEventListener("keypress", (e) => {
    enterKeyFunc(e);
});