<?php

include_once('log_database_data.php'); 

try
{
        $mysqlClient = new PDO('mysql:host='.$host.';dbname='.$dbname.';', $username, $password);
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}
?>