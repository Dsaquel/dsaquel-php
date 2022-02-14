const baseUrlApi = "https://api.jikan.moe/v4";
let currentUrl = window.location.pathname;
if (currentUrl == "/src/index.php") {
    window.location.replace("/src/");
}
function onPageLoaded() {
    if (currentUrl == "/src/app/library_user.php") {
        getUserAnime();
    } else {
        getTopAnimes();
        getCurrentFilter();
    }
}


function getAnimes(event) {
    event.preventDefault();
    const searchQuery = document.getElementById("search").value;
    getCurrentFilter(searchQuery);
    fetchData(`/anime?q=${searchQuery}&order_by=title&letter=${searchQuery}&sfw`, "data");
}

function filterGenre(num, page) {
    if (page === undefined) {
        page = '1';
    }
    fetchData(`/anime?genres=${num}?&order_by=score&sort=desc&sfw&page=${page}`, "data");
}

function seasonLater(num) {
    if (num === undefined) {
        num = 1;
    }
    let seasonLater = event.target.innerHTML;
    if (seasonLater === "Prochainement") {
        getCurrentFilter(seasonLater);
    }
    fetchData(`/seasons/upcoming?page=${parseInt(num)}`, "data");
}

async function getUserAnime() {
    const res = await fetch("../config/getData.php?route=userAnimes");
    const data = await res.json();
    for (let i = 0; i < data.sucess.length; i++) {
        let obj = data.sucess[i];
        for (let key in obj) {
            let manga = obj[key];
            fetchData(`/anime/${parseInt(manga)}`, "data");
        }
    }
}
function test(lastPage, currentPage) {
    const paginaton = document.getElementById("pagination");
    if (currentPage !== 1 && currentPage !== lastPage) {
        if (currentPage !== currentPage + 1 && currentPage !== lastPage - 1) {
            paginaton.innerHTML =
                `
           <a href="#">1</a>
           <a class="disable" href="#">...</a>
           <a href="#">${currentPage - 1}</a>
           <a class="active" href="#">${currentPage}</a>
           <a href="#">${currentPage + 1}</a>
           <a class="disable" href="#">...</a>
           <a href="#">${lastPage}</a>
               `
        }
    }
    if (currentPage === 1) {
        paginaton.innerHTML =
            `
        <a class="active" href="#">${currentPage}</a>
        <a href="#">${currentPage + 1}</a>
        <a href="#">${currentPage + 2}</a>
        <a class="disable" href="#">...</a>
        <a href="#">${lastPage - 2}</a>
        <a href="#">${lastPage - 1}</a>
        <a href="#">${lastPage}</a>
           `
    }
    if (currentPage === lastPage) {
        paginaton.innerHTML =
            `
        <a href="#">1</a>
       <a href="#">2</a>
       <a class="disable" href="#">...</a>
       <a href="#">${lastPage - 10}</a>
       <a href="#">${lastPage - 2}</a>
       <a href="#">${lastPage - 1}</a>
       <a class="active" href="#">${lastPage}</a>
           `
    }
    if (currentPage === 2) {
        paginaton.innerHTML =
            `
        <a href="#">1</a>
        <a class="active" href="#">${currentPage}</a>
        <a href="#">${currentPage + 1}</a>
        <a class="disable" href="#">...</a>
        <a href="#">${lastPage}</a>
           `
    }
    if (currentPage === lastPage - 1) {
        paginaton.innerHTML =
            `
       <a href="#">1</a>
       <a class="disable" href="#">...</a>
       <a href="#">${currentPage - 1}</a>
       <a class="active" href="#">${currentPage}</a>
       <a href="#">${currentPage + 1}</a>
           `
    }
}

