<?php

include_once('../database/log_database.php');
$postData = $_POST;
if (
    !isset($postData['id_update'])
    || !isset($postData['lastname'])
    || !isset($postData['firstname'])
    || !isset($postData['email'])
    || !isset($postData['password'])
    || !isset($postData['username'])
) {
    echo ('manque d info');
}

$id = $postData['id_update'];
$lastname = $postData['lastname'];
$firstname = $postData['firstname'];
$email = $postData['email'];
$password = $postData['password'];
$username = $postData['username'];

$updateUserQuery = $mysqlClient->prepare('UPDATE user SET lastname = :lastname, firstname = :firstname, email = :email, password = :password, username = :username where id = :id');
$updateUserQuery->execute([
    'lastname' => $lastname,
    'firstname' => $firstname,
    'email' => $email,
    'password' => $password,
    'username' => $username,
    'id' => $id,
]);

if ($updateUserQuery->execute()) {
    echo '<script language="javascript">';
    echo 'confirm("Modification réussite !"); location.href="../index.php"';
    echo '</script>';
}
?>