<!--TODO: make work confirmation data of user -->
<?php
if (isset($_POST['emailConfirm'])) :
    $email = $_POST['emailConfirm'];
    $password = $_POST['passwordConfirm'];
    $username = $_POST['usernameConfirm'];
?>
    <form id="confirmation" action="config/insert_users.php">
        <h2>Confirmer vous ces informations ?</h2>
        <input type="text" name="email" value="<?php echo $email ?>" disabled>
        <input type="password" name="password" value="<?php echo $password ?>" disabled>
        <input type="text" name="username" value="<?php echo $username ?>" disabled>
        <button type="submit">Confirmer</button>
        <button onclick="history.back()">Modifié une data</button>
    </form>
<?php endif; ?>