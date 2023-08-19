(function($) {

    // //////////////////////////////
    // NAVBAR - MOUSE IN           //
    // //////////////////////////////
    $('.has-dropdown').mouseenter(function() {
        
        var title = $(this).attr('data-title');

        gsap.to( $('[data-menu="'+ title +'"]'), {
            display: 'flex',
            opacity: 1,
            duration: 0.3

        });

    });

    // //////////////////////////////
    // NAVBAR - MOUSE OUT          //
    // //////////////////////////////    
    $('.nav-link').mouseleave(function($) {
        gsap.to( '.submenu', {
            display: 'none',
            duration: 0.3
        });
    });


    // //////////////////////////////
    // MOBILE NAV                  //
    // ////////////////////////////// 
    $('.menu-button').on('click', function() {

        if ( $(this).hasClass('opened') ) {

            gsap.to( '.navbar-mobile--dropdown', {
                height: '0px',
                duration: 0.6,
                ease: 'easeOutExpo',
            });
    
            
            $(this).text('Menu').removeClass('opened');

        } else {

            gsap.to( '.navbar-mobile--dropdown', {
                height: '100%',
                duration: 0.6,
                ease: 'easeOutExpo',
            });

           
            $(this).text('Close').addClass('opened');

        }

    });

    // //////////////////////////////
    // MOBILE NAV - SUBMENU        //
    // //////////////////////////////
    $('.has-mobile-dropdown').click(function(e) {
        // e.preventDefault();
        var title = $(this).attr('data-title');

        if ( $(this).hasClass('opened-sub') ) {

            var nearest = $(this).find('.mobile-submenu');
    
            $(this).find('.more').text('+');
            $(this).removeClass('opened-sub');

            gsap.to( $(nearest), {
                height: '0px',
                duration: 0.6,
                margin: '0 0 0 0',
                ease: 'easeOutExpo',
            });

        } else {

            var nearest = $(this).find('.mobile-submenu');
            $(this).find('.more').text('-');
            $(this).addClass('opened-sub');

            gsap.to( $(nearest), {
                height: '100%',
                duration: 0.6,
                margin: '20px 0 10px 0',
                ease: 'easeOutExpo',
            });

        }

    });

    // cart
    $('.cart-nav-opener').on('click', function() {
        $('body').addClass('js-my-cart-open');
    });
    $('.cart-drawer--close').on('click', function() {
        $('body').removeClass('js-my-cart-open');
    });

    // Product Page Pinning
    // ScrollTrigger.create({
    //     trigger: ".single-artist--wrapper",
    //     pin: true,
    //     start: "top center",
    //     end: '100vh'
    // });


})(jQuery);