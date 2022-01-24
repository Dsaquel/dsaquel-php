<?php

include_once('../database/log_database.php');

if (isset($_POST['idManga'])) {
    $idManga = $_POST['idManga'];

    $delete_manga = $mysqlClient->prepare('DELETE from user_mangas where manga_id = :idManga');
    $delete_manga->execute(
        [
            'idManga' => $idManga,
        ]
    );

    if ($delete_manga->execute()) {
        echo '<script language="javascript">';
        echo 'alert("Manga suprimé bg "); location.href="../app/library.php"';
        echo '</script>';
    }
}
?>

