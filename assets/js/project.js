// @codekit-prepend "/plugins/modernizr.js";
// @codekit-prepend "/plugins/jquery-1.11.3.min.js";
// @codekit-prepend "/plugins/jquery.equalheights.min.js";
// @codekit-prepend "/plugins/fastclick.js";

// @codekit-prepend "foundation/foundation.js";
// @codekit-prepend "foundation/foundation.dropdown.js";
// @codekit-prepend "foundation/foundation.offcanvas.js";
// @codekit-prepend "foundation/foundation.magellan.js";
// @codekit-prepend "foundation/foundation.topbar.js";


// closing modal
function modalClose() {

	// modal close
	$('.js-modal-close').click(function(e){
		
		$(this).closest('.js-modal').removeClass('modal-show');
		$('html').removeClass('modal-overlay');

		e.preventDefault();
	});
}

// opening modal
function modalShow(modalClass) {

	$(modalClass).addClass('modal-show');
}

// modal show and close
function modalShowClose() {
	
	// trigger modal based on click event 
	$('.js-modal-show').each(function(index, trigger){

		var modalOnClick = ('.' + $(trigger).data('modal'));

		// modal-show on click
		$(trigger).click(function(e) {
			
			e.preventDefault();
			
			modalShow(modalOnClick);
			
			if( $(modalOnClick).hasClass('modal-show') ) {
				$('html').addClass('modal-overlay');
			}
		
		});
	});
	
	modalClose();	
}

$(document).on('ready', function() {
	
	// training slider
	$('.js-carousel-training').slick({
		arrows: false,
		dots: true,
		infinite: false,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
		{
		  breakpoint: 1279,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3,
		    infinite: true,
		    dots: true
		  }
		},
		{
		  breakpoint: 959,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 2
		  }
		},
		{
		  breakpoint: 769,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1
		  }
		}
		]
	});
	
	// content sliders
	$('.js-slider-section').slick({
		prevArrow:"<img class='a-left control-c prev slick-prev' src='/assets/images/slider-arrow-left.png'>",
		nextArrow:"<img class='a-right control-c next slick-next' src='/assets/images/slider-arrow-right.png'>"
	});
	$('.js-slide-equalHeight').equalHeights();
	
	// contact form validation and sending
	$("#formContact").validate({
		
		// converting error message to placeholder to style with red background
		errorPlacement: function (error, element) {
		    element.attr("placeholder", error[0].outerText);
		},
		
		submitHandler: function(form) {
	        $.ajax({
	            url: 'contact-form-post2.php',
	            type: 'POST',
	            data: $(form).serialize(),
	            success: function(response) {
		            
		            var submit = $(form).find( 'button[type="submit"]' );
		            
					$( ".contactResponse" ).html('Your message has been sent. We will contact you soon.');
		
					submit.text('Sent, Thank you');
				
					submit.attr("disabled", true); 
	            }            
	        });
	    }
	});

	// modal show and close
	modalShowClose();
	
	// toggle sections with additional content
	$('.js-toggle-hidden').click(function() {
		
		$(this).siblings('.additional-info').slideToggle(1000);
		
		$(this).toggleClass('expanded');
		if($(this).hasClass('expanded')) {
			$(this).html('Read Less');
		}
		else {
			$(this).html('Read More');
		}
	});
	
	// disabling scrolling on off canvas(mobile) navigation when opened
	$(document)
		.on('open.fndtn.offcanvas', '[data-offcanvas]', function() {
		  $('html, body').css('overflow', 'hidden');
		   $('aside.right-off-canvas-menu').css('display', 'block');
		})
		.on('close.fndtn.offcanvas', '[data-offcanvas]', function() {
		  $('html, body').css('overflow', 'auto');
		  $('aside.right-off-canvas-menu').css('display', 'none');
	});
	
	// adding and removing class of active from nav items
	(function() {
	    // pathname from the address page
	    var pathname = window.location.pathname;
	    	
	    // adds active to every li 
	    $(".top-bar .top-bar-section li a").each(function() {
	        // checks if its the same on the address bar
	        if (pathname == (this.pathname)) {
	            $(this).parent("li").removeClass("active").addClass("active");
	        }
	    });
	})();
	
});
