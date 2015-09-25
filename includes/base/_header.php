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
	<link rel="icon" href="/assets/images/favicon.ico">

	<? 
		// adding body class based on page script name - replacing file extension and dashes as well
		$pageClass = str_replace( array('.php', '_'), array('', '-'), basename($_SERVER['SCRIPT_NAME']) );
		$pageTitle = str_replace( array('.php', '-'), array('', ' '), basename($_SERVER['SCRIPT_NAME']) );
		$pageTitle = ucwords($pageTitle);

	?>
	<title><?= 'PSS Security | '. $pageTitle ?></title>

	<!-- META -->

	<? //include 'includes/base/_header-meta.php'; ?>

	<!-- CSS -->

	<? include 'includes/base/_header-css.php'; ?>

	<? // project styles - jquery and modernizr are prepended through codekit ?>
	<script src="assets/js/project.min.js"></script>


</head>

<body class="page-<?= $pageClass; ?>">
	<?include 'includes/navigation/_nav-mobile-fixed-header.php';?>