$(document).ready(function(){
    
    //Toggle Nav for mobile  menu
    $('.menu-show').click(function(){
        $('.menu-items').addClass('menu-active');
        $('.menu-hide').addClass('menu-hide-active');
    });

    $('.menu-hide').click(function(){
        $('.menu-items').toggleClass('menu-active');
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky-nav');
        } else {
            sticky.addClass('sticky-nav');
        }
    });

    //Counter Up Jquery
       $('.counter').counterUp({
             time: 1500
       });
       
    // Progress Bar
     if($('.progress-line').length) {
        $('.progress-line').appear(function(){
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent+'%');
        }, {accY: 0});
    };

    //Accordion
        $(function() {
            $( "#faq-accordion" ).accordion({
              collapsible: true
            });
        });

        
    // Hero Slider Carousel Active
    $('.about-carousel').owlCarousel({
         loop: true,
         autoplay: true,
         autoplayTimeout: 10000,
         dots: true,
         dotsEach: false,
         lazyLoad:true,
         smartSpeed: 1000,
         nav:false,
         navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
         responsive: {
             0: {
                 items: 1
             },
             768: {
                 items: 1
             },
             992: {
                 items: 1
             },
             1000: {
                 items: 1
             },
             1199: {
                 items: 1
             },
             1920: {
                 items: 1
            }
        }
    });


    // to top Jquery
        $(window).scroll(function(){
            if($(this).scrollTop() > 40){
                $('#to-top').fadeIn();
            } else{
                $('#to-top').fadeOut();
            }
        })

        $("#to-top").click(function(){
            $('html , body').animate({scrollTop :0},800)
        });
       
    //wow Jquery
        new WOW().init();

    //Tabs
        $(function(){
            $("#tabs").tabs();
        });
        
    //MIXITUP   
        var mixer = mixitup('.grid-portfolio-container',{
            animation: {
                    duration: 1000
                }
        });

    
});


$(document).ready(function(){

    var mySwiper = new Swiper('.swiper-container', {
        effect: 'cube',
        grabCursor: true,
        cubeEffect: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed:1000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })

});
