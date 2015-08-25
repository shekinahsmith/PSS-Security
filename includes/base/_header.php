<!DOCTYPE html>
<!--[if lt IE 7 ]> <html lang="en" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="en" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="en" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="en" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!--> 
<html lang="en"> <!--<![endif]-->


<head>

	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<!--[if IE]>
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
	<![endif]-->
	<link rel="icon" href="/assets/images/favicon.png">

	<? 
		// adding body class based on page URI

		$siteURL = $_SERVER['SCRIPT_NAME']; 

	?>
	<title><? echo $pageTitle ?></title>

	<!-- META -->

	<? //include 'includes/base/_header-meta.php'; ?>

	<!-- CSS -->

	<? include 'includes/base/_header-css.php'; ?>

	<!-- HTML5 MODERNIZER -->
	<script src="assets/js/modernizr.js"></script>


</head>

<body class="">