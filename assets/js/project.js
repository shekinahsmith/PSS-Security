// @codekit-prepend "modernizr.js";
// @codekit-prepend "jquery-1.11.3.min.js";
// @codekit-prepend "jquery.flexslider.min.js";
// @codekit-prepend "fastclick.js";

// @codekit-prepend "foundation/foundation.js";
// @codekit-prepend "foundation/foundation.dropdown.js";
// @codekit-prepend "foundation/foundation.offcanvas.js";
// @codekit-prepend "foundation/foundation.topbar.js";




$(document).on('ready', function() {

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
		$('body').removeClass('f-topbar-fixed');
	}
	else {
		$('body').addClass('f-topbar-fixed');
	}

	 $('.js-hero-slider').flexslider({
	 	//animation: "slide",
        direction: "vertical"
	 });
});