<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>reset password - Dsaquel</title>
    <link rel="stylesheet" href="../css/index.css">
</head>

<body>
    <div class="bloc_page">
        <form method="POST" action="../config/reset_user_password.php">
            <input type="hidden" name="email" value="<?php echo $_GET['key']; ?>">
            <p>Entre ton nouveau mdp</p>
            <input type="password" name='password'>
            <input type="submit" name="submit_password">
        </form>
        <?php include_once('../components/footer.php'); ?>
    </div>
    <script src="https://kit.fontawesome.com/045553b9e0.js" crossorigin="anonymous"></script>
</body>

</html>