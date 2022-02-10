<?php

include_once('../db/login_database.php');

if (!isset($_POST['id'])) {
    echo ('Il faut un compte pour supprimer un compte xD');
}

$id = $_POST['id'];

$delete_user = $mysqlClient->prepare('UPDATE user SET desactivate_user = 1 WHERE id = :id');
$delete_user->execute(
    [
        'id' => $id,
    ]
);

session_start();
session_unset();
session_destroy();
header('Location: ../?userDelete=true');


// UPDATE `user` SET `desactivate_user` = '1' WHERE `user`.`id` = :id;