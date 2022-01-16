<?php

include_once("../database/log_database.php");

$lastname = $_POST['nom'];
$firstname = $_POST['prenom'];
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
    $insertUserQuery = ("INSERT INTO user (firstname, lastname, email, username, password) VALUES (:firstname, :lastname, :email, :username, :password)");
    $insertUser = $mysqlClient->prepare($insertUserQuery);
    $insertUser->execute([
        'firstname' => $firstname,
        'lastname' => $lastname,
        'email' => $email,
        'password' => $password,
        'username' => $username,
    ]);
    $userLastId = $mysqlClient->lastInsertId();
    if ($userLastId) {
        header('location: ../index.php');
    }
}
$location = '../app/create_account.php';


if($num_rows_email != 0 && $num_rows_username != 0){
    $Message = urldecode("Email et Pseudo déjà utilisé mdrr");
    header('Location: ' . $location . '?Message='. $Message);
}elseif ($num_rows_email != 0) {
    $Message = urldecode("Email déjà utilisé");
    header('Location: ' . $location . '?Message='. $Message);
}elseif ($num_rows_username != 0) {
    $Message = urldecode("Pseudo déjà prit");
    header('Location: ' . $location . '?Message='. $Message);
}

// if(!empty($_SESSION['message'])) {
//    $message = $_SESSION['message'];

//    $_SESSION['message'] = 'success';
// header("Location: $location");
// }
?>