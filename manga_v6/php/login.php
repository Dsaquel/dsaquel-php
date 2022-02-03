<?php
if (isset($_POST['pseudoOrEmail']) &&  isset($_POST['password'])) {
    include("database/log_database.php");
    $query = 'SELECT id, username, email, password FROM user WHERE email = :email OR username = :username';
    $queryPrepared = $mysqlClient->prepare($query);
    $queryPrepared->execute([
        'email' => $_POST['pseudoOrEmail'],
        'username' => $_POST['pseudoOrEmail'],
    ]);
    $result = $queryPrepared->fetch();
    if ($result && password_verify($_POST['password'], $result['password'])) {
        $_SESSION['LOGGED_USER'] = [
            'email' => $result['email'],
            'username' => $result['username'],
            'id' => $result['id'],
        ];
        header('Location: http://localhost/manga_v6/?login=true');
    } else {
        header('Location: http://localhost/manga_v6/?login=false');
    }
}
?>
