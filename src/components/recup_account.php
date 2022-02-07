<form method="POST" action="config/recup_user_account.php">
    <label>Voulez vous recuperer le compte ?</label>
    <input type="hidden" name="id" value="<?php echo $_COOKIE['id']?>">
    <button type="submit">OUI</button>
</form>