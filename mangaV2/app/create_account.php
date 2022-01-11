<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <title>Dsaquel - Inscription</title>
    <script src="https://kit.fontawesome.com/045553b9e0.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../css/form_create_acc.css">
</head>

<body>
    <a href="../index.php">
        <div class="changeImg"></div>
    </a>
    <div id="bloc_page">
        <main>
            <form id="regForm" action="../php/insert_users.php" method="POST">

                <h1>Inscription</h1>

                <!-- One "tab" for each step in the form: -->

                <div class="tab">
                    <p><input class="login-box__form-input" placeholder="Nom..." name="nom"></p>
                    <p><input class="login-box__form-input" placeholder="Prenom..." name="prenom"></p>
                </div>

                <div class="tab">E-mail :
                    <p><input class="login-box__form-input" id="email" placeholder="dupond@gmail.com" name="email"></p>
                </div>

                <div class="tab"> Mot de passe:
                    <p>
                        <input class="login-box__form-input" class="login-box__form-input" placeholder="Nouveau mot de passe" type="password" id="psw" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
                    </p>

                    <div id="message">
                        <h3>Le mot de passe doit contenir au moins:</h3>
                        <p id="letter" class="invalid">Une <b>minuscule</b></p>
                        <p id="capital" class="invalid">Une <b>capitale</b></p>
                        <p id="number" class="invalid">Un <b>nombre</b></p>
                        <p id="length" class="invalid">Minimum <b>8 caractères</b></p>
                    </div>
                    <H4>Confirmer le mot de passe :</H4>
                    <p><input class="login-box__form-input" id="confirm_password" placeholder="Confirmer le mot de passe" name="pword" type="password">
                    </p>
                </div>

                <div class="tab"> Nom d'utilisateur: <br>
                    <small>sera vue par le monde entier !</small>
                    <a href="#username"></a>
                    <p><input class="login-box__form-input" placeholder="Xx_GamerTrickshot_xX" name="username"></p>
                    <hr>

                    <label>
                        <input type="checkbox" oninput="this.className = 'checked'" name="subscribe"> En cochant cette case vous accepter les <a href="#">conditions générales</a>.
                    </label>
                </div>

                <div style="overflow:auto;">
                    <div style="float:right;">
                        <button type="button" id="prevBtn" onclick="nextPrev(-1)">Precedant</button>
                        <button type="button" id="nextBtn" onclick="nextPrev(1)">Suivant</button>
                    </div>
                </div>

                <!-- Circles which indicates the steps of the form: -->
                <div style="text-align: center; margin-top:40px;">
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                    <span class="step"></span>
                </div>
            </form>
        </main>
        <?php include('../includes/footer.php'); ?>
    </div>
    <script src="../js/inscription.js"></script>
</body>

</html>