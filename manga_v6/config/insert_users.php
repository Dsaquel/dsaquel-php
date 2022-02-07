<?php
session_start();
include_once("../db/login_database.php");

$email = $_POST['email'];
$password = $_POST['password'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$username = $_POST['username'];


$checkEmail = $mysqlClient->prepare('SELECT email FROM user WHERE email= :email AND desactivate_user is NULL');
$checkEmail->execute(array(
    'email' => $email,
)) or die(print_r($checkEmail->errorInfo()));
$num_rows_email = $checkEmail->rowCount();

$checkUsername = $mysqlClient->prepare('SELECT username FROM user WHERE username= :username AND desactivate_user is NULL');
$checkUsername->execute(array(
    'username' => $username,
)) or die(print_r($checkUsername->errorInfo()));
$num_rows_username = $checkUsername->rowCount();

if (isset($email) && isset($password) && $num_rows_email === 0 && $num_rows_username === 0) {
    $checkUserDelete = $mysqlClient->prepare('SELECT * FROM user WHERE email= :email AND desactivate_user = 1');
    $checkUserDelete->execute([
        'email' => $email,
    ]);
    $result = $checkUserDelete->fetch();

    if($result['desactivate_user'] === "1") {
        setcookie('id', $result['id'], time()+600);
        header('Location: ../?account=desactived');
    }
}

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

if ($num_rows_email != 0 || $num_rows_username != 0) {
    echo "toto";
    header('Location:' . $location);
}

// TODO: delete ?
// if(!empty($_SESSION['message'])) {
//    $message = $_SESSION['message'];

//    $_SESSION['message'] = 'success';
// header("Location: $location");
// }
?>

<p></p>