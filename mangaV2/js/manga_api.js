// load page
function searchLoad(event){

    event.preventDefault();

    fetch(`https://private-anon-e782c7cc9f-jikan.apiary-proxy.com/v3/top/anime/1/tv`)
    .then(res=>res.json())
    .then(updateDomLoad)
    .catch(err=>console.warn(err.message));
}

function updateDomLoad(data){

    const section = document.getElementById('section_index');

    const animeByCategories = data.top
        .reduce((acc, anime)=>{

            const {type} = anime;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});

        section.innerHTML = Object.keys(animeByCategories).map(key=>{

            const animesHTML = animeByCategories[key]
            .sort((a,b)=>a.episodes-b.episodes)
            .map(anime=>{
                return `
                <div class="card article">
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>Sortie en ${anime.start_date}</p>
                </div>
                <button class="card-action button">
                    <a href="${anime.url}">Voir</a>
                </button>
                <button onclick="getIdManga()" class="card-action button">
                    <a href="#">Ajouter</a>
                </button>
            </div>
                `
            }).join("");


            return `
                <section>
                    <h3>${key.toUpperCase()}</h3>
                    <div id="loaded" class="dsaquel-row">${animesHTML}</div>
                </section>
            `
        }).join("");
}
window.addEventListener("load", searchLoad);

// search anime
const base_url = "https://api.jikan.moe/v3";


function searchAnime(event) {

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

    fetch(`${base_url}/search/manga?q=${query}&page=1`)
        .then(res => res.json())
        .then(updateDom)
        .catch(err => console.warn(err.message));
}


function updateDom(data) {

    const searchResults = document.getElementById('section_index');

    const animeByCategories = data.results
        .reduce((acc, anime) => {
            const { type } = anime;
            if (acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});

    searchResults.innerHTML = Object.keys(animeByCategories).map(key => {
        console.log(animeByCategories)
        const animesHTML = animeByCategories[key]
            .sort((a, b) => a.episodes - b.episodes)
            .map(anime => {
                return `
                    <div class="card article">
                        <div class="card-image">
                            <img src="${anime.image_url}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${anime.title}</span>
                            <p>${anime.synopsis}</p>
                        </div>
                        <button class="card-action button">
                            <a href="${anime.url}">Voir</a>
                        </button>
                        <button onclick="getIdManga()" class="card-action button">
                            <a href="#">Ajouter</a>
                        </button>
                    </div>
                `
            }).join("");
        return `
                <section>
                    <h3>${key.toUpperCase()}</h3>
                    <div class="dsaquel-row">${animesHTML}</div>
                </section>
            `
    }).join("");
}

function pageLoaded() {
    const form = document.getElementById("search_form");
    form.addEventListener("submit", searchAnime);
}

window.addEventListener("load", pageLoaded);


// Objectif : diviser le code /2 car le code se répète beaucoup