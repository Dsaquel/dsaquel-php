<?php
try
{
        $mysqlClient = new PDO('mysql:host=localhost;dbname=mangas;charset=utf8', 'root', 'root');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}
?>
