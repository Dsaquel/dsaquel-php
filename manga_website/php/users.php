<?php


$surname = $_POST['nom'];
$name = $_POST['prenom'];
$email = $_POST['email'];
$birth = $_POST['birthday'];
$password = $_POST['password'];
$pseudo = $_POST['pseudo'];

$newUser = $sqlQuery -> prepare('INSERT INTO users_profile (surname, name, email, birth, password, nickname) 
VALUES (:surname, :name, :email, :birth, :password, :pseudo)');
$newUser->execute([
    'surname' => $surname,
    'name' => $name,
    'email' => $email,
    'birth' => $birth,
    'password' => $password,
    'pseudo' => $pseudo,
]);


$users = [
    [
        'nom' => 'Noblet',
        'prenom' => 'Ouways',
        'email' => 'noblet.ouwaysgta5@gmail.com',
        'birthday' => '31/01/2003',
        'password' => 'Oui',
        'pseudo' => 'Dsaquel',
    ],
];
