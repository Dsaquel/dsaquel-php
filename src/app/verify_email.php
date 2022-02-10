<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>User Account Activation by Email Verification using PHP</title>
    <!-- CSS -->
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
            $msg = "Congratulations! Your email has been verified.";
        } else {
            $msg = "You have already verified your account with us";
        }
    } else {
        $msg = "Danger! Your something goes to wrong.";
    }
    ?>
    <div class="container mt-3">
        <div class="card">
            <div class="card-header text-center">
                User Account Activation by Email Verification using PHP
            </div>
            <div class="card-body">
                <p><?php echo $msg; ?></p>
            </div>
        </div>
    </div>
</body>

</html>