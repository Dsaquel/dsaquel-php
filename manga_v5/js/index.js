const baseUrlApi = "https://api.jikan.moe/v3";
let currentUrl = window.location.pathname;
if (currentUrl == "/manga_v5/index.php") {
    window.location.replace("/manga_v5/");
}
function onPageLoaded() {
    if (currentUrl == "/manga_v5/") {
        getTopAnimes();
        getCurrentFilter();
    } else {
        getUserAnime();
    }
}

function getTopAnimes() {
    fetchData("/top/anime/1/tv", "top");
}

function getAnimes(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("search").value;
    getCurrentFilter(searchQuery);
    fetchData(`/search/anime?q=${searchQuery}&page=1`, "results");
}

function filterGenre(num) {
    fetchData(`/genre/anime/${num}/1`, "anime");
}

function seasonLater() {
    fetchData("/season/later", "anime");
    getCurrentFilter(event.target.innerHTML)
}

async function fetchData(source, prop) {
    const res = await fetch(baseUrlApi + source);
    const data = await res.json();
    if (prop === undefined) {
        updateDom([data]);
    } else {
        updateDom(data[prop]);
    }
}

async function getUserAnime() {
    const res = await fetch("../php/getData.php?route=userAnimes");
    const data = await res.json();
    for (let i = 0; i < data.sucess.length; i++) {
        let obj = data.sucess[i];
        for (let key in obj) {
            let manga = obj[key];
            fetchData(`/anime/${parseInt(manga)}`);
        }
    }
}

function updateDom(data) {
    const section = document.getElementById("section_index");
    if (currentUrl == "/manga_v5/") {
        const animesHTML = data.map((anime) => {
            return `
            <div class="card article">
                <div class="card-image">
                    <img src="${anime.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                </div>
                <div class="card-action">
                    <button>
                        <a href="${anime.url}">Voir</a>
                    </button>
                    <form action="php/manga_insert_library.php" method="POST">
                        <input type="text" style="display:none" name="mangaId" value="${anime.mal_id}">
                        <button type="submit" class="button" value="submit">Ajouter à la bibliothèque</button>
                    </form>
                </div>
                
            </div>
            `;
        });

        section.innerHTML = `
            <section>
                <div id="mangas" class="dsaquel-row">${animesHTML.join("")}</div>
            </section>
        `;
        getUserStatus();
    } else {
        const mangasUser = document.getElementById('mangas');
        mangasUser.innerHTML += (data).map(anime => {
            return `
                <div class="card article">
                    <div class="card-image">
                        <img src="${anime.image_url}">
                    </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>Score: ${anime.score}/10</p>
                </div>
                    <button class="card-action button">
                        <a href="${anime.url}">Plus de détail</a>
                    </button>
                    <form class="" action="../php/delete_manga.php" method="post">
                        <input type="hidden" name="idManga" value="${anime.mal_id}">
                        <input type="submit" value="Supprimer">
                    </form>
                    
                </div>
            `
        }).join("")
    }

}


function displayLoginForm() {
    const x = document.getElementById("logForm");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible ";
    } else {
        x.style.visibility = "hidden ";
    }
}


const messageModal = {
    errorConnexion: "Email ou mdp incorrect",
    needConnexion: "Vous devez être connecté pour accéder à cette fonctionnalité.",
    sucessConnexion: "Bienvenue sur mon site !!",
}
function getCurrentFilter(filter) {
    const genders = document.getElementById("menus")
    let currentFilter = document.getElementById("genderMangas")
    genders.onclick = e => {
        currentFilter.innerHTML = e.target.innerText;
    }
    currentFilter.innerHTML = filter;
    if (filter === "Prochainement") {
        currentFilter.innerHTML = "Prochainement"
    } else if (filter === undefined) {
        currentFilter.innerHTML = "Top manga"
    }
}

async function getUserStatus() {
    const res = await fetch("./php/getData.php?route=getUserStatus");
    const data = await res.json();
    const buttons = document.getElementsByClassName("button");
    if (data.isLogged === false) {
        for (let button of buttons) {
            button.className = "button btnDisable";
        }
    }
}


// TODO: delete ?
// const messageModal = {
//     errorConnexion: "Email ou mdp incorrect",
//     needConnexion:"Vous devez être connecté pour accéder à cette fonctionnalité.",
//     sucessConnexion: "Bienvenue sur mon site !!",
// }

// TODO: return modal if user logged or entry data user incorrect
// function modal(prop, message) {
//     let valid = false;
//     let error = false;
//     const modal = document.getElementById("modal-error");
//     const span = document.getElementsByClassName("close-modal")[0];
//     const color = document.getElementById("modal-header");
//     const messageContent = document.getElementById("error-message");
//     let display = modal.style.display;
//     let backgroundColor = color.style.backgroundColor
//     let textContent = messageModal
//     if (prop) {
//         display = "block";
//         backgroundColor = "green";
//         textContent = messageModal.message
//     }
//     window.onclick = function (event) {
//         if (event.target == modal) {
//             display = 'none';
//         }
//     }
//     span.onclick = function () {
//         display = 'none';
//     }
// }

window.addEventListener("load", onPageLoaded);
