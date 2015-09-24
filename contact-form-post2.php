<?php
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		$name    = $_POST['firstLastName'];
	    $email   = $_POST['email'];
	    $message = $_POST['message'];
	
	    $to      = "shekinahc.smith@gmail.com";
	    $subject = "Website Contact Form Message";
	    $headers = "From: $email";
	
	    mail($to,$subject,$message,$headers);
	}
    
?>
   
