import { ModalWindow, MyCustomModalWindow } from "./modal.js";

//TODO: Mettre une conditon concernant l'url sinon il y a une erreur
let modalCreateAccountError = new MyCustomModalWindow({
    show: true, // Show the modal on creation
    mode: null, // Disable modal mode, allow click outside to close
    headerColor: 'red',
    headerText: 'Error',
    htmlContent: 'Email ou pseudo déjà prit',
    theme: 'dark',
    onClose: (self) => {
        console.log('Another close hook...')
    }
})

modalCreateAccountError.setVisible(true);