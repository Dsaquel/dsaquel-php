import { ModalWindow, MyCustomModalWindow } from "./modal.js";
const url_string = window.location.href;
const url = new URL(url_string);
const insertAnime = url.searchParams.get("insertAnime");
const deleteAnime = url.searchParams.get("deleteAnime");
if ({ insertAnime: insertAnime }.insertAnime == "true") {
    let modalInsertAnime = new MyCustomModalWindow({
        show: false, // Show the modal on creation
        mode: null, // Disable modal mode, allow click outside to close
        headerColor: '#5cb85c',
        headerText: 'Information',
        htmlContent: 'Anime insérer avec succès',
        theme: 'dark',
        onClose: (self) => {

        }
    })
    modalInsertAnime.setVisible(true);
}

if ({ deleteAnime: deleteAnime }.deleteAnime == "true") {
    console.log("toto")
    let modalDeleteAnime = new MyCustomModalWindow({
        show: false, // Show the modal on creation
        mode: null, // Disable modal mode, allow click outside to close
        headerColor: '#d9534f',
        headerText: 'Information',
        htmlContent: 'Anime supprimé',
        theme: 'dark',
        onClose: (self) => {

        }
    })
    modalDeleteAnime.setVisible(true);
}