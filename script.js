let searchInput = document.querySelector("#search-input");
let searchBtn = document.querySelector("#searchBtn");
let container = document.querySelector(".container");
let img = document.querySelector(".img");
let info = document.querySelector(".info");
let cards = document.querySelector(".cards");


const movies = ["Iron Man", "Avengers", "Guardians of the Galaxy"];

let baseApiUrl = "https://www.omdbapi.com/?apikey=4e32e49b&t=";

function searchFunc() {
    info.innerHTML = "";
    img.innerHTML = "";

    let apiUrl = baseApiUrl + searchInput.value;

fetch(apiUrl).then(res => res.json()) .then(data => {

    let poster = document.createElement("img");
    poster.src = data.Poster;

    
    let title = document.createElement("p");
    title.textContent = data.Title;

    let year = document.createElement("p");
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
});
searchInput.value = "";
}

function enterKeyFunc(e) {
    if (e.keyCode == 13)
    searchFunc();
}
//click event
searchBtn.addEventListener("click", searchFunc);
//enter key event
window.addEventListener("keypress", (e) => {
    enterKeyFunc(e);
});

function defaultSearch(arr) {
    arr = movies;
    arr.map(movie => {
        fetch(`${baseApiUrl} + ${movie}`).then(res => res.json()).then(data => {
            console.log(data);

            let cardDiv = document.createElement("div");
            cardDiv.classList.add("card");

            let imgEl = document.createElement("img");
            imgEl.classList.add("card-img-top");
            imgEl.src = data.Poster;
            imgEl.style.width = "200px";

            let cardBodyDiv = document.createElement("div");
            cardBodyDiv.classList.add("card-body");
            
            let cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = data.Title;

            let cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = data.Year;

            cardBodyDiv.append(cardTitle, cardText);
            cardDiv.append(imgEl, cardBodyDiv);
            cards.appendChild(cardDiv);

        })
    })
}

//dom content loaded
window.addEventListener("DOMContentLoaded", defaultSearch);
window.addEventListener("load", () => {
    searchInput.focus();
})