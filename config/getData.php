<?php
session_start();

include("../db/login_database.php");


function userAnimes($mysqlClient)
{
    $userId = $_SESSION['LOGGED_USER']['id'];
    if (isset($userId)) {
        $sqlQuery = '
            SELECT 
                manga_id
            FROM 
                user_mangas 
            WHERE 
                user_id = :userId
        ';
        $mangaQuery = $mysqlClient->prepare($sqlQuery);
        $mangaQuery->execute([
            'userId' => $userId,
        ]);
        $mangas = $mangaQuery->fetchAll(PDO::FETCH_ASSOC);
    }
    echo json_encode(['sucess' => $mangas]);
}

function getUserStatus()
{
    if (isset($_SESSION['LOGGED_USER']['id'])) {
        echo json_encode(['isLogged' => true]);
    } else {
        echo json_encode(['isLogged' => false]);
    }
}

if (isset($_GET["route"])) {
    $route = $_GET["route"];
    if (function_exists($route)) {
        call_user_func($route, $mysqlClient);
    } else {
        echo json_encode(['error' => "404 not found"]);
    }
} else {
    echo json_encode(['error' => "params route not found"]);
}
?>