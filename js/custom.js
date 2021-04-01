jQuery(document).ready(function ($) {
	$(".a_top").click(function(e){   
        var offset = $($(this).attr('href')).offset().top - 0; 
        $('html, body').animate({scrollTop:offset}, 500); 
        e.preventDefault();
    });

    $(".burgermenu").click(function(){
        $(".hm_nav").toggleClass("show");
        $(".overlay_menu ").toggleClass("show");
    });

    $(".overlay_menu").click(function(){
        $(".hm_nav").toggleClass("show");
        $(".overlay_menu ").toggleClass("show");
    });
});