<form class="column small-12 medium-6 large-6 contact-form" id="formContact" action="contact-form-post2.php" method="post">
	
	<div class="row">
	
		<div class="column large-12">
	
			<div class="contactResponse"></div>
			
		</div>
	</div>
	
	<div class="row">

		<div class="column large-12">
			
			<input type="text" name="firstLastName"  id="cname" placeholder="First & Last Name" value required>
		</div>

	</div>
	<!--/.row -->

	<div class="row">

		<div class="column large-12">
			
			<input type="email" name="email" id="cemail"  placeholder="Email" value required>
		</div>
	
	</div>
	<!--/.row -->

	<div class="row">

		<div class="column large-12">
			
			<textarea name="message" rows="7" id="ccomment" value required></textarea>
		</div>

	</div>
	<!-- /.row -->

	<div class="row">

		<div class="column large-12">
			<button type="submit" id="submit" name="submit" class="button submit">Submit</button>

		</div>
	</div>

</form>
<!-- /.contact-form -->