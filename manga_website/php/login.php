<?php

include_once 'users.php';

if (isset($_POST['pseudoOrEmail']) &&  isset($_POST['password'])) {
    foreach ($users as $user) {
        if ($user['pseudo'] === $_POST['pseudoOrEmail'] || $user['email'] === $_POST['pseudoOrEmail']) {
            if ($user['password'] === $_POST['password']) {
                $_SESSION['LOGGED_USER'] = $user['pseudo'];
            }
        }
    }
}
?>

<?php if (isset($_SESSION['LOGGED_USER'])) : ?>
    <h3>Bienvenue <?php echo htmlspecialchars($_SESSION['LOGGED_USER']) ?> sur mon site !!!!</h3>
<?php endif ?>