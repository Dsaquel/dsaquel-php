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
        <li><a href="app/production.php">Prochainement</a></li>
        <li class="dropdown">
            <a href="app/production.php" class="dropbtn">Genre</a>
            <div class="dropdown-content" id="menus">
                <!-- <a href="app/production.php" onclick="filterMangas(this)">Action</a> -->
                <!-- <a href="app/production.php" onclick="filterMangas(this)">Aventure</a> -->
                <!-- <a href="app/production.php" onclick="filterMangas(this)">Fantasy</a> -->
            </div>
        </li>
    </ul>
</header>