<?php

include_once('../database/log_database.php');

if (!isset($_POST['id'])) {
    echo ('Il faut un compte pour supprimer un compte xD');
}

$id = $_POST['id'];

$delete_user = $mysqlClient->prepare('DELETE from user where id = :id');
$delete_user->execute(
    [
        'id' => $id,
    ]
);



if ($delete_user->execute()) {
    session_start();
    session_unset();
    session_destroy();
    echo '<script language="javascript">';
    echo 'alert("Compte supprimer :( "); location.href="../index.php"';
    echo '</script>';
}
