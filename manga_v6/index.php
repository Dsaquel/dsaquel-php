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
    <link rel="stylesheet" href="css/modal.css">
</head>

<body>
    <div class="bloc_page">
        <?php
        include_once('php/login.php');
        ?>
        
        <?php include_once('includes/modal.php') ?>

        <?php
        if (isset($_SESSION['LOGGED_USER']['id'])) {
            include_once('includes/header_user_logged.php');
            include_once('includes/filter_mangas_user_logged.php');
        } else {
            include_once('includes/header.php');
            include_once('includes/filter_mangas.php');
            include_once('includes/messageInformation.php');
        }
        ?>
        <form id="search_form" onsubmit="getAnimes(event)">
            <label for="search">Recherche ton anime préféré :</label>
            <input type="text" id="search" name="search" placeholder="One piece">
        </form>
        <main>
            <h3 id="genderMangas"></h3>
            <div id="section_index">
            </div>
        </main>
        <div id="pagination">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
        </div>
        <?php include_once('includes/footer.php'); ?>
    </div>
    <script src="js/index.js"></script>
    <script type="module" src="js/modalindex.js"></script>
    <script type="module" src="js/modalConnexionNeeded.js"></script>
    <script src="https://kit.fontawesome.com/045553b9e0.js" crossorigin="anonymous"></script>
</body>

</html>