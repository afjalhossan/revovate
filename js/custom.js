
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


    $(".testimonial-items").owlCarousel({
        items:1,
        loop:false,
        nav:true,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>']
    });

    $(".brand-names").owlCarousel({
        items:6,
        loop:true,
        nav:false,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        dots:true,
        responsive:{
            0:{
                items:2,
            },
            768:{
                items:4
            },
            1200:{
                items:6
            }

        }
    });


    $("#m_menu").slicknav({
        label: '',
        prependTo :'#m_menu_wrap',
    });

    $(".news-list").owlCarousel({
        items:3,
        loop:false,
        nav:false,
        navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        dots:true,
        margin:25
    });


      });

}(jQuery));
