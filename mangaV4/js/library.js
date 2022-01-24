// need condition to display

const baseUrlApi = "https://api.jikan.moe/v3";

async function getUserMangas() {
    const res = await fetch("../php/getData.php?route=userAnimes");
    const data = await res.json();
    console.log(data)
    for (let i = 0; i < data.sucess.length; i++) {
        let obj = data.sucess[i];
        for (let key in obj) {
            let manga = obj[key];
            console.log(manga)
            fetchData(`/anime/${parseInt(manga)}`);
        }
    }
}
getUserMangas()

async function fetchData(source) {
    const res = await fetch(baseUrlApi + source);
    const data = await res.json();
    updateDom([data]);
}


function updateDom(data) {
    const mangasUser = document.getElementById('loaded');
    const animeByCategories = data
    mangasUser.innerHTML += (animeByCategories).map(anime => {
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