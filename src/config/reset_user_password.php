<?php 

if(isset($_POST['submit_password']) && $_POST['email'] && $_POST['password']){
    include_once('../db/login_database.php');
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $updateQuery = 'UPDATE user SET password = :password WHERE email = :email';
    $updatequeryPrepared = $mysqlClient->prepare($updateQuery);
    $updatequeryPrepared->execute([
        'email' => $_POST['email'],
        'password'=>$password,
    ]);
    if ($updatequeryPrepared->execute()) {
        header('Location: ../?passwordReset=true');
    }
}

?>