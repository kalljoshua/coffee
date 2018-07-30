jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    gamba.headerFunction = function() {
        //js for menu PC
        // Add class fixed for menu when scroll
        var window_height = $(window).height();

        $(window).on('scroll load', function (event) {
            if ($(window).scrollTop() > window_height) {
                $(".header-main").addClass('header-fixed');
            }
            else {
                $(".header-main").removeClass('header-fixed');
                $(".header-main").removeClass('hide-menu');
            }
        });

        // Show menu when scroll up, hide menu when scroll down
        var lastScroll = 50;
        $(window).on('scroll load', function (event) {
            var st = $(this).scrollTop();
            if (st > lastScroll) {
                $('.header-main').addClass('hide-menu');
                if ($('.nav-search').hasClass('hide') === false) {
                    $('.nav-search').toggleClass('hide');
                }
            }
            else if (st < lastScroll) {
                $('.header-main').removeClass('hide-menu');
            }

            if ($(window).scrollTop() <= 200 ){
                $('.header-main').removeClass('.header-fixed').removeClass('hide-menu');
            }
            else if ($(window).scrollTop() < window_height && $(window).scrollTop() > 0) {
                $('.header-main').addClass('hide-menu');
            }
            lastScroll = st;
        });

        
        // Show - hide box search on menu
        $('.button-search').on('click', function () {
            $('.nav-search').toggleClass('hide');
            $('.nav-search input').focus();
        });

        //hide box seach when click outside
        $('body').on('click', function (event) {
            if ($('.button-search').has(event.target).length === 0 && !$('.button-search').is(event.target) && $('.nav-search').has(event.target).length === 0 && !$('.nav-search').is(event.target)) {
                if ($('.nav-search').hasClass('hide') === false) {
                    $('.nav-search').toggleClass('hide');
                }
            }
        });

        // Menu Mobile
        $(".wrapper-menu-mobile").css("min-height", $(window).height());
        $(".wrapper-search-mobile").css("min-height", $(window).height());

        // show menu
        $(".hamburger-menu-mobile").on("click", function(){
            $('body').addClass("open-menu-mobile");
        });
        $(".mb-button-close").on("click", function(){
            $('body').removeClass("open-menu-mobile");
        });

        //show search
        $(".button-search-mobile").on("click", function(){
            $('body').addClass("open-search-mobile");
        });
        $(".mb-button-close").on("click", function(){
            $('body').removeClass("open-search-mobile");
        });


        // show hide dropdown menu
        $('.mb-nav>.dropdown>.icons-dropdown').on('click', function(){
            if ($(this).parents('.dropdown').hasClass('mb-menu-dropdown-open') === true) {
                $(this).parents('.dropdown').removeClass('mb-menu-dropdown-open');
            }
            else {
                $('.mb-nav .dropdown').removeClass('mb-menu-dropdown-open');
                $(this).parents('.dropdown').addClass('mb-menu-dropdown-open');
            }
        });
        $('.dropdown-2 .icons-dropdown').on('click', function(){
            $(this).parents('.dropdown-2').toggleClass('mb-menu-dropdown-open');
        });
    };

    gamba.mainFunction = function() {

        // ----------------------- WOW-JS --------------------------- //
        new WOW().init();

        // ----------------------- COUNT TO --------------------------- //
        if($(".count-number").length) {
            $('.count-number-item').appear(function(){
                setTimeout(function(){
                    $('.count-number-item .count').countTo();
                },300);
            });
        }

         // ----------------------- BACK TOP --------------------------- //
        $('#back-top .link').on('click', function () {
            $('body,html').animate({
                scrollTop: 0
            }, 900);
            return false;
        });

        var temp = $(window).height();
        $(window).on('scroll load', function (event) {
            if ($(window).scrollTop() > temp){
                $('#back-top .link').addClass('show-btn');
            }
            else {
                $('#back-top .link').removeClass('show-btn');
            }
        });

        // ----------------------- Play videos --------------------------- //
        // JS for section Videos bg
        if ($('.video-thumbnail').length) {
            var gurl = $(".video-embed")[0].src;
            $(".video-button-play ").on('click', function(event) {
                $(".video-embed").addClass('show-video');
                $(".video-button-close").addClass('show-video');
                $(".video-embed")[0].src += "&autoplay=1";
                event.preventDefault();
            });

            $(".video-button-close").on('click', function(event) {
                $(".video-embed")[0].src = gurl;
                $(".video-embed").removeClass('show-video');
                $(".video-button-close").removeClass('show-video');
            });
        };

        // ----------------------- Our Team --------------------------- //
        if ($('.our-team-list').length) {
            $('.our-team-list').slick({
                dots: false,
                arrows: false,
                infinite: true,
                speed: 700,
                slidesToShow: 3,
                slidesToScroll: 3,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                        }
                    },
                    {
                        breakpoint: 415,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        };

        // ----------------------- List logo --------------------------- //
        if ($('.slider-logo-wrapper').length) {
            $('.slider-logo-wrapper').slick({
                dots: false,
                arrows: false,
                infinite: true,
                speed: 300,
                slidesToShow: 5,
                slidesToScroll: 1,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 769,
                        settings: {
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 481,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 381,
                        settings: {
                            slidesToShow: 2
                        }
                    }
                ]
            });
        }


        // ----------------------- Testimonial slide --------------------------- //
        if ($('.testimonial-list').length) {
            $('.testimonial-list').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                speed: 400,
                vertical: true,
                autoplay: true,
                autoplaySpeed: 5000,
                cssEase: 'linear',
                asNavFor: '.testimonial-avatar'
            });

            $('.testimonial-avatar').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 400,
                asNavFor: '.testimonial-list',
                dots: false,
                arrows: false,
                centerMode: true,
                focusOnSelect: true,
                centerPadding: '0px'
            });
        }

        // ----------------------- Footer JS --------------------------- //
        // slide gallery footer
        $('.gamba-gallery .content-widget').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            speed: 500,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        autoplay: false
                    }
                }
            ]
        });

        if ($(window).width() > 767) {
            $('.body-wrapper').css('padding-bottom',$('.footer').height());
        }
    };

    gamba.datepick = function() {
        // js for calendar
        $('.input-daterange, .archive-datepicker').datepicker({
            format: 'mm/dd/yy',
            maxViewMode: 0
        });

        // js for time
        $('.times-open').timepicker({ 
            'scrollDefault': 'now' 
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        gamba.headerFunction();
        gamba.mainFunction();
        gamba.datepick();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

});
