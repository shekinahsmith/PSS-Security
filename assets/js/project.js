// @codekit-prepend "modernizr.js";
// @codekit-prepend "jquery-1.11.3.min.js";
// @codekit-prepend "jquery.flexslider.min.js";
// @codekit-prepend "fastclick.js";

// @codekit-prepend "foundation/foundation.js";
// @codekit-prepend "foundation/foundation.dropdown.js";
// @codekit-prepend "foundation/foundation.offcanvas.js";
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
	$('.js-hero-slider').flexslider({
		//animation: "slide",
	direction: "vertical"
	});
	 
	// contact form validation
	$("#formContact").validate({
		
		// converting error message to placeholder to style with red background
		errorPlacement: function (error, element) {
		    element.attr("placeholder", error[0].outerText);
		}
	});
	
	// modal show and close
	modalShowClose();
});

$(window).load(function() {
	
	$('.js-carousel-training').flexslider({
		animation: "slide",
		animationLoop: false,
		itemWidth: 270,
		itemMargin: 0
	});
});