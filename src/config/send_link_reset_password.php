<?php
if (isset($_POST['submit_email']) && $_POST['email']) {
  include_once('../db/login_database.php');
  $queryPrepared = $mysqlClient->prepare('SELECT email, password FROM user WHERE email= :email');
  $queryPrepared->execute([
    'email' => $_POST['email'],
  ]);
  $result = $queryPrepared->fetch();
  if ($result) {
    $email = md5($result['email']);
    $password = md5($result['password']);

    $to      = $_POST['email'];
    $subject = 'Reset password';
    $link = "<a href='http://localhost/src/app/reset_password.php?key=' . $email . '&token=' . $password>Click pour reset le password</a>";
    $message = '<p>Clique sur le lien pour reset ton mot de passe bg</p>' . $link;
    $headers = 'From: contact@dsaquel.com' . "\r\n" .
      'Reply-To: contact@dsaquel.com' . "\r\n" .
      'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
    echo "toto";
    header('location: http://localhost/src/app/reset_password.php?key=' . $email . '&token=' . $password);
  }
}
?>

<p></p>