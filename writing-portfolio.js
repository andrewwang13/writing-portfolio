$(document).ready(function() {

var fadetime=100;

	// $("#n1_text").mouseover(function(){
	// 	$("#n1_text").fadeTo(fadetime,1)
	// 	$("#n1_tile").fadeTo(fadetime,0)
	// });
	// $("#n1_text").mouseleave(function(){
	// 	$("#n1_text").fadeTo(fadetime,0)
	// 	$("#n1_tile").fadeTo(fadetime,1)
	// });

	$('.nerdwallet_tile').mouseover(function(){
		$(this).find('.tile_letter').fadeTo(fadetime,1)
		$(this).find('.tile_bg').fadeTo(fadetime,0)
	});

	$('.nerdwallet_tile').mouseleave(function(){
		$(this).find('.tile_letter').fadeTo(fadetime,0);
		$(this).find('.tile_bg').fadeTo(fadetime,1)
	});

	$('.crains_tile').mouseover(function(){
		$(this).find('.tile_letter').fadeTo(fadetime,1)
		$(this).find('.tile_bg_crains').fadeTo(fadetime,0)
	});

	$('.crains_tile').mouseleave(function(){
		$(this).find('.tile_letter').fadeTo(fadetime,0);
		$(this).find('.tile_bg_crains').fadeTo(fadetime,1)
	});

	$('.trib_tile').mouseover(function(){
		$(this).find('.tile_letter').fadeTo(fadetime,1)
		$(this).find('.tile_bg_trib').fadeTo(fadetime,0)
	});

	$('.trib_tile').mouseleave(function(){
		$(this).find('.tile_letter').fadeTo(fadetime,0);
		$(this).find('.tile_bg_trib').fadeTo(fadetime,1)
	});

	$('.lat_tile').mouseover(function(){
		$(this).find('.tile_letter').fadeTo(fadetime,1)
		$(this).find('.tile_bg_trib').fadeTo(fadetime,0)
	});

	$('.lat_tile').mouseleave(function(){
		$(this).find('.tile_letter').fadeTo(fadetime,0);
		$(this).find('.tile_bg_trib').fadeTo(fadetime,1)

	});
		$('.ap_tile').mouseover(function(){
		$(this).find('.tile_letter_black').fadeTo(fadetime,1)
		$(this).find('.tile_bg_black').fadeTo(fadetime,0)
	});

	$('.ap_tile').mouseleave(function(){
		$(this).find('.tile_letter_black').fadeTo(fadetime,0);
		$(this).find('.tile_bg_black').fadeTo(fadetime,1)
	});
});

