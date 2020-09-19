$(document).ready(function () {
    $(window).on('load', function () {
        $('.preloader').delay(500).fadeOut(500)
    });

    $('.hamburger-menu, #menu li a').on('click', function () {
        $('.hamburger-menu .line-top').toggleClass('current');
        $('.hamburger-menu .line-center').toggleClass('current');
        $('.hamburger-menu .line-bottom').toggleClass('current');
        $('#menu').toggleClass('open');
    });

    $('#menu li .nav-link, .footerBox ul li a').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = '70';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInSine');
        event.preventDefault();
    });

    function sticky_header() {
        var wind = $(window);
        var sticky = $('.wrapperHeader');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll < 30) {
                sticky.removeClass('sticky');
            } else {
                sticky.addClass('sticky');
            }
        });
    }

    sticky_header();

    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200);
        } else {
            $('.back-to-top').fadeOut(200);
        }
    });

    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    $('.owl-carousel.clientCarousel').owlCarousel({
        loop: true,
        margin: 30,
        items: 5,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 1000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 3
            },
            575: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });

    $('.owl-carousel.mobileCarousel').owlCarousel({
        dots: true,
        loop: true,
        nav: false,
        autoplay: true,
        smartSpeed: 2000,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            375: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    });

    $('.owl-carousel.meetCarousel').owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
        smartSpeed: 2000,
        autoplayTimeout: 3000,
        autoplay: true,
        responsive: {
            576: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },

            1200: {
                items: 1
            },
        }
    });

    $('#play-video').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
            },
            srcAction: 'iframe_src',
        }
    });

    $('[data-toggle="popover"]').popover({
        container: 'body',
        placement: 'right',
        trigger: 'hover',
        animated: 'true',
    });
});