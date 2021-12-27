<?php
header("http://localhost/Premierprojet/Projet-site-manga/Site%20manga");

include_once 'users.php';

if (isset($_POST['pseudoOrEmail']) &&  isset($_POST['password'])) {
    foreach ($users as $user) {
        if (
            $user['pseudo'] === $_POST['pseudoOrEmail'] ||
            $user['email'] === $_POST['pseudoOrEmail']  &&
            $user['password'] === $_POST['password']
        ) {
            $loggedUser = [
                'email' => $user['email'],
            ];
        }
    }
}
?>

<?php if (isset($loggedUser)) :
?>
    <script>
        alert("Utilisateur bien connecté")
    </script>

<?php endif ?>