<!-- Create account in indexpage -->
<form id="registration" action="php/insert_users.php" method="POST">
    <div class="input-group">
        <div class="message">
            <p class="getPlacehodler"></p>
            <input class="login-box__form-input" autocomplete="current-email" id="email" placeholder="email" name="email">
            <div class="message-error"></div>
        </div>
    </div>

    <div class="input-group">
        <div class="message">
            <div>
                <p class="getPlacehodler"></p>
                <input class="login-box__form-input" placeholder="Mot de passe" type="password" autocomplete="current-password" suggested="new-password" id="psw" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required> <i class="far fa-eye"></i>
                <div id="pswError" class="message-error"></div>
            </div>
            <div>
                <p class="getPlacehodler"></p>
                <input class="login-box__form-input" id="confirm_password" autocomplete="current-password" placeholder="Confirmer" name="pword" type="password" suggested="new-password"> <i class="far fa-eye"></i>
            </div>
            <div id="confirmPswError" class="message-error"></div>
        </div>
    </div>

    <div class="input-group">
        <div class="message">
            <p class="getPlacehodler"></p>
            <input class="login-box__form-input" placeholder="Pseudo" id="username" name="username">
            <div class="message-error"></div>
        </div>

    </div>
    <input type="submit" value="Terminer">
    <link rel="stylesheet" href="css/form_create_acc.css">
</form>
<script src="js/register.js"></script>