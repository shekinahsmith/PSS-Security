// @codekit-prepend "modernizr.js";
// @codekit-prepend "jquery-1.11.3.min.js";
// @codekit-prepend "jquery.equalheights.min.js";
// @codekit-prepend "fastclick.js";

// @codekit-prepend "foundation/foundation.js";
// @codekit-prepend "foundation/foundation.dropdown.js";
// @codekit-prepend "foundation/foundation.offcanvas.js";
// @codekit-prepend "foundation/foundation.magellan.js";
// @codekit-prepend "foundation/foundation.topbar.js";


// modal show and close
function modalShowClose() {
	
	var modal = $('.' + $('.js-modal-show').data('modal'));
	
	// modal-show
	$('.js-modal-show').click(function() {
		
		modal.addClass('modal-show');
		
		if( modal.hasClass('modal-show') ) {
			$('html').addClass('modal-overlay');
		}
	});
	
	// modal close
	$('.js-modal-close').click(function(){
		
		modal.removeClass('modal-show');
		$('html').removeClass('modal-overlay');
	});
	
}

$(document).on('ready', function() {

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		$('body').removeClass('f-topbar-fixed');
	}
	else {
		$('body').addClass('f-topbar-fixed');
	}
	   
	// hero landing slider 
	$('.js-hero-slider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		fade: true
	});
	
	// training slider
	$('.js-carousel-training').slick({
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
		    slidesToShow: 2,
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
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});
	
	// employee termination slider
	$('.js-slider-employee-terminations').slick();
	$('.js-slide-equalHeight').equalHeights();
	
	// contact form validation
	$("#formContact").validate({
		
		// converting error message to placeholder to style with red background
		errorPlacement: function (error, element) {
		    element.attr("placeholder", error[0].outerText);
		}
	});
	
	// sending contact form data 
	$(".contact-form").submit(function(event) {
		
        /* stop form from submitting normally */
        event.preventDefault();

        /* get some values from elements on the page: */
        var $form = $( this ),
			$submit = $form.find( 'button[type="submit"]' ),
			name_value = $form.find( 'input[name="firstLastName"]' ).val(),
			email_value = $form.find( 'input[name="email"]' ).val(),
			message_value = $form.find( 'textarea[name="message"]' ).val(),
			url = $form.attr('action');

        /* Send the data using post */
        var posting = $.post( url, { 
		   name: name_value, 
		   email: email_value, 
		   message: message_value 
		});

		posting.done(function( data ) {
			
			/* Put the results in a div */
			$( ".contactResponse" ).html('Your message has been sent. We will contact you soon.');
			
			/* Change the button text. */
			$submit.text('Sent, Thank you');
			
			/* Disable the button. */
			$submit.attr("disabled", true);
		});
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
