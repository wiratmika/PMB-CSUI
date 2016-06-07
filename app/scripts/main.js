$(document).ready(function() {
    var hidden = true;
    var breakPosition = $('#news').offset().top;

    $(window).scroll(function() {
        var currentPosition = $(window).scrollTop();

        if (currentPosition >= breakPosition && hidden) {
            $('nav').fadeIn(350);
            hidden = false;
        } else if (currentPosition < breakPosition && !hidden) {
            $('nav').fadeOut(350);
            hidden = true;
        }
    });

    $(function() {
        $('a[href*="#"]:not([href="#"]):not([href="#carousel-agenda"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);

                    return false;
                }
            }
        });
    });

    $('.testimony').typed({
        strings: [
            'Semangat ya PMB nya! This is just the beginning!<br>- Fear The Merrick',
            'Ya ibaratnya udah masuk tol, ga mungkin keluar tiba2 kan? Ayo tetap senyum :)<br>- Random Stranger'
        ],
        typeSpeed: 0,
        loop: true,
        backDelay: 4000,
    });
});
