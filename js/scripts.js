$(document).ready(function () {
    var holdWidth = $(window).width();
    $(window).on('resize', function () {
        newPercentage = (($(window).width() / holdWidth) * 100) + "%";
        $("html").css("font-size", newPercentage)
        
    });
});