function getCurrentPagination() {
    let currentFilter = document.getElementById("genderMangas");
    const paginaton = document.getElementById("pagination");
    paginaton.childNodes.forEach(child => {
        child.addEventListener("click", function () {
            if (currentFilter.innerHTML === "Prochainement") {
                seasonLater(child.textContent);
            }
            if (currentFilter.innerHTML === "Top anime") {
                getTopAnimes(child.textContent);
            }
            if (currentFilter.innerHTML === "Action") {
                filterGenre(1, child.textContent);
            }
            if (currentFilter.innerHTML === "Aventure") {
                filterGenre(2, child.textContent);
            }
            if (currentFilter.innerHTML === "Fantasy") {
                filterGenre(10, child.textContent);
            }
            if (currentFilter.innerHTML === "Supernatural") {
                filterGenre(37, child.textContent);
            }
            if (currentFilter.innerHTML === "Suspense") {
                filterGenre(41, child.textContent);
            }
            if (currentFilter.innerHTML === "Romance") {
                filterGenre(22, child.textContent);
            }
            if (currentFilter.innerHTML === "Sports") {
                filterGenre(30, child.textContent);
            }
        })
    });
}

function getTopAnimes(num) {
    if (num === undefined) {
        num = 1;
    }
    fetchData(`/top/anime?page=${parseInt(num)}`, "data");
}

async function fetchData(source, prop) {
    const loader = document.getElementById("loader")
    loader.style.display = "block";
    const res = await fetch(baseUrlApi + source);
    const data = await res.json();
    if (currentUrl === "/src/") {
        const url_string = res.url;
        const url = new URL(url_string);
        const page = url.searchParams.get("page");
        test(data.pagination.last_visible_page, parseInt(page));
        getCurrentPagination();
    }

    if (prop === undefined) {
        updateDom([data]);
    } else {
        updateDom(data[prop]);
    }
}

function updateDom(data) {
    const loader = document.getElementById("loader");
    const section = document.getElementById("section_index");
    if (currentUrl == "/src/app/library_user.php") {
        const mangasUser = document.getElementById('mangas');
        mangasUser.innerHTML += [data].map(anime => {
            if (anime.score === null) {
                anime.score = "?";
            }
            return `
                <div class="card article">
                    <div class="card-image">
                        <img src="${anime.images.webp.image_url}">
                    </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                    <p>Score: ${anime.score}/10</p>
                </div>
                    <button class="card-action button">
                        <a href="${anime.url}">Plus de détail</a>
                    </button>
                    <form class="" action="../config/delete_manga.php" method="post">
                        <input type="hidden" name="idManga" value="${anime.mal_id}">
                        <input type="submit" value="Supprimer">
                    </form>
                    
                </div>
            `
        }).join("")
    } else {
        const animesHTML = data.map((anime) => {
            return `
            <div class="card article">
                <div class="card-image">
                    <img src="${anime.images.webp.image_url}">
                </div>
                <div class="card-content">
                    <span class="card-title">${anime.title}</span>
                </div>
                <div class="card-action">
                    <button>
                        <a href="${anime.url}">Voir</a> 
                    </button>
                    <form action="config/manga_insert_library.php" method="POST">
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
    }
    loader.style.display = "none";
}
function displayLoginForm() {
    const x = document.getElementById("logForm");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible ";
    } else {
        x.style.visibility = "hidden ";
    }
}

function getCurrentFilter(filter) {
    const genders = document.getElementById("menus");
    let currentFilter = document.getElementById("genderMangas");
    genders.onclick = e => {
        currentFilter.innerHTML = e.target.innerText;
    }
    currentFilter.innerHTML = filter;
    if (filter === "Prochainement") {
        currentFilter.innerHTML = "Prochainement";
    } else if (filter === undefined) {
        currentFilter.innerHTML = "Top anime";
    }

}

async function getUserStatus() {
    const res = await fetch("./config/getData.php?route=getUserStatus");
    const data = await res.json();
    const buttons = document.getElementsByClassName("button");
    if (data.isLogged === false) {
        for (let button of buttons) {
            button.className = "button btnDisable";
        }
    }
}
window.addEventListener("load", onPageLoaded);