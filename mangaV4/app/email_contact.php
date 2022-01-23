<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/index.css">
    <link rel="stylesheet" href="../css/email_contact.css">
    <title>Dsaquel - feedback</title>
</head>

<body>
    <div class="bloc_page">
        <a href="../index.php" style="width:fit-content;">
            <div class="changeImg"></div>
        </a>
        <h2 class="form-message">Laisse moi un message !</h2>
        <div class="form-content">
            <form action="../php/check_email_sending.php" method="POST">
                <div class="grid">
                    <input class="champs" type="text" name="mailUser" placeholder="Votre email">

                    <input class="champs" type="text" name="name" placeholder="Votre nom">
                </div>
                <div class="grid">
                    <input class="champs" type="text" name="subject" placeholder="Objet">
                </div>
                <div class="grid">
                    <textarea id="messageEmail" name="message" placeholder="Message"></textarea>
                </div>
                <button id="valide-contact" type="submit" name="submit">Envoyer</button>
            </form>
        </div>

    </div>
</body>

</html>