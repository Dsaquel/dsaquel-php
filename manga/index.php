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
    <link rel="stylesheet" href="css/login_popup.css">
    <link rel="stylesheet" href="css/modal_component.css">
    <link rel="stylesheet" href="css/registration.css">
</head>

<body>
    <div class="bloc_page">
        <?php
        include_once('config/login.php');
        include_once('components/modal.php') ?>

        <?php
        if (isset($_SESSION['LOGGED_USER']['id'])) {
            include_once('components/header_user_logged.php');
            include_once('components/filter_mangas_user_logged.php');
        } else {
            include_once('components/header.php');
            include_once('components/filter_mangas.php');
            include_once('components/messageInformation.php');
        }?>
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
        <?php include_once('components/footer.php'); ?>
    </div>
    <script src="js/index.js"></script>
    <script type="module" src="modules/modals/modalindex.js"></script>
    <script type="module" src="modules/modals/modalConnexionNeeded.js"></script>
    <script src="https://kit.fontawesome.com/045553b9e0.js" crossorigin="anonymous"></script>
</body>

</html>