<? 
	include 'includes/base/_header.php'; 
	include 'includes/masthead/_masthead.php';
	include 'includes/heroes/_hero-landing.php';  
?>

	<div data-magellan-destination="heroTarget"></div>
		<a name="heroTarget"></a>
		
	<section class="pss-video">
		
		<div class="row">

			<div class="column small-12 small-text-center">
				
				<h2 class="underline underline-is-blue underline-is-centered">How We Work</h2>
				
			</div>
		</div>

		<div class="row">

			<div class="column large-10 large-centered">
				
				<div class="flex-video">
				        <video width="100%" controls preload="auto">
						  <source src="/assets/video/pss-video.mp4" type="video/mp4" media="screen and (min-width:641px)">
						  <source src="/assets/video/pss-video.ogv" type="video/ogg" media="screen and (min-width:641px)">
						  <source src="/assets/video/pss-video.webm" type="video/webm" media="screen and (min-width:641px)">
						  <source src="/assets/video/pss-video-small.mp4" type="video/mp4" media="screen and (max-width:640px)">
						  <source src="/assets/video/pss-video-small.ogv" type="video/ogg" media="screen and (max-width:640px)">
						  <source src="/assets/video/pss-video-small.webm" type="video/webm" media="screen and (max-width:640px)">
						  Your browser doesn't support HTML5 video tag.
						</video>
				</div>

			</div>
			<!-- /.column -->

		</div>
		<!-- /.row -->

	</section>
	<!-- /.pss-video -->

	<? 
		include 'includes/sections/_section-service-blocks.php'; 
	?>

<? 
	include 'includes/modals/_modal-pss-video.php';
	include 'includes/base/_footer.php'; 
?>