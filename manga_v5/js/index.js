const baseUrlApi = "https://api.jikan.moe/v3";

function onPageLoaded() {
    getTopAnimes();
}

function getTopAnimes() {
    fetchData("/top/anime/1/tv", "top");
}

function getAnimes(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("search").value;
    fetchData(`/search/anime?q=${searchQuery}&page=1`, "results");
}

function filterGenre(num) {
    fetchData(`/genre/anime/${num}/1`, "anime");
}

function seasonLater() {
    fetchData("/season/later", "anime");
}

function mangaUser(mangas) {
    for (manga of mangas) {
        fetchData(`/anime/${parseInt(manga.manga_id)}`);
    };
}

async function fetchData(source, prop) {
    const res = await fetch(baseUrlApi + source);
    const data = await res.json();
    updateDom(data[prop]);
    //TODO: fetch on manga of user
    // const res = await Promise.all([baseUrlApi + source])
    // const data = await res.json();
}

function updateDom(data) {
    const section = document.getElementById("section_index");

    const animesHTML = data.map((anime) => {
        return `
        <div class="card article">
            <div class="card-image">
                <img src="${anime.image_url}">
            </div>
            <div class="card-content">
                <span class="card-title">${anime.title}</span>
            </div>
            <button class="card-action button">
                <a href="${anime.url}">Voir</a>
            </button>
            <form action="php/manga_insert_library.php" method="POST">
                <input type="text" style="display:none" name="mangaId" value="${anime.mal_id}">
                <button type="submit" class="card-action button" value="submit">Ajouter à la bibliothèque</button>
            </form>
        </div>
        `;
    });

    section.innerHTML = `
        <section>
            <div id="loaded" class="dsaquel-row">${animesHTML.join("")}</div>
        </section>
    `;
}

function displayLogForm() {
    const x = document.getElementById("logForm");
    if (x.style.visibility === "visible") {
        x.style.visibility = "hidden ";
    } else {
        x.style.visibility = "visible ";
    }
}

function modalError() {
    const modal = document.getElementById("modal-error");
    const span = document.getElementsByClassName("close-modal")[0];
    console.log(modal)
    if(modal.className === "modal"){
        modal.style.display = "block";
    }
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    span.onclick = function () {
        modal.style.display = 'none';
    }
}


window.addEventListener("load", onPageLoaded);
