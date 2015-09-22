<?php
	$name    = $_POST['firstLastName'];
    $email   = $_POST['email'];
    $message = $_POST['message'];

    $to      = "shekinahc.smith@gmail.com";
    $subject = "Website Contact Form Message";
    $headers = "From: $email";

    if( mail($to,$subject,$message,$headers) )
    {
        echo "<h2>Thank you for your comment</h2>";
    }
    else
    {
        echo "<h2>Sorry, there has been an error</h2>";
    }
?>