<?php

include_once('../database/log_database.php');


$getData = $_GET;

if (!isset($getData['id']) && is_numeric($getData['id'])) {
    echo ('il faut un identifiant pour modifier le profil');
    return;
}

$sqlQuery = 'SELECT * FROM user WHERE id = :id';
$userQuery = $mysqlClient->prepare($sqlQuery);
$userQuery->execute(
    [
        'id' => $getData['id'],
    ]
);
$user = $userQuery->fetchAll(PDO::FETCH_ASSOC);

?>


<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $user[0]['username']; ?> - modification</title>
</head>

<body>
    <form method="POST" action="../php/update_user.php" style="text-align: center">
        <input type="hidden" name="id" value="<?php echo $user[0]['id']; ?>">

        <label for="nom">Last name:</label><br>
        <input type="text" id="lname" name="lastname" value="<?php echo $user[0]['lastname']; ?>"><br>

        <label for="prenom">First name:</label><br>
        <input type="text" name="firstname" value="<?php echo $user[0]['firstname']; ?>"><br>

        <label for="email">email:</label><br>
        <input type="email" name="email" value="<?php echo $user[0]['email']; ?>"><br>

        <label for="password">password:</label><br>
        <input type="password" name="password" value="<?php echo $user[0]['password']; ?>"><br>

        <label for="username">username:</label><br>
        <input type="text" name="username" value="<?php echo $user[0]['username']; ?>"><br>

        <input type="submit" value="Submit">
        <br><br><br><br><br><br><br><br><br>
    </form>
    <form action="../php/delete_user.php" method="post">
        <input type="hidden" name="id" value="<?php echo $user[0]['id']; ?>">
        <label for="id">Delete le compte</label><br>
        <input type="submit" value="Supprimer">
    </form>



</body>

</html>