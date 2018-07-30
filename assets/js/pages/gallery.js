jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    gamba.mainFunction = function(){

        // init Isotope
        var $grid = $('.grid-gallery').isotope({
            itemSelector: '.grid-item-wrapper',
            layoutMode: 'masonry',
        });

        // filter functions
        var filterFns = {
            // show if name ends with -ium
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        // bind filter button click
        $('.tab-menu').on('click', '.tab', function () {
            var filterValue = $(this).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[filterValue] || filterValue;
            $grid.isotope({filter: filterValue});
        });
        // change is-checked class on buttons
        $('.tab-menu').each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', '.tab', function () {
                $buttonGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });


        // show gallery
        $(".fancybox").fancybox({
            prevEffect  : 'none',
            nextEffect  : 'none',
            helpers : {
                title   : {
                    type: 'outside'
                },
                thumbs  : {
                    width   : 80,
                    height  : 80
                },
                overlay: {
                    locked: false
                }
            }
        });

        // Effect hover
        $('.grid-gallery .grid-item').directionalHover();
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        gamba.mainFunction();
    });
    /*=====  End of INIT FUNCTIONS  ======*/

});
