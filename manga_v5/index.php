<?php session_start(); ?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dsaquel - manga</title>
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/card.css">
    <link rel="stylesheet" href="css/small_res_style.css">
    <link rel="stylesheet" href="css/login-user_index.css">
</head>

<body>
    <div class="bloc_page">

        <?php
        include_once('php/login.php');
        include('includes/modal.php');
        ?>
        <?php
        include_once('php/check_user_log.php');
        if (checkUserLog() === true) {
            include_once('includes/header_user_logged.php');
            include_once('includes/filter_mangas_user_logged.php');
        } else {
            include_once('includes/header.php');
            include_once('includes/filter_mangas.php');
        }
        ?>
        <form id="search_form" onsubmit="getAnimes(event)">
            <label for="search">Recherche ton manga préféré :</label>
            <input type="text" id="search" name="search" placeholder="One piece">
        </form>
        <main>
            <h3 id="genderMangas"></h3>
            <div id="section_index">
            </div>
        </main>
        <?php include_once('includes/footer.php'); ?>
    </div>
    <script src="js/index.js"></script>
    <script src="https://kit.fontawesome.com/045553b9e0.js" crossorigin="anonymous"></script>
</body>

</html>