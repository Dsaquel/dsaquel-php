
document.getElementById("mail").addEventListener("click", function () {
    alert("noblet.ouwaysgta5@gmail.com");
});

document.getElementById("insta").addEventListener("click", function () {
    alert("None");
});

document.getElementById("telephone").addEventListener("click", function () {
    alert("0782424867");
});

function myFunction() {
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

function myFunction2() {
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

class FormData {
    constructor(email, name) {
        this.email = email
        this.name = name
    }
}


