import { ModalWindow, MyCustomModalWindow } from "./modal.js";
const url_string = window.location.href;
const url = new URL(url_string);
const parameter = url.searchParams.get("login");

if ({ login: parameter }.login == "true") {
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

if ({ login: parameter }.login == "false") {
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