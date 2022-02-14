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
    const paginaton = document.getElementById("pagination");
    paginaton.style.display = "none"
    event.preventDefault();
    const searchQuery = document.getElementById("search").value;
    getCurrentFilter(searchQuery);
    fetchData(`/anime?q=${searchQuery}&order_by=title&letter=${searchQuery}&sfw`, "data");
}

function filterGenre(num, page) {
    const paginaton = document.getElementById("pagination");
    paginaton.style.display = "block"
    if (page === undefined) {
        page = '1';
    }
    fetchData(`/anime?genres=${num}?&order_by=score&sort=desc&sfw&page=${page}`, "data");
}

function seasonLater(num) {
    const paginaton = document.getElementById("pagination");
    paginaton.style.display = "block"
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

const Pagination = {

    code: '',

    Extend: function(data) {
        data = data || {};
        Pagination.size = data.size || 800;
        Pagination.page = data.page || 1;
        Pagination.step = data.step || 3;
    },

    Add: function(s, f) {
        for (let i = s; i < f; i++) {
            Pagination.code += '<a>' + i + '</a>';
        }
    },

    Last: function() {
        Pagination.code += '<i>...</i><a>' + Pagination.size + '</a>';
    },

    First: function() {
        Pagination.code += '<a>1</a><i>...</i>';
    },

    Click: function() {
        Pagination.page = +this.innerHTML;
        Pagination.Start();
    },

    Bind: function() {
        const a = Pagination.e.getElementsByTagName('a');
        for (let i = 0; i < a.length; i++) {
            if (+a[i].innerHTML === Pagination.page) a[i].className = 'current';
            a[i].addEventListener('click', Pagination.Click, false);
        }
    },

    Finish: function() {
        Pagination.e.innerHTML = Pagination.code;
        Pagination.code = '';
        Pagination.Bind();
    },

    Start: function() {
        if (Pagination.size < Pagination.step * 2 + 6) {
            Pagination.Add(1, Pagination.size + 1);
        }
        else if (Pagination.page < Pagination.step * 2 + 1) {
            Pagination.Add(1, Pagination.step * 2 + 4);
            Pagination.Last();
        }
        else if (Pagination.page > Pagination.size - Pagination.step * 2) {
            Pagination.First();
            Pagination.Add(Pagination.size - Pagination.step * 2 - 2, Pagination.size + 1);
        }
        else {
            Pagination.First();
            Pagination.Add(Pagination.page - Pagination.step, Pagination.page + Pagination.step + 1);
            Pagination.Last();
        }
        Pagination.Finish();
    },

    Buttons: function(e) {
        const nav = e.getElementsByTagName('a');
    },

    Create: function(e) {

        const html = [
            '<span id="paginationNumber"></span>',
        ];

        e.innerHTML = html.join('');
        Pagination.e = e.getElementsByTagName('span')[0];
        Pagination.Buttons(e);
    },

    Init: function(e, data) {
        Pagination.Extend(data);
        Pagination.Create(e);
        Pagination.Start();
    }
};

const init = function(last_visible_page, currentPage) {
    Pagination.Init(document.getElementById('pagination'), {
        size: last_visible_page,
        page: currentPage,
        step: 3
    });
};


function getCurrentPagination() {
    let currentFilter = document.getElementById("genderMangas");
    const paginaton = document.getElementById("paginationNumber");
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
    const paginaton = document.getElementById("pagination");
    paginaton.style.display = "block"
    if (num === undefined) {
        num = 1;
    }
    fetchData(`/top/anime?page=${parseInt(num)}`, "data");
}

async function fetchData(source, prop) {
    const loader = document.getElementById("loader");
    loader.style.display = "block";
    const res = await fetch(baseUrlApi + source);
    const data = await res.json();
    if (currentUrl === "/src/") {
        const url_string = res.url;
        const url = new URL(url_string);
        const page = url.searchParams.get("page");
        init(data.pagination.last_visible_page, parseInt(page));
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