<?php
session_start();

include("../database/log_database.php");

function userMangas($mysqlClient)
{
    $sqlQuery = 'SELECT * FROM user_mangas WHERE user_id = 3';
    $userQuery = $mysqlClient->prepare($sqlQuery);
    $userQuery->execute();
    $data = $userQuery->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(['success' => $data]);
}

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
