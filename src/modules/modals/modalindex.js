import { ModalWindow, MyCustomModalWindow } from "./modal.js";
const url_string = window.location.href;
const url = new URL(url_string);
const islogged = url.searchParams.get("login");
const registration = url.searchParams.get("register");
const accountDesactived = url.searchParams.get("account");

if ({ login: islogged }.login == "true") {
    const modalLoginValid = new MyCustomModalWindow({
        show: false, // Show the modal on creation
        mode: null, // Disable modal mode, allow click outside to close
        headerColor: '#5cb85c',
        headerText: 'Bienvenue',
        htmlContent: '<p>Connecté</p>',
        theme: 'dark',
        onClose: (self) => {
            
        }
    })
    modalLoginValid.setVisible(true);
}

if ({ login: islogged }.login == "false") {
    const modalLoginError = new MyCustomModalWindow({
        show: false, // Show the modal on creation
        mode: null, // Disable modal mode, allow click outside to close
        headerColor: '#d9534f',
        headerText: 'Erreur !',
        htmlContent: '<p>Identifiants incorrects</p>',
        theme: 'dark',
        onClose: (self) => {
            
        }
    })
    modalLoginError.setVisible(true)
}
if ({ register: registration }.register == "true") {
    const res = await fetch("./components/create_account_user.php");
    let modalCreateAccountError = new MyCustomModalWindow({
        show: false, // Show the modal on creation
        mode: null, // Disable modal mode, allow click outside to close
        headerColor: '#5cb85c',
        headerText: 'Inscription',
        htmlContent: await res.text(),
        theme: 'dark',
        styleContent: 'flex',
        onClose: (self) => {
            
        }
    })
    modalCreateAccountError.setVisible(true);
}
if ({ register: registration }.register == "false") {
    const registerError = new MyCustomModalWindow({
        show: false, // Show the modal on creation
        mode: null, // Disable modal mode, allow click outside to close
        headerColor: '#d9534f',
        headerText: 'Erreur !',
        htmlContent: '<p>Identifiants déjà prit</p>',
        theme: 'dark',
        onClose: (self) => {
            
        }
    })
    registerError.setVisible(true)
}

if ({ account: accountDesactived }.account == "desactived") {
    const res = await fetch("./components/recup_account.php");
    let modalCreateAccountError = new MyCustomModalWindow({
        show: false, // Show the modal on creation
        mode: null, // Disable modal mode, allow click outside to close
        headerColor: '#d9534f',
        headerText: 'Recuperation de compte',
        htmlContent: await res.text(),
        theme: 'dark',
        onClose: (self) => {
            
        }
    })
    modalCreateAccountError.setVisible(true);
}

if ({ account: accountDesactived }.account == "active") {
    const res = await fetch("./components/recup_account.php");
    let modalCreateAccountError = new MyCustomModalWindow({
        show: false, // Show the modal on creation
        mode: null, // Disable modal mode, allow click outside to close
        headerColor: '#5cb85c',
        headerText: 'Recuperation de compte',
        htmlContent: 'compte recupere avec succès',
        theme: 'dark',
        onClose: (self) => {
            
        }
    })
    modalCreateAccountError.setVisible(true);
}

//modal registration condition
const icons = document.querySelectorAll("i.far").forEach(icon => {
    icon.onclick = f => {
        const type = f.target.previousElementSibling.getAttribute('type') === 'password' ? 'text' : 'password';
        f.target.previousElementSibling.setAttribute('type', type);
        f.target.classList.toggle("fa-eye-slash");
    }
});

const inputs = document.querySelectorAll("#registration input").forEach(input => {
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
            input.className = "register-box__form-input valid";
            input.nextElementSibling.innerHTML = "";
            input.nextElementSibling.style.visibility = "hidden"
        } else if (input !== password && input !== confirmPassword) {
            input.className = "register-box__form-input invalid";
            input.nextElementSibling.innerHTML = "Pas vide !";
            input.nextElementSibling.style.visibility = "visible"
        }

        if (input == email && email.value.match(emailFilter)) {
            email.className = "register-box__form-input valid";
            email.nextElementSibling.innerHTML = "";
            email.nextElementSibling.style.visibility = "hidden"
        }
        else if (input == email && !email.value.match(emailFilter)) {
            email.className = "register-box__form-input invalid";
            email.nextElementSibling.innerHTML = "Email invalide";
            email.nextElementSibling.style.visibility = "visible"
        }

        if (input == password) {
            switch (true) {
                case (!password.value.match(lowerCaseLetters)):
                    password.className = "register-box__form-input invalid";
                    passwordMessage.innerHTML = "Doit contenir minimum une minuscule";
                    passwordMessage.style.visibility = "visible"
                    break;
                case (password.value.length < 8):
                    password.className = "register-box__form-input invalid";
                    passwordMessage.innerHTML = "Doit etre supérieur à 8";
                    passwordMessage.style.visibility = "visible"
                    break;
                case (!password.value.match(numbers)):
                    password.className = "register-box__form-input invalid";
                    passwordMessage.innerHTML = "Doit contenir minimum un chiffre";
                    passwordMessage.style.visibility = "visible"
                    break;
                case (!password.value.match(upperCaseLetters)):
                    password.className = "register-box__form-input invalid";
                    passwordMessage.innerHTML = "Doit contenir minimum une majuscule";
                    passwordMessage.style.visibility = "visible"
                    break;
                default:
                    password.className = "register-box__form-input valid";
                    passwordMessage.innerHTML = "";
                    passwordMessage.style.visibility = "hidden"
            }
        }
        if (input == confirmPassword && password.value == confirmPassword.value) {
            confirmPassword.className = "register-box__form-input valid";
            confirmPasswordMessage.innerHTML = "";
            confirmPasswordMessage.style.visibility = "hidden";
        } else if (input == confirmPassword && !(password.value == confirmPassword.value)) {
            confirmPassword.className = "register-box__form-input invalid";
            confirmPasswordMessage.innerHTML = "Il faut que ça soit egale au mdp bgg";
            confirmPasswordMessage.style.visibility = "visible";
        }
    });
    input.onkeyup = e => {
        if (e.target.placeholder === undefined) {
            return;
        } else {
            e.target.previousElementSibling.innerHTML = e.target.placeholder;
        }
    }
})