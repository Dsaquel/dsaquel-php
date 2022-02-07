function compte_a_rebours() {
    const compte_a_rebours = document.getElementById("compte_a_rebours");

    const date_actuelle = new Date();
    const date_evenement = new Date("February 22 00:00:00 2022");
    const total_secondes = (date_evenement - date_actuelle) / 1000;

    const prefixe = "Mise à jour du site dans ";
    if (total_secondes < 0) {
        prefixe = "Compte à rebours terminé il y a ";
        total_secondes = Math.abs(total_secondes); 
    }

    if (total_secondes > 0) {
        let days = Math.floor(total_secondes / (60 * 60 * 24));
        let heures = Math.floor((total_secondes - (days * 60 * 60 * 24)) / (60 * 60));
        minutes = Math.floor((total_secondes - ((days * 60 * 60 * 24 + heures * 60 * 60))) / 60);
        secondes = Math.floor(total_secondes - ((days * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));

        let and = "et";
        let word_day = "jours,";
        let word_heure = "heures,";
        let word_minute = "minutes,";
        let word_seconde = "secondes";

        if (days == 0) {
            days = '';
            word_day = '';
        }
        else if (days == 1) {
            word_day = "jour,";
        }

        if (heures == 0) {
            heures = '';
            word_heure = '';
        }
        else if (heures == 1) {
            word_heure = "heure,";
        }

        if (minutes == 0) {
            minutes = '';
            word_minute = '';
        }
        else if (minutes == 1) {
            word_minute = "minute,";
        }

        if (secondes == 0) {
            secondes = '';
            word_seconde = '';
            and = '';
        }
        else if (secondes == 1) {
            word_seconde = "seconde";
        }

        if (minutes == 0 && heures == 0 && days == 0) {
            and = "";
        }

        compte_a_rebours.innerHTML = prefixe + days + ' ' + word_day + ' ' + heures + ' ' + word_heure + ' ' + minutes + ' ' + word_minute + ' ' + and + ' ' + secondes + ' ' + word_seconde;
    }
    else {
        compte_a_rebours.innerHTML = 'TIC TAC TIC TAC';
    }

    var actualisation = setTimeout("compte_a_rebours();", 1000);
}
compte_a_rebours();