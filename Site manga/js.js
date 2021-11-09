
document.getElementById("mail").addEventListener("click", function () {
    alert("noblet.ouwaysgta5@gmail.com");
});

document.getElementById("insta").addEventListener("click", function () {
    alert("None");
});

document.getElementById("telephone").addEventListener("click", function () {
    alert("0782424867");
});

function searchManga() {
    let input, filter, main, article, h2, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    main = document.getElementById("myMain");
    article = main.getElementsByTagName("article");
    for (i = 0; i < article.length; i++) {
        h2 = article[i].getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            article[i].style.display = "";
        } else {
            article[i].style.display = "none";
        }
    }
}

function readMore() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
let mangas = [
    {
        name: "One piece",
        link: "page1.html",
        image: "Picture/one_piece.jpg",
        text: "Vogue en mer",
        myButton: "En savoir plus",
    },
    {
        name: "Hunter x Hunter",
        link: "page2.html",
        image: "Picture/hxh.jpg",
        text: "grosse dinguerie",
        myButton: "En savoir plus",
    },
    {
        name:"Naruto",
        link: "page3.html",
        image: "Picture/naruto.jpg",
        text: "ninja",
        myButton: "En savoir plus",
    },
    {
        name:"Bleach",
        link: "page4.html",
        image: "Picture/bleach.jpg",
        text: "Shinigami vs hollow",
        myButton: "En savoir plus",
    },

];


function createManga(manga) {
    for (let i = 0; i < manga.length; i++) {
        let name = manga[i].name
        let link = manga[i].link
        let image = manga[i].image
        let text = manga[i].text
        let myButton = manga[i].myButton
        
        let h2 = document.createElement("h2")
        let a = document.createElement("a")
        let img = document.createElement("img")
        let p = document.createElement("p")
        let button = document.createElement("button")
        button.onclick = function() {
            window.location = a;
        }
        h2.innerHTML = name
        a.href = link
        img.src = image
        p.innerHTML = text
        button.innerHTML = myButton

        let article = document.createElement("article")
        let section = document.getElementById("sectionIndex")

        article.appendChild(h2)
        
        article.appendChild(a)
        a.appendChild(img)
        
        article.appendChild(p)
        article.appendChild(button)
        
        section.appendChild(article)


    };
};



createManga(mangas)