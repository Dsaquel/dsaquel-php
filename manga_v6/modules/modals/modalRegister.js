import { ModalWindow, MyCustomModalWindow } from "./modal.js";
const formInscription = document.getElementById("registration").innerHTML;
//TODO: Mettre une conditon concernant l'url sinon il y a une erreur
let modalCreateAccountError = new MyCustomModalWindow({
    show: true, // Show the modal on creation
    mode: null, // Disable modal mode, allow click outside to close
    headerColor: 'red',
    headerText: 'Error',
    htmlContent: formInscription,
    theme: 'dark',
    onClose: (self) => {
        
    }
})

modalCreateAccountError.setVisible(true);