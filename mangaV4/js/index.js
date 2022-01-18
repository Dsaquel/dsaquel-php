function displayLogForm() {
    const x = document.getElementById("logForm");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
}

function modalError (){
    const mangasFuture = document.getElementById('mangasFuture');
    const modal = document.getElementById('modal-error');
    const span = document.getElementsByClassName('close-modal')[0];
    
    mangasFuture.onclick = function () {
        modal.style.display = 'block';
    }
    
    span.onclick = function () {
        modal.style.display = 'none';
    }
    
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}
