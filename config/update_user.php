<?php

include_once('../db/login_database.php');
$postData = $_POST;
if (
    !isset($postData['id_update'])
    || !isset($postData['email'])
    || !isset($postData['password'])
    || !isset($postData['username'])
) {
    echo ('manque d\'info');
}
$id = $postData['id_update'];
$email = $postData['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$username = $postData['username'];


$checkUsername = $mysqlClient->prepare('SELECT username FROM user WHERE username= :username');
$checkUsername->execute(array(
    'username' => $username,
)) or die(print_r($checkUsername->errorInfo()));

$num_rows_username = $checkUsername->rowCount();
if ($num_rows_username == 0 || $_SESSION['username'] == $username) {
    $updateUserQuery = $mysqlClient->prepare('UPDATE user SET email = :email, password = :password, username = :username where id = :id');
    $updateUserQuery->execute([
        'email' => $email,
        'password' => $password,
        'username' => $username,
        'id' => $id,
    ]);

    if ($updateUserQuery->execute()) {
        header('Location: ../?userUpdate=true');
    }
} else {
    header('Location: ../?userUpdate=false');
}


?>
