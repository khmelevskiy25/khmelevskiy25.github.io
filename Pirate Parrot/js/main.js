$(document).ready(function(){
var $btnTop = $('.btn-top')
				$(window).on("scroll", function(){
					if ($(window).scrollTop() >= 900){
						$btnTop.fadeIn();
					}else {
						$btnTop.fadeOut();
					}
				});
			$btnTop.on("click", function(){
				$("html,body").animate({scrollTop:0}, 1000);
	});
});