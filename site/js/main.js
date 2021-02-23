jQuery(document).ready( function($) {
    //comment slick
    $('.partners_slider').slick();

    //Site scrolling
    $('.nav a').click( function(e) {
        e.preventDefault();
        var id  = $(this).attr('href');
        var top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1000);
    });

    //Button scroll top
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