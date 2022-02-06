<?php
if (isset($_POST['pseudoOrEmail']) &&  isset($_POST['password'])) {
    include("database/log_database.php");
    $query = 'SELECT * FROM user WHERE email = :email OR username = :username';
    $queryPrepared = $mysqlClient->prepare($query);
    $queryPrepared->execute([
        'email' => $_POST['pseudoOrEmail'],
        'username' => $_POST['pseudoOrEmail'],
    ]);
    $result = $queryPrepared->fetch();
    if ($result && password_verify($_POST['password'], $result['password'])) {
        //condition si desactivate_user est = 1 alors dire que le compte est 
        //suprimée et si il veut le recup, modal (?)
        if ($result['desactivate_user'] === null) {
            $_SESSION['LOGGED_USER'] = [
                'email' => $result['email'],
                'username' => $result['username'],
                'id' => $result['id'],
            ];
            header('Location: ./?login=true');
        } elseif($result['desactivate_user'] === "1") {
            header('Location: ./?account=desactived');
            setcookie("id", $result['id'], time()+600);  /* expire dans 1 heure */
            exit();
        }
    } else {
        header('Location: ./?login=false');
    }
}
