this.onkeyup = e => {
    if (e.target.placeholder === undefined) {
        return;
    } else {
        e.target.previousElementSibling.innerHTML = e.target.placeholder;
    }
}

const icons = document.querySelectorAll("i.far").forEach(icon => {
    icon.onclick = f => {
        const type = f.target.previousElementSibling.getAttribute('type') === 'password' ? 'text' : 'password';
        f.target.previousElementSibling.setAttribute('type', type);
        f.target.classList.toggle("fa-eye-slash");
    }
});

const inputs = document.querySelectorAll("input").forEach(input => {
    input.addEventListener("blur", function () {
        const email = document.getElementById('email');
        const password = document.getElementById("psw");
        const passwordMessage = document.getElementById("pswError");
        const confirmPassword = document.getElementById("confirm_password");
        const confirmPasswordMessage = document.getElementById("confirmPswError");
        const emailFilter = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const lowerCaseLetters = /[a-z]/g;
        const numbers = /[0-9]/g;
        const upperCaseLetters = /[A-Z]/g;
        if (input.value.length > 1 && input !== password && input !== confirmPassword) {
            input.className = "login-box__form-input valid";
            input.nextElementSibling.innerHTML = "";
        } else if(input !== password && input !== confirmPassword){
            input.className = "login-box__form-input invalid";
            input.nextElementSibling.innerHTML = "Pas vide !";
        }

        if (input == email && email.value.match(emailFilter)) {
            email.className = "login-box__form-input valid";
            email.nextElementSibling.innerHTML = "";
        }
        else if (input == email && !email.value.match(emailFilter)) {
            email.className = "login-box__form-input invalid";
            email.nextElementSibling.innerHTML = "Email invalide";
        }

        if (input == password) {
            switch (true) {
                case (!password.value.match(lowerCaseLetters)):
                    password.className = "login-box__form-input invalid";
                    passwordMessage.innerHTML = "Doit contenir minimum une minuscule";
                    break;
                case (password.value.length < 8):
                    password.className = "login-box__form-input invalid";
                    passwordMessage.innerHTML = "Doit etre supérieur à 8";
                    break;
                case (!password.value.match(numbers)):
                    password.className = "login-box__form-input invalid";
                    passwordMessage.innerHTML = "Doit contenir minimum un chiffre";
                    break;
                case (!password.value.match(upperCaseLetters)):
                    password.className = "login-box__form-input invalid";
                    passwordMessage.innerHTML = "Doit contenir minimum une majuscule";

                    break;
                default:
                    password.className = "login-box__form-input valid";
                    passwordMessage.innerHTML = "";
            }
        }
        if (input == confirmPassword && password.value == confirmPassword.value) {
            confirmPassword.className = "login-box__form-input valid";
            confirmPasswordMessage.innerHTML = "";
        } else if (input == confirmPassword && !(password.value == confirmPassword.value)) {
            confirmPassword.className = "login-box__form-input invalid";
            confirmPasswordMessage.innerHTML = "Il faut que ça soit egale au mdp bgg";
        }
    });
})

const modal = document.getElementById("modal-error");
const span = document.getElementsByClassName("close-modal")[0];
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}