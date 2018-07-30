jQuery(function($) {
    "use strict";

    var gamba = window.gamba || {};

    gamba.mainFunction = function(){

        // show gallery
        $(".fancybox").fancybox({
            helpers : {
                thumbs  : {
                    width   : 50,
                    height  : 50
                },
                overlay: {
                    locked: false
                }
            }
        });


        // SHOW HIDE COMMENT WHEN CLICK BUTTON REALY
        $('div[class*="merge"]').css("display","none");
        $('.reply-1').click(function(event) {
            $('.merge-1').toggle(300);
        });
        $('.reply-2').click(function(event) {
            $('.merge-2').toggle(300);
        });
    };

    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        gamba.mainFunction();
    });
    /*=====  End of INIT FUNCTIONS  ======*/

});
