
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Manga</title>
    <script src="https://kit.fontawesome.com/045553b9e0.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" media="screen and (max-width: 1280px)" href="css/small_res_style.css">
</head>

<body>
    <div id="bloc_page">
        <a href="index.php">
            <div class="changeImg"></div>
        </a>
        <?php include_once('includes/header.php'); ?>


        <div class="labelNav">
            <label for="">Recherche ton manga préféré :
                <input type="text" id="myInput" onkeyup="searchManga()" placeholder="One piece" title="Type in a name">
            </label>
        </div>
        <?php include_once('php/login.php'); ?>
        <main id="myMain">
            <section id="sectionIndex">
            </section>
        </main>
        <a href="testDatabaseQuery.php">DatabaseQuery</a>
        <?php include_once('includes/footer.php'); ?>
    </div>

<script src="js/index.js"></script>

</body>

</html>