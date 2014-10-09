var sliderSpeed = 500;

$( document ).ready(function() {

	$("#my_screens").children().hide();

	// This handles when the any of the "my" button is clicked 
	$('button#myBtn').on('click', function(){

		// hide all children of the wrapper
		$("#my_screens").children().hide(); 

		var pageID = $(this).attr('toOpen')

		// show corresponding 
		$(pageID).show(function(){

			// Slides the container and shows the projects page
			$(".mainContainer").animate({right:'100%'}, sliderSpeed);
			$(".main").css('overflow-y','visible');

		}); 

	});

	$('img#home').on('click', function(){

		// Slides the container and shows the projects page
		$(".mainContainer").animate({right:'0%'}, sliderSpeed, 'linear');
		$(".main").css('overflow-y','hidden');

	});

});