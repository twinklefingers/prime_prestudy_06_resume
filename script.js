$(document).ready(function(){
	$('.hidden').hide();
	$('.clickMe').click(function () {
	    if ($('.hidden').is(':hidden')) {
	        $('.hidden').show();
	    } else {
	        $('.hidden').hide();
	    }
	}); 
});

/*
I tried all these... :/

$(document).ready(function(){
 $('button.clickMe').on('click', function() {
   $('main.hidden').show();
   $('button.clickMe').remove();
  }); 
});

$(document).ready(function(){
 $('button').on('click', function) {
   $('main').show();
   $('button').remove();
  }); 
});

$(document).ready(function(){
 $('.clickMe').on('click', function) {
   $('.hidden').show();
   $('.clickMe').remove();
  }); 
});


$(document).ready(function(){
	$('.hidden').hide();
	$('.clickMe').click(function () {
	    if ($('.hidden').is(':hidden')) {
	        $('.hidden').show();
	    } else {
	        $('.hidden').hide();
	    }
	}); 
});

$(document).ready(function(){
	$('.hidden').hide();
	$('.clickMe').on('click', function(){
		$('.hidden').show();
	});
});

other possible leads:
Toggle
mouseenter / mouseleave relationship
*/

/*
doc ready
click something
hide the button
show the body
*/


