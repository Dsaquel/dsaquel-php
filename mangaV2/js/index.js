function displayLogForm() {
    const x = document.getElementById("logForm");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
}



//Version 1

// const mangas = [
//     {
//         name: "One piece",
//         link: "detail_mangas/onepiece_detail.html",
//         image: "pictures/one_piece.jpg",
//         text: "Vogue en mer",
//         button: "En savoir plus",
//         genders: ["Action", "Fantasy"],
//     },
//     {
//         name: "Hunter x Hunter",
//         link: "detail_mangas/hunter_x_hunter_detail.html",
//         image: "pictures/hxh.jpg",
//         text: "grosse dinguerie",
//         button: "En savoir plus",
//         genders: ["Aventure", "Action"],
//     },
//     {
//         name: "Naruto",
//         link: "detail_mangas/naruto_detail.html",
//         image: "pictures/naruto.jpg",
//         text: "ninja",
//         button: "En savoir plus",
//         genders: ["Action", "Aventure"],
//     },
//     {
//         name: "Bleach",
//         link: "detail_mangas/bleach_detail.html",
//         image: "pictures/bleach.jpg",
//         text: "Shinigami vs hollow",
//         button: "En savoir plus",
//         genders: ["Action", "Fantasy"],
//     },
// ];

// function readMore() {
//     let dots = document.getElementById("dots");
//     let moreText = document.getElementById("more");
//     let btnText = document.getElementById("myBtn");

//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "Read more";
//         moreText.style.display = "none";
//     } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "Read less";
//         moreText.style.display = "inline";
//     }
// }

// function createMangas(mangas) {
//     removeMangas()
//     for (let i = 0; i < mangas.length; i++) {
//         let name = mangas[i].name
//         let link = mangas[i].link
//         let image = mangas[i].image
//         let text = mangas[i].text
//         let button = mangas[i].button

//         let h2 = document.createElement("h2")
//         let a = document.createElement("a")
//         let img = document.createElement("img")
//         let p = document.createElement("p")
//         let button = document.createElement("button")
//         button.onclick = function () {
//             window.location = a;
//         }
//         h2.innerHTML = name
//         a.href = link
//         img.src = image
//         p.innerHTML = text
//         button.innerHTML = button

//         let article = document.createElement("article")
//         let section = document.getElementById("sectionIndex")

//         article.appendChild(h2)

//         article.appendChild(a)
//         a.appendChild(img)

//         article.appendChild(p)
//         article.appendChild(button)

//         section.appendChild(article)


//     };
// };

// function searchManga() {
//     let input, filter, main, article, h2, i, txtValue;
//     input = document.getElementById("search");
//     filter = input.value.toUpperCase();
//     main = document.getElementsByTagName("main");
//     article = main.getElementsByTagName("article");
//     for (i = 0; i < article.length; i++) {
//         h2 = article[i].getElementsByTagName("h2")[0];
//         txtValue = h2.textContent || h2.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             article[i].style.display = "";
//         } else {
//             article[i].style.display = "none";
//         }
//     }
// }

// function removeMangas() {
//     const mainSection = document.getElementById("sectionIndex");
//     while (mainSection.firstChild) {
//         mainSection.removeChild(mainSection.lastChild);
//     }
// }

// function filterMangas(elementClicked) {
//     const gender = elementClicked.textContent
//     const mangasFiltered = mangas.filter(function (manga) {
//         return manga.genders.includes(gender)
//     })
//     createMangas(mangasFiltered)
// }

// document.getElementById("insta").addEventListener("click", function () {
//     alert("none");
// });

// document.getElementById("telephone").addEventListener("click", function () {
//     alert("0782424867");
// });

