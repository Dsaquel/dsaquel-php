<?php

include_once('../database/log_database.php');

if (!isset($_POST['id'])) {
    echo ('Il faut un compte pour supprimer un compte xD');
}

$id = $_POST['id'];

$delete_user = $mysqlClient->prepare('DELETE from user_mangas WHERE user_id = :id; DELETE from user WHERE id = :id');
$delete_user->execute(
    [
        'id' => $id,
    ]
);

session_start();
session_unset();
session_destroy();
header('Location: ../index.php');
