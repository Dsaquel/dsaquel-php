<?php
session_start();
include_once("../db/login_database.php");

$email = $_POST['email'];
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

    if ($result['desactivate_user'] === "1") {
        setcookie('id', $result['id'], time() + 600);
        header('Location: ../?account=desactived');
    }
}

if ($num_rows_email == 0 && $num_rows_username == 0) {
    $token = md5($_POST['email']) . rand(10, 9999);
    $insertUserQuery = ("INSERT INTO user (email, username, password, email_verification_link) VALUES (:email, :username, :password, :token)");
    $insertUser = $mysqlClient->prepare($insertUserQuery);
    $insertUser->execute([
        'email' => $email,
        'password' => $password,
        'username' => $username,
        'token' => $token,
    ]);


    $to      = $email;
    $subject = 'Confirmation de compte';
    $link = "<a href='http://localhost/src/app/verify_email.php?key=' . $email . '&token=' . $token>Click pour verifier</a>";
    $message = '<p>Derniere etape, confirmer votre compte en cliquant sur ce lien</p>' . $link;
    $headers = 'From: contact@dsaquel.com' . "\r\n" .
        'Reply-To: contact@dsaquel.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    $userLastId = $mysqlClient->lastInsertId();
    if ($userLastId) {
        header('location: http://localhost/src/app/verify_email.php?key=' . $email . '&token=' . $token);
    }
}



$location = '../?register=false';

if ($num_rows_email != 0 || $num_rows_username != 0) {
    header('Location:' . $location);
}
?>
<p></p>