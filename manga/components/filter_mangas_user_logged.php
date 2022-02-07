<ul>
    <li><a href="app/library_user.php">Ma bibliothèque</a></li>
    <li><a id="mangasLater" onclick="seasonLater()">Prochainement</a></li>
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