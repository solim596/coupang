$(function () {

    $(".accordion-menu > ul > li a").click(function () {
        $(this).next().slideToggle();
    });
    $(document).ready(function () {
        if ($(window).width()) {
            $(".accordion-menu > ul > li").on('click', function (e) {
                e.preventDefault();
            });
        }
    });
});