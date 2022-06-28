

(function($) {
    "use strict";
    $(window).on('load', function() {
        var setHeader = function(){
            if ($(window).scrollTop() >= 56) {
                $('header').addClass('scroll-header');
            } else {
                $('header').removeClass('scroll-header');
            }
        }
        
        $(window).scroll(function() {
            setHeader();
        });
        setHeader();

        var wow = new WOW({
            mobile: false
        });
        wow.init();
    });

}(jQuery));