import { ModalWindow, MyCustomModalWindow } from "./modal.js";
const url_string = window.location.href;
const url = new URL(url_string);
const islogged = url.searchParams.get("login");
const registration = url.searchParams.get("register");

if ({ login: islogged }.login == "true") {
    const modalLoginValid = new MyCustomModalWindow({
        show: false, // Show the modal on creation
        mode: null, // Disable modal mode, allow click outside to close
        headerColor: '#5cb85c',
        headerText: 'Bienvenue',
        htmlContent: '<p>Connecté</p>',
        theme: 'dark',
        onClose: (self) => {
            console.log('Another close hook...')
        }
    })
    modalLoginValid.setVisible(true);
}

if ({ login: islogged }.login == "false") {
    const modalLoginError = new MyCustomModalWindow({
        show: true, // Show the modal on creation
        mode: null, // Disable modal mode, allow click outside to close
        headerColor: '#d9534f',
        headerText: 'Erreur !',
        htmlContent: '<p>Identifiants incorrect</p>',
        theme: 'dark',
        onClose: (self) => {
            console.log('Another close hook...')
        }
    })
    modalLoginError.setVisible(true)
}
if ({ register: registration }.register == "true") {
    const res = await fetch("./includes/create_account_user.php");

    //TODO: Mettre une conditon concernant l'url sinon il y a une erreur
    let modalCreateAccountError = new MyCustomModalWindow({
        show: false, // Show the modal on creation
        mode: null, // Disable modal mode, allow click outside to close
        headerColor: 'green',
        headerText: 'Inscription',
        htmlContent: await res.text(),
        theme: 'dark',
        onClose: (self) => {
            console.log('Another close hook...')
        }
    })
    modalCreateAccountError.setVisible(true);
}