
<header>
    <a href="index.php" style="width:fit-content;">
        <div class="changeImg"></div>
    </a>
    <nav>
        <i onclick="displayLoginForm(this)" class="fas fa-user iconUser"></i>
        <div id="logForm" class="nav-click-popup nav-click-popup--user" style="visibility: hidden;">
            <div class="simple-menu simple-menu--nav2 js-click-menu js-nav2--centered-popup js-click-menu--active" data-click-menu-id="nav2-user-popup">
                <a href="#" class="simple-menu__header simple-menu__header--link js-current-user-cover">
                    <img class="simple-menu__header-icon" alt="">
                    <div class="u-relative"><?php echo $_SESSION['LOGGED_USER']['username'] ?></div>
                </a>
                <a class="simple-menu__item" href="app/update_account_user.php?id=<?php echo $_SESSION['LOGGED_USER']["id"]; ?>">
                    Paramètres
                </a>

                <a href="config/disconnecting.php" class="simple-menu__item">
                    Se déconnecter
                </a>
            </div>
        </div>
    </nav>
</header>

<link rel="stylesheet" href="./css/user_popup.css">