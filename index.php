<? 
	include 'includes/base/_header.php'; 
	include 'includes/masthead/_masthead.php';
	include 'includes/heroes/_hero-landing.php';  
?>
	
	<section class="who-are-we" data-magellan-destination="heroLandingTarget">
		<a name="heroLandingTarget"></a>

		<div class="row">

			<div class="column small-12 small-centered small-text-center medium-6 medium-uncentered medium-text-left medium-push-6">

				<? include 'includes/sections/_section-who-we-are.php'; ?>

				<div class="column small-12 medium-8 large-6">
					<div class="button">Learn More</div>
				</div>
			</div>

		</div>
		<!-- /.row -->

	</section>
	
	<!-- /.who-are-we -->

	<section class="goal">

		<div class="row">

			<div class="column small-12 small-centered small-text-center medium-6 medium-uncentered medium-text-left">

				<? include 'includes/sections/_section-our-goal.php'; ?>

				<div class="column small-12 medium-8 large-6">
					<div class="button">Learn More</div>
				</div>
			</div>

		</div>
		<!-- /.row -->

	</section>
	<!-- /.goal -->

	<? 
		include 'includes/sections/_section-service-blocks.php'; 
		include 'includes/sections/_section-contact.php'; 
	?>

<? include 'includes/base/_footer.php'; ?>