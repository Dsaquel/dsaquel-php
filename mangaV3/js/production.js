onload = function () {
    const modal = document.getElementsByClassName("modal");
    modal.style.display = "block";
}

document.querySelector('#mon-bouton').addEventListener('click', function(event) {
    console.log(event.target);
});

