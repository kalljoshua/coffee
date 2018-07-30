jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/

    gamba.mainFunction = function() {


        // Type words js home default
        if ($(".homepage-default").length) {
            setTimeout(function(){
                $(".homepage-default .main-title .text").typed({
                    strings: ["coffee is always a good idea"],
                    typeSpeed: 30,
                    backDelay: 500,
                    loop: false,
                });
            }, 1200);

            setTimeout(function(){
                $(".homepage-default .sub-title").typed({
                    strings: ["Life begin after coffee"],
                    typeSpeed: 30,
                    backDelay: 500,
                    loop: false,
                });
            }, 4200);
        }

        // special menu slide
        $('.list-menu').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            fade: true,
            speed: 400,
            cssEase: 'linear',
            asNavFor: '.infomation-menu-wrapper .list-infomation',
            adaptiveHeight: true
        });

        $('.infomation-menu-wrapper .list-infomation').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 400,
            fade: true,
            asNavFor: '.list-menu',
            dots: true,
            arrows: false,
            focusOnSelect: true,
        });

        // click btn-plus active title
        $(".infomation .heading .icons").on("click", function(){
            $(this).parent().toggleClass("active");
        });

        // slide homepage 2 - background slide
        $('.background-slide').slick({
            dots: false,
            arrows: true,
            speed: 700,
            fade: true,
            autoplay: true,
            autoplaySpeed: 7000,
            cssEase: 'linear',
            pauseOnHover: false
        });

        $('.background-slide').on('afterChange', function(event, slick, currentSlide){
            $('.slick-active  .group-title').addClass('animated fadeInDown');
            $('.slick-active  .description').addClass('animated fadeInUp');
            $('.slick-active  .btn-left').addClass('animated fadeInLeft');
            $('.slick-active  .btn-right').addClass('animated fadeInRight');

            $('.slick-active  .group-title').removeClass('hidden');
            $('.slick-active  .description').removeClass('hidden');
            $('.slick-active  .btn-left').removeClass('hidden');
            $('.slick-active  .btn-right').removeClass('hidden');
        });

        $('.background-slide').on('beforeChange', function(event, slick, currentSlide){
            $('.slick-active  .group-title').removeClass('animated fadeInDown');
            $('.slick-active  .description').removeClass('animated fadeInUp');
            $('.slick-active  .btn-left').removeClass('animated fadeInLeft');
            $('.slick-active  .btn-right').removeClass('animated fadeInRight');

            $('.slick-active  .group-title').addClass('hidden');
            $('.slick-active  .description').addClass('hidden');
            $('.slick-active  .btn-left').addClass('hidden');
            $('.slick-active  .btn-right').addClass('hidden');
        });
    };

   

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        gamba.mainFunction();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {
    });

});
