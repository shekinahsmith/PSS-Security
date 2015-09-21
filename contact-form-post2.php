<?php 
if(isset($_POST['submit'])){
    $to = "shekinahc.smith@gmail.com"; // this is your Email address
    $from = $_POST['Email']; // this is the sender's Email address
    $names = $_POST['FirstLastName'];
    $subject = "PSS Website Contact Form";
    $message = $_POST['textarea'];
 

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $names . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>