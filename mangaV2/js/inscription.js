let currentTab = 0;
showTab(currentTab);

const lowerCaseLetters = /[a-z]/g;
const numbers = /[0-9]/g;
const upperCaseLetters = /[A-Z]/g;

function showTab(n) {

    let x = document.getElementsByClassName("tab");
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
            ;
            if (!email.match(emailFilter)) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                return nextPrev(-1);
            }
            return true;
        }
        console.log(validate())

        document.getElementById("nextBtn").click = validate
    }
    if (n === 3) {
        function passwordVerify() {
            const password = document.getElementById("psw").value;
            const confirm_password = document.getElementById("confirm_password").value;

            if (!password.match(lowerCaseLetters)) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                return nextPrev(-1);

            }

            else if (password.length <= 8) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                return nextPrev(-1);

            }

            else if (!password.match(numbers)) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                return nextPrev(-1);

            }

            else if (!password.match(upperCaseLetters)) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                return nextPrev(-1);

            }

            else if (!(password == confirm_password)) {
                x[n].style.display = "none";
                x[n - 1].style.display = "block";
                return nextPrev(-1);
            }
        }
        console.log(passwordVerify())
        document.getElementById("nextBtn").click = passwordVerify
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
    for (i = 0; i < input.length; i++) {
        if (input[i].value == "") {
            input[i].className += " invalid";
            valid = false;
        }
    }

    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) {
    let i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
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