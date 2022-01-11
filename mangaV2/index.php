<?php session_start(); ?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Dsaquel - manga</title>
    <script src="https://kit.fontawesome.com/045553b9e0.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/form_user_logged-style.css">
    <link rel="stylesheet" media="screen and (max-width: 1280px)" href="css/small_res_style.css">
    <link rel="stylesheet" href="css/card.css">
</head>

<body>
    <div id="bloc_page">
        <a href="index.php" style="width:fit-content;">
            <div class="changeImg"></div>
        </a>

        <?php include_once('php/login.php') ?>

        <?php if (!isset($_SESSION['LOGGED_USER'])) {
            include_once('includes/header.php');
        } else {
            include_once('includes/header_user_logged.php');
        }
        ?>
        <form id="search_form">
            <label for="search">Recherche ton manga préféré :</label>
            <input type="text" id="search" name="search" placeholder="One piece">
        </form>
        <main>
            <div id="section_index">
            </div>
        </main>
        <?php include_once('includes/footer.php'); ?>
    </div>
    <script src="js/manga_api.js"></script>
    <script src="js/index.js"></script>
</body>

</html>