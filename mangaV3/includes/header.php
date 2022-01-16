<header>
    <nav>
        <div class="login-box">
            <i onclick="displayLogForm()" class="fas fa-user" style="transform: translateX(1350px);"></i>
            <div id="logForm" class="login-box__content" style="transform: translateX(1180px) ;visibility: hidden;">
                <form method="POST" action="index.php" accept-charset="UTF-8" class="login-box__section login-box__section--login">
                    <h2 class="login-box__row login-box__row--title">Se connecter pour continuer</h2>
                    <div class="login-box__row login-box__row--inputs">
                        <input class="login-box__form-input" name="pseudoOrEmail" placeholder="email ou nom d'utilisateur" required="">
                        <input type="password" class="login-box__form-input" name="password" placeholder="mot de passe" required="">
                    </div>
                    <!-- <div class="login-box__row login-box__row--error">
                                Identifiants incorrects
                            </div> -->
                    <div class="login-box_row">
                        <a href="#" class="login-box_link">J'ai oublié mes identifiants</a>
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
                            <a href="app/create_account.php" class="btn-osu-big btn-osu-big--nav-popup">
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
    <ul>
        <li><a href="app/production.php">Ma bibliothèque</a></li>
        <li onclick="modalError()" id="mangasFuture">Prochainement</li>
        <li class="dropdown">
            <a class="dropbtn">Genre</a>
            <div class="dropdown-content" id="menus">
                <a id="action" onclick="filterGenre('1')" href="#">Action</a>
                <a id="adventure" onclick="filterGenre('2')" href="#">Aventure</a>
                <a id="fantasy" onclick="filterGenre('10')" href="#">Fantasy</a>
                <a id="supernatural" onclick="filterGenre('37')" href="#">Supernatural</a>
                <a id="thriller" onclick="filterGenre('41')" href="#">Suspense</a>
                <a id="romance" onclick="filterGenre('22')" href="#">Romance</a>
                <a id="sports" onclick="filterGenre('30')" href="#">Sports</a>
            </div>
        </li>
    </ul>

    <div id="modal-error" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close-modal">&times;</span>
                <h2>Erreur !</h2>
            </div>
            <div class="modal-body">
                <p>Vous devez être connecté pour accéder à cette fonctionnalité.</p>
            </div>
        </div>
    </div>
</header>