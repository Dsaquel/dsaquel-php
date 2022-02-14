<?php

include_once('../db/login_database.php');

if (isset($_POST['idManga'])) {
    $idManga = $_POST['idManga'];

    $delete_manga = $mysqlClient->prepare('DELETE from user_mangas where manga_id = :idManga');
    $delete_manga->execute(
        [
            'idManga' => $idManga,
        ]
    );

    if ($delete_manga->execute()) {
        header('Location: ../app/library_user.php?deleteAnime=true');
    }
}
?>

