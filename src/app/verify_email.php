<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Activation de compte par mailing</title>
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body>
    <?php
    if ($_GET['key'] && $_GET['token']) {
        include_once('../db/login_database.php');
        $email = $_GET['key'];
        $token = $_GET['token'];
        $sqlQuery = 'SELECT * FROM user WHERE email = :email AND token = :token';
        $userQuery = $mysqlClient->prepare($sqlQuery);
        $userQuery->execute(
            [
                'email' => $email,
                'token' => $token,
            ]
        );
        $user = $userQuery->fetch();

        $date = date('Y-m-d H:i:s');
        if ($user && $user['email_verified_at'] == NULL) {
            $updateUserQuery = $mysqlClient->prepare('UPDATE user SET email_verified_at = :date WHERE email = :email');
            $updateUserQuery->execute([
                'date' => $date,
                'email' => $email,
            ]);
            $msg = "Vous voilà des notre bg, tu as tout le site pour toi";
        } else {
            $msg = "Je te connais déjà toi ? tu fais quoi ici ?";
        }
    } else {
        $msg = "Euh, comment te dire qu'il faut d'abord te creer un compte avant de pouvoir l'activer ? ^^";
    }
    ?>
    <div class="container mt-3">
        <div class="card">
            <div class="card-header text-center">
                Activation de compte par mailing
            </div>
            <div class="card-body">
                <p><?php echo $msg; ?></p>
                <a class="card-link" href="../?account=verify">Home</a>
            </div>
        </div>
    </div>
</body>

</html>