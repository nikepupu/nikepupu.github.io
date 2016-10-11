
$(function() {
    var offset = $("#sidebar").offset();
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > offset.top) {
            $("#sidebar").stop().animate({
                marginTop: $(window).scrollTop() - offset.top });
        } else {
            $("#sidebar").stop().animate({
                marginTop: 0
            });
        };
    });
});