import { ModalWindow, MyCustomModalWindow } from "./modal.js";

const url_string = window.location.href;
const url = new URL(url_string);
const parameter = url.searchParams.get("login");
if ({ login: parameter }.login === null || { login: parameter }.login == "false") {
    if (document.querySelector('#showInformation')) {
        document.querySelector('#showInformation').addEventListener('click', (e) => {
            const modalLibraryAddingAnime = new MyCustomModalWindow({
                show: false, // Show the modal on creation
                mode: null, // Disable modal mode, allow click outside to close
                headerColor: '#f0ad4e',
                headerText: 'Information',
                htmlContent: '<p>Connecte toi pour pouvoir ajouter des animes à ta bibliotheque</p>',
                theme: 'dark',
                onClose: (self) => {
                    
                }
            })
            modalLibraryAddingAnime.setVisible(true);
        })
    }

}