
(function($){
    'use strict';

/* =================================
    Home Slider	
=====================================*/

    $(document).ready(function(){
        $(".home-solider").owlCarousel({
            items:1,
            loop:false,
            nav:true,
            navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
        });

    $(".icon-search").click(function(){
        $(".search-bar").toggle();
    });


      });

}(jQuery));
