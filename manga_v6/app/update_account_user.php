<?php

include_once('../db/login_database.php');


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
    <link rel="stylesheet" href="../css/update_user.css">
</head>

<body>
    <div class="user-layout">
        <div class="user-page">
            <div class="account-edit account-edit--first">
                <div class="account-edit__section">
                    <h2 class="account-edit__section-title">Profil</h2>
                </div>
                <div class="account-edit__input-groups">
                    <form method="POST" action="../config/update_user.php">
                        <div class="account-edit__input-group">
                            <div class="account-edit-entry">
                                <input class="account-edit-entry__input" type="text" name="username" value="<?php echo $user[0]['username']; ?>">
                                <label class="account-edit-entry__label" for="username">Username</label>
                            </div>
                        </div>

                        <div class="account-edit__input-group">
                            <div class="account-edit-entry">
                                <input class="account-edit-entry__input" type="email" name="email" value="<?php echo $user[0]['email']; ?>">
                                <label class="account-edit-entry__label" for="email">email:</label>
                            </div>

                            <div class="account-edit-entry">
                                <input class="account-edit-entry__input" type="password" name="password" value="<?php echo $user[0]['password']; ?>">
                                <label class="account-edit-entry__label" for="password">password:</label>
                            </div>
                            <div class="submitBtn">
                                <input type="submit" value="Modifier">
                            </div>
                        </div>


                        <input type="hidden" name="id_update" value="<?php echo $user[0]['id']; ?>">

                    </form>

                    <form class="deleteUser" action="../config/delete_user.php" method="post">
                        <input type="hidden" name="id" value="<?php echo $user[0]['id']; ?>">
                        <input type="submit" value="Supprimer">
                    </form>
                </div>
            </div>

        </div>
    </div>
<script src="../js/update_account_user.js"></script>
</body>

</html>