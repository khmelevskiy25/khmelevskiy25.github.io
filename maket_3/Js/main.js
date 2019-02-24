$(document).ready(function(){
	$('.menu-burg').on('click', function(){
		$('.menu').toggleClass('show-menu')
	});
	$('.close').on('click', function(){
		$('.menu').removeClass('show-menu');
	});
	
	$('.item').each(function(){
	  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
	});

	anime.timeline({loop: true})
	  .add({
	    targets: '.item .letter',
	    translateX: [40,0],
	    translateZ: 0,
	    opacity: [0,1],
	    easing: "easeOutExpo",
	    duration: 1200,
	    delay: function(el, i) {
	      return 500 + 30 * i;
	    }
	  }).add({
	    targets: '.item .letter',
	    translateX: [0,-30],
	    opacity: [1,0],
	    easing: "easeInExpo",
	    duration: 1100,
	    delay: function(el, i) {
	      return 100 + 30 * i;
	    }
	  });

});