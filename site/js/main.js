jQuery(document).ready( function($) {
    //comment slick
    $('.partners_slider').slick();

    // //search
    // $("#myInput").on("keyup", function() {
    //     var value = $(this).val().toLowerCase();
    //     $("#accordion .btn-link, #accordion .product-title").filter(function() {
    //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //     });
    // });
    //scroll
    $("[name^='#']").click(function(){
        var _href = $(this).attr("name");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
});
});