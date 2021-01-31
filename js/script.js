var w = 0;
$(function() {
    "use strict";

        $(window).scroll(function() {
            if ($(this).scrollTop() > 90){  
                $('.top-scrolling').addClass("sticky");
            }
            else{
                $('.top-scrolling').removeClass("sticky");
            }
        });
            
       
            
              $(window).on("load", function() {


            /* -------- preloader ------- */
            $('#preloader').delay(2000).fadeOut(500);
            /*------End----------*/
             });
        /* Home page banner */

        if ($(".home-carousel").length > 0) {
            $('.home-carousel').owlCarousel({
                loop:true,
                nav: true,
                dots: false,
                items: 1,
                responsiveClass: true,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause: true,
                autoHeight:true,
                responsive: {
                    0: {
                        arrow: false,
                        nav: false,
                        dots: true,
                    },
                    768: {
                        arrow: false,
                        nav: true,
                        dots: false,
                    },
                }
            });
        }


        /* Home page chef banner */

        if ($(".chef-sec").length > 0) {
            $('.chef-sec').owlCarousel({
                loop:true,
                nav: false,
                items: 4,
                responsiveClass: true,
                autoplay:true,
                autoplayTimeout:5000,
                responsive: {
                    0: {
                        dots: true,
                        nav: false,
                        items: 1,
                    },
                    768: {
                        items: 3,
                        nav: true,
                    },
                    992: {
                        items: 4,
                        nav: true,
                    },
                }
            });
        }

        /* Customer Reviews */

        if ($(".customer-slide").length > 0) {
            $('.customer-slide').owlCarousel({
             autoplay: true,
            loop: true,
            margin: 30,
            touchDrag: true,
            mouseDrag: true,
            items: 1,
            nav: false,
            dots: true,
            autoplayTimeout: 6000,
            autoplaySpeed: 1200,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1200: {
                    items: 2
                }
                }
            });
        }


});