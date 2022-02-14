<?php
session_start();
include_once('../db/login_database.php');
$manga = $_POST['mangaId'];
$userId = $_SESSION['LOGGED_USER']['id'];

if (isset($userId) && isset($manga)) {
    $insertMangaQuery = "INSERT INTO user_mangas (manga_id, user_id) VALUES (:manga, :userId)";
    $insertManga = $mysqlClient->prepare($insertMangaQuery);
    $insertManga->execute([
        'manga' => $manga,
        'userId' => $userId,
    ]);
    header('Location: ../app/library_user.php?insertAnime=true');

} else {
    header('location: ../index.php');
}
?>



<!-- TODO: Delete ? -->
<!-- check if manga insert before return error-->
<!-- if ($num_rows_manga == 0) {} -->
<!-- $checkManga = $mysqlClient->prepare('SELECT manga_id FROM user_mangas WHERE manga_id=:manga');
$checkManga->execute(array(
    'manga_id' => $manga,
)) or die(print_r($checkManga->errorInfo()));
$num_rows_manga = $checkManga->rowCount();
echo $num_rows_manga; -->