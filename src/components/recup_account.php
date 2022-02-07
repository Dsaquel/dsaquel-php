<?php echo $_COOKIE['id'] ?>
<form method="POST" action="config/recup_user_account.php">
    <label>Voulez vous recuperez le compte ?</label>
    <input type="hidden" name="id" value="<?php echo $_COOKIE['id']?>">
    <button type="submit">OUI</button>
</form>