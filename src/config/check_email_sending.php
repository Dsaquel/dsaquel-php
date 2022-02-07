<?php  

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailUser = $_POST['mailUser'];
    $message = $_POST['message'];

    $mailTo = "noblet-ouways@dsaquel.com";
    $headers = "From: ". $mailUser;
    $txt = "Mon Roi, vous aviez reçu une lettre de ". $name .".\n\n". $message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: ../index.php?mailSend");
}
?>