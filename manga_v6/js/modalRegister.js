import { ModalWindow, MyCustomModalWindow } from "./modal.js";

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