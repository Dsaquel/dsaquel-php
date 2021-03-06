<header>
    <a href="index.php" style="width:fit-content;">
        <div class="changeImg"></div>
    </a>
    <nav>
        <div class="login-box">
            <div onclick="displayLoginForm(this)" class="displayLoginForm">connexion/inscription</div>
            <i onclick="displayLoginForm(this)" class="fas fa-user"></i>
            <div id="logForm" class="login-box__content" style="visibility: hidden;">
                <form method="POST" action="index.php" accept-charset="UTF-8" class="login-box__section login-box__section--login">
                    <h2 class="login-box__row login-box__row--title">Se connecter pour continuer</h2>
                    <div class="login-box__row login-box__row--inputs">
                        <input class="login-box__form-input" autocomplete="current-email" name="pseudoOrEmail" placeholder="email ou nom d'utilisateur" required="">
                        <input id="passwordLogin" type="password" autocomplete="current-password" class="login-box__form-input" name="password" placeholder="mot de passe" required="">
                        <i class="far fa-eye"></i>
                    </div>
                    <!-- TODO: Delete ? -->
                    <!-- <div class="login-box__row login-box__row--error">
                                Identifiants incorrects
                            </div> -->
                    <div class="login-box_row">
                        <a href="app/verify_user_email.php" class="login-box_link">J'ai oublié mon mot de passe</a>
                    </div>
                    <div class="login-box__row login-box__row--actions">
                        <div class="login-box__action">
                            <button class="btn-osu-big btn-osu-big--nav-popup" data-disable-with="Connexion...">
                                <div class="btn-osu-big__content">
                                    <span class="btn-osu-big__left">
                                        Se connecter
                                    </span>
                                    <span class="fas fa-fw fa-sign-in-alt"></span>
                                </div>
                            </button>
                            <button id="btnRegister" class="btn-osu-big btn-osu-big--nav-popup">
                                <div class="btn-osu-big__content">
                                    <a href="?register=true" class="btn-osu-big__left">
                                        s'inscrire
                                    </a>
                                    <span class="fas fa-sign-in-alt"></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
                <div class="login-box__section login-box__section--register">
                    <h2 class="login-box__row login-box__row--title">
                        Vous n'avez pas de compte ?
                    </h2>
                    <div class="login-box__row">
                        Pas de problème, clique sur le boutton ci dessous pour t'inscrire rapidemment !
                    </div>
                    <div class="login-box__row login-box__row--actions">
                        <div class="login-box__action">
                            <a href="?register=true" class="btn-osu-big btn-osu-big--nav-popup">
                                <div class="btn-osu-big__content">
                                    <span class="btn-osu-big__left">
                                        S'inscrire
                                    </span>
                                    <span class="fas fa-sign-in-alt"></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>


</header>