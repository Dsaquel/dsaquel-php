<?php

include_once('../db/login_database.php');

if (isset($_POST['id'])) {    
    $id = $_POST['id'];
    $recup_user = $mysqlClient->prepare('UPDATE user SET desactivate_user = NULL WHERE id = :id');
    $recup_user->execute(
        [
            'id' => $id,
        ]
    );
    header('Location: ../?account=active');
} else {
    header('Location: ../');
}
?>