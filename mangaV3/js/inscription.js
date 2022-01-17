let currentTab = 0;
showTab(currentTab);

const lowerCaseLetters = /[a-z]/g;
const numbers = /[0-9]/g;
const upperCaseLetters = /[A-Z]/g;

function showTab(n) {

    let x = document.getElementsByClassName("tab");
    let y = document.getElementsByClassName("step");

    x[n].style.display = "block";

    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }

    if (n == 2) {
        function validate() {
            const email = document.getElementById('email').value;
            const emailFilter = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            let messageError = document.getElementsByClassName("message-error");
            ;
            if (!email.match(emailFilter)) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                y[n - 1].classList.remove("finish")
                y[n - 1].classList.add("uncompleted")
                messageError[n - 1].innerHTML = "Il ne faut pas mettre des caractères spéciaux"
                return nextPrev(-1);
            }
            return true;
        }
        return document.getElementById("nextBtn").click = validate()
    }
    if (n === 3) {
        function passwordVerify() {
            const password = document.getElementById("psw").value;
            const confirm_password = document.getElementById("confirm_password").value;
            let y = document.getElementsByClassName("step");
            let messageError = document.getElementsByClassName("message-error");

            if (!password.match(lowerCaseLetters)) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                y[n - 1].classList.remove("finish")
                y[n - 1].classList.add("uncompleted")
                messageError[n - 1].innerHTML = "Doit contenir minimum une minuscule"
                return nextPrev(-1);
            }

            else if (password.length <= 8) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                y[n - 1].classList.remove("finish")
                y[n - 1].classList.add("uncompleted")
                messageError[n - 1].innerHTML = "Doit etre supérieur à 8"
                return nextPrev(-1);
            }

            else if (!password.match(numbers)) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                y[n - 1].classList.remove("finish")
                y[n - 1].classList.add("uncompleted")
                messageError[n - 1].innerHTML = "Doit contenir minimum un chiffre"
                return nextPrev(-1);
            }

            else if (!password.match(upperCaseLetters)) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                y[n - 1].classList.remove("finish")
                y[n - 1].classList.add("uncompleted")
                messageError[n - 1].innerHTML = "Doit contenir minimum une majuscule"
                return nextPrev(-1);
            }

            else if (!(password == confirm_password)) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                y[n - 1].classList.remove("finish")
                y[n - 1].classList.add("uncompleted")
                messageError[n].innerHTML = "Il faut que ça soit égale au mdp"
                return nextPrev(-1);
            }
        }
        return document.getElementById("nextBtn").click = passwordVerify()
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    fixStepIndicator(n)

}

function nextPrev(n) {
    let x = document.getElementsByClassName("tab");
    if (n == 1 && !validateForm()) return false;
    x[currentTab].style.display = "none";
    currentTab = currentTab + n;
    if (currentTab >= x.length) {
        document.getElementById("regForm").submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() {
    let x, input, i, valid = true;
    x = document.getElementsByClassName("tab");
    input = x[currentTab].getElementsByTagName("input");
    let messageError = x[currentTab].getElementsByClassName("message-error");
    console.log(messageError)
    for (i = 0; i < input.length; i++) {
        if (input[i].value == "") {
            input[i].className += " invalid";
            messageError[i].innerHTML = "Faut pas que ça soit vide !"
            valid = false;
        }
    }

    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    } else {
        document.getElementsByClassName("step")[currentTab].className += " uncompleted";
    }
    return valid;
}

function fixStepIndicator(n) {
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
}


const password = document.getElementById("psw");
const letter = document.getElementById("letter");
const capital = document.getElementById("capital");
const number = document.getElementById("number");
const length = document.getElementById("length");


password.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

password.onblur = function () {
    document.getElementById("message").style.display = "none";
}

password.onkeyup = function () {
    if (password.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    if (password.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    if (password.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
function modalError() {
    const modal = document.getElementById('modal-error');
    const span = document.getElementsByClassName('close-modal')[0];

    modal.style.display = 'block';


    span.onclick = function () {
        modal.style.display = 'none';
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

if (window.location.href.length > 48){
    window.onload = modalError()
}