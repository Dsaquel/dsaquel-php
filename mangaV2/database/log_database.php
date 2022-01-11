<?php
try
{
        $mysqlClient = new PDO('mysql:host=dsaquec1.mysql.db;dbname=dsaquec1;charset=utf8', 'dsaquec1', 'Jd2d727nota');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}
?>
