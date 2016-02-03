/* flexslider  **/
function init_imageSlider($,element){
	var $elem = $(element);

	if(!$elem.length){
		return;
	}

	$elem.flexslider({
		animation: "fade",
		selector: ".slides li",
		slideshow: true,
		slideshowSpeed: 5000,		// 5000
		animationDuration: 5000,
		directionNav: false,
		controlNav: true,
		animationLoop: true,
		pausePlay: false,		// try
		useCSS: true
	});
}

jQuery(document).ready(function($) {
	init_imageSlider($,"#sliderBig");
});