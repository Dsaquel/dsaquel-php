<?php session_start()  ?>

<?php if (isset($_SESSION['LOGGED_USER']['username'])) {
    $username = $_SESSION['LOGGED_USER']['username'];
} else {
    $username = "misérable inconnue";
} ?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dsaquel - en cours de production</title>
    <link rel="stylesheet" href="../css/app_production.css">
</head>

<body>

    <div class="modal">
        <div class="modal-content">
            Bonjour <?php echo $username ?>, cette page est en plein chantier et interdit au public !
            <hr>
            Pas de panique je vous indique la sortie, ne touchez à rien ! <br>
            <img src="../pictures/bobleponge.gif">
        </div>

</body>
<script src="../js/production.js"></script>

</html>

<?php
header("refresh:8; url= ../index.php");
?>