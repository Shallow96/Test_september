$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        dots: false,
        center: false,
        loop: true,
        margin: 0,
        nav: false,
        autoWidth: true,
        padding: 0,
        smartSpeed: 800,
        navText:false,
        responsive:{

            0:{
                items: 6,
            },
            1200:{
                items: 6,
            }
        }
    });
});


$(document).ready(function () {
    $(".next_quest").click( function () {
        $(".first_check").animate({left: -900},1700);
        $(".second_check").animate({left: 0},1700);
    });
    $(".prev_q").click( function () {
        $(".first_check").animate({left: 0},1700);
        $(".second_check").animate({left: 900},1700);
    });
    $(".next_q").click( function () {
        $(".second_check").animate({left: -900},1700);
        $(".third_check").addClass("preloader");
        $(".fourth_check").addClass("contact_form");
    });

})