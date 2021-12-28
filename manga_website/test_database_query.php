<?php
try
{
	// On se connecte à MySQL
	$mysqlClient = new PDO('mysql:host=localhost;dbname=mangas;charset=utf8', 'root', 'root');
}
catch(Exception $e)
{
	// En cas d'erreur, on affiche un message et on arrête tout
        die('Erreur : '.$e->getMessage());
}

// Si tout va bien, on peut continuer

// On récupère tout le contenu de la table recipes
$sqlQuery = 'SELECT * FROM user';
$userQuery = $mysqlClient->prepare($sqlQuery);
$userQuery->execute();
$users = $userQuery->fetchAll();

// On affiche chaque recette une à une
foreach ($users as $user) {
?>
    <p>Le premier utilisateurde mon site est : <?php echo $user['lastname'];?> <?php echo $user['firstname']; ?></p>
<?php
}
?>