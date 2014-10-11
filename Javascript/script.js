var sliderSpeed = 400;
var audioElement = document.createElement('audio');
audioElement.setAttribute('src', 'resources/sounds/blop.wav');

$( document ).ready(function() {

	animateOnStart();

	$("#my_screens").children().hide();

	setSpringFor($('[name="myProjects"]'));
	setSpringFor($('[name="myMusic"]'));
	setSpringFor($('[name="mySkills"]'));
	setSpringFor($('[name="uxUiCircle"]'));
	setSpringFor($('[name="codingCircle"]'));
	setSpringFor($('[name="musicCircle"]'));

	// This handles when the any of the "my" button is clicked 
	$('button#myBtn').click(function(){

		// hide all children of the wrapper
		$("#my_screens").children().hide(); 

		var pageID = $(this).attr('toOpen')

		// show corresponding 
		$(pageID).show(function(){

			// Slides the container and shows the projects page

			$(".main").css('overflow-y','visible');
			$(".mainContainer").animate({right:'100%'}, sliderSpeed);

			$('#uxUiCircle').delay(500).animate({opacity :'1'});
			$('#codingCircle').delay( 1000 ).animate({opacity :'1'});
			$('#musicCircle').delay( 1500 ).animate({opacity :'1'});


			$('.overlayItem').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
				$('#downArrow_projects').addClass('animated rubberBand');
				$('#downArrow_projects').css('opacity','1');

				$('#downArrow_music').addClass('animated flipInY');
				$('#downArrow_music').css('opacity','1');

			});
			
		}); 

	});

	$('img#home').on('click', function(){
		audioElement.play();
		// Slides the container and shows the projects page
		$(".mainContainer").animate({right:'0%'}, sliderSpeed, 'linear');
		$(".main").css('overflow-y','hidden');

	});

});

function setSpringFor(element){

	// Get a reference to the logo element.
	var el = element.get(0);

	// create a SpringSystem and a Spring with a bouncy config.
	var springSystem = new rebound.SpringSystem();
	var spring = springSystem.createSpring(70, 2);

	// Add a listener to the spring. Every time the physics
	// solver updates the Spring's value onSpringUpdate will
	// be called.
	spring.addListener({
	  onSpringUpdate: function(spring) {
	    var val = spring.getCurrentValue();
	    val = rebound.MathUtil.mapValueInRange(val, 0, 1, 1, 0.8);
	    scale(el, val);
	  }
	});

	// Listen for mouse down/up/out and toggle the
	//springs endValue from 0 to 1.
	el.addEventListener('mousedown', function() {
	  spring.setEndValue(1);
	});

	el.addEventListener('mouseout', function() {
	  spring.setEndValue(0);
	});

	el.addEventListener('mouseup', function() {
	  spring.setEndValue(0);
	});

	// Helper for scaling an element with css transforms.
	function scale(el, val) {
	  el.style.mozTransform =
	  el.style.msTransform =
	  el.style.webkitTransform =
	  el.style.transform = 'scale3d(' +
	    val + ', ' + val + ', 1)';
	}

}

function animateOnStart(){
	$(".containerWrapper").animate({
    width: "1300",
    opacity: 1
    
  }, 2000, function() {
    $(".containerWrapper").css(
    	"max-width", "1300"
    );
  });
}

$(function() {

  $('a[href*=#]:not([href=#])').click(function() {

    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {

        $('.main').animate({scrollTop: target.offset().top}, 0500);
        return false;
      }
    }
  });
});

$(function() {

	$('.littleCircle').bind('click', function(){
		audioElement.play();
		$('.littleCircle').css({

		  'background-color'  : 'white'

		});

		$(this).css({

		  'background-color'  : '#6C7A89'

		});

		var infoToOpen = $(this).attr('toOpen');
		$('.infoBox').css('display', 'none');
		//alert(infoToOpen);
		$('[name='+infoToOpen+']').css('display', 'inline-block');
		$('[name='+infoToOpen+']').addClass('animated pulse');

	});


});