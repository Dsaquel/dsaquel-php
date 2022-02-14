<?php session_start(); ?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dsaquel - manga</title>
    <link rel="stylesheet" href="../css/index.css">
</head>

<body>
    <div class="bloc_page">
        <form action="../config/send_link_reset_password.php" method="POST">
            <p>Entre ton email pour reset ton password</p>
            <input type="text" name="email">
            <input type="submit" name="submit_email">
        </form>
        <?php include_once('../components/footer.php'); ?>
    </div>
    <script src="https://kit.fontawesome.com/045553b9e0.js" crossorigin="anonymous"></script>
</body>

</html>