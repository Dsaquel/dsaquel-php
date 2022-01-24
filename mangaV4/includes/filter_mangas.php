<ul>
    <li onclick="modalError(this)">Ma bibliothèque</li>
    <li><a onclick="seasonLater(event)">Prochainement</a></li>
    <li class="dropdown">
        <a class="dropbtn">Genre</a>
        <div class="dropdown-content" id="menus">
            <a onclick="filterGenre('1')" href="#">Action</a>
            <a onclick="filterGenre('2')" href="#">Aventure</a>
            <a onclick="filterGenre('10')" href="#">Fantasy</a>
            <a onclick="filterGenre('37')" href="#">Supernatural</a>
            <a onclick="filterGenre('41')" href="#">Suspense</a>
            <a onclick="filterGenre('22')" href="#">Romance</a>
            <a onclick="filterGenre('30')" href="#">Sports</a>
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