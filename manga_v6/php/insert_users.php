<?php

include_once("../database/log_database.php");

$email = $_POST['email'];
$password = $_POST['password'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$username = $_POST['username'];


$checkEmail = $mysqlClient->prepare('SELECT email FROM user WHERE email=:email');
$checkEmail->execute(array(
    'email' => $email,
)) or die(print_r($checkEmail->errorInfo())); 
$num_rows_email = $checkEmail->rowCount();

$checkUsername = $mysqlClient->prepare('SELECT username FROM user WHERE username=:username');
$checkUsername->execute(array(
    'username' => $username,
)) or die(print_r($checkUsername->errorInfo())); 
$num_rows_username = $checkUsername->rowCount();

if ($num_rows_email == 0 && $num_rows_username == 0) {
    $insertUserQuery = ("INSERT INTO user (email, username, password) VALUES (:email, :username, :password)");
    $insertUser = $mysqlClient->prepare($insertUserQuery);
    $insertUser->execute([
        'email' => $email,
        'password' => $password,
        'username' => $username,
    ]);
    $userLastId = $mysqlClient->lastInsertId();
    if ($userLastId) {
        header('location: ../index.php');
    }
}


$location = '../?register=false';

if($num_rows_email != 0 || $num_rows_username != 0){
    header('Location:' . $location);
}

// TODO: delete ?
// if(!empty($_SESSION['message'])) {
//    $message = $_SESSION['message'];

//    $_SESSION['message'] = 'success';
// header("Location: $location");
// }
?>