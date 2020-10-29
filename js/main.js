$(document).ready(function () {


	$('.grid').isotope({
		itemSelector: '.portfolio1',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
		columnWidth: 1
		}
	})


	$('.masonry').masonry({
	  // options...
	  itemSelector: '.grid-item',
	  columnWidth: 1
	});

	$('.grid').masonry({
	  // options...
	  itemSelector: '.portfolio1',
	  columnWidth: 1
	});


})


$(document).ready(function() {

	"use strict";

	  $('.popup').magnificPopup({
	  type: 'image',
	  gallery:{
	    enabled:true
	  }
	});

});



$(document).ready(function() {

	"use strict";

	$('.element-item, .blog1').tilt({
        maxTilt: 3,
        glare: true,
        maxGlare: .4,
        reverse: true,
        scale: 1
    });

});


$(document).ready(function() {

	"use strict";

	$( ".glitch-img" ).mgGlitch({
	  destroy : false, 
	  glitch: true, 
	  scale: false, 
	  blend : true, 
	  blendModeType : 'hue', 
	  glitch1TimeMin : 600, 
	  glitch1TimeMax : 900, 
	  glitch2TimeMin : 10
	  });

});

tippy('.tippy-tooltip', {
	animation: 'scale-extreme',
	arrow: true,
	arrowType: 'sharp',
	placement: 'top',
	theme: 'customize'

});


$("#js-rotating").Morphext({
    // The [in] animation type. Refer to Animate.css for a list of available animations.
    animation: "rotateInDownLeft",
    // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
    separator: ",",
    // The delay between the changing of each phrase in milliseconds.
    speed: 2000,
    complete: function () {
        // Called after the entrance animation is executed.
    }
});





$(document).ready(function() {

	

});



