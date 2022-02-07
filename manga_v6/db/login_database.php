<?php

include_once('login_database_data.php'); 

try
{
        $mysqlClient = new PDO('mysql:host='.$host.';dbname='.$dbname.';', $username, $password);
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}
?>