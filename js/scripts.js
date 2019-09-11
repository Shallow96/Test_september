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