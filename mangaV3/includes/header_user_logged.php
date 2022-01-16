<header>
    <nav>
        <i onclick="displayLogForm()" class="fas fa-user iconUser" style="transform: translateX(1350px);"></i>
        <div id="logForm" class="nav-click-popup nav-click-popup--user" style="transform: translateX(1258px);">
            <div class="simple-menu simple-menu--nav2 js-click-menu js-nav2--centered-popup js-click-menu--active" data-click-menu-id="nav2-user-popup" data-visibility="visible">
                <a href="#" class="simple-menu__header simple-menu__header--link js-current-user-cover" style="background-image:url('https://osu.ppy.sh/images/headers/profile-covers/c7.jpg');">
                    <img class="simple-menu__header-icon" src="/images/icons/profile.svg" alt="">
                    <div class="u-relative"><?php echo $_SESSION['LOGGED_USER']['username'] ?></div>
                </a>

                <a class="simple-menu__item" href="app/production.php">
                    Mon profil
                </a>

                <a class="simple-menu__item" href="app/production.php">
                    Amis
                </a>

                <a class="simple-menu__item" href="app/production.php">
                    Favoris
                </a>

                <a class="simple-menu__item" href="app/update_account_user.php?id=<?php echo $_SESSION['LOGGED_USER']["id"]; ?>">
                    Paramètres
                </a>

                <a href="php/disconected.php" class="simple-menu__item">
                    Se déconnecter
                </a>
            </div>
        </div>
    </nav>


    <ul>
        <li><a href="app/production.php">Ma bibliothèque</a></li>
        <li><a onclick="seasonLater(event)" href="#">Prochainement</a></li>
        <li class="dropdown">
            <a class="dropbtn">Genre</a>
            <div class="dropdown-content" id="menus">
                <a id="action" onclick="filterGenre('1')" href="#">Action</a>
                <a id="adventure" onclick="filterGenre('2')"href="#">Aventure</a>
                <a id="fantasy" onclick="filterGenre('10')" href="#">Fantasy</a>
                <a id="supernatural" onclick="filterGenre('37')" href="#">Supernatural</a>
                <a id="thriller" onclick="filterGenre('41')" href="#">Suspense</a>
                <a id="romance" onclick="filterGenre('22')" href="#">Romance</a>
                <a id="sports"  onclick="filterGenre('30')" href="#">Sports</a>
            </div>
        </li>
    </ul>
</header>