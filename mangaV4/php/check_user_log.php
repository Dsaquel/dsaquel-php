<?php  
function checkUserLog() {
    if (isset($_SESSION['LOGGED_USER']['id'])) {
        return true;
    } else {
        return false;
    }
}


?>