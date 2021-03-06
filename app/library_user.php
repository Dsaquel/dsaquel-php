<?php
session_start();

include_once('../db/login_database.php');
$userId = $_SESSION['LOGGED_USER']['id'];
if (isset($userId)) {
    $sqlQuery = '
        SELECT 
            manga_id
        FROM 
            user_mangas 
        WHERE 
            user_id = :userId
    ';
    $mangaQuery = $mysqlClient->prepare($sqlQuery);
    $mangaQuery->execute([
        'userId' => $userId,
    ]);
    $mangas = $mangaQuery->fetchAll(PDO::FETCH_ASSOC);
}

?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/index.css">
    <link rel="stylesheet" href="../css/card.css">
    <link rel="stylesheet" href="../css/small_res_style.css">
    <link rel="stylesheet" href="../css/modal_component.css">
    <title><?php echo $_SESSION['LOGGED_USER']['username']; ?> - bibliothèque</title>
</head>

<body>
    <div class="bloc_page">

        <a href="../index.php" style="width:fit-content;">
            <div class="changeImg"></div>
        </a>
        <div id="section_index">
            <?php include_once('../components/modal.php'); ?>
            <section>
                <h3>
                </h3>
                <div id="loader"></div>
                <div id="mangas" class="dsaquel-row">
                    <!--MANGAS-->
                </div>
        </div>
    </div>
    <script src="../js/index.js"></script>
    <script src="https://kit.fontawesome.com/045553b9e0.js" crossorigin="anonymous"></script>
    <script type="module" src="../modules/modals/modalLibrary.js"></script>
    <script type="module" src="../modules/modals/modal.js"></script>
</body>

</html>