!function(e){e(".has-dropdown").mouseenter(function(){var a=e(this).attr("data-title");gsap.to(e('[data-menu="'+a+'"]'),{display:"flex",opacity:1,duration:.3})}),e(".nav-link").mouseleave(function(e){gsap.to(".submenu",{display:"none",duration:.3})}),e(".menu-button").on("click",function(){e(this).hasClass("opened")?gsap.to(".navbar-mobile--overlay",{display:"none",ease:"easeOutExpo"}):gsap.to(".navbar-mobile--overlay",{display:"block",ease:"easeOutExpo"})}),e(".close-overlay").on("click",function(){gsap.to(".navbar-mobile--overlay",{display:"none",ease:"easeOutExpo"})}),e(".has-mobile-dropdown").click(function(a){e(this).attr("data-title");if(e(this).hasClass("opened-sub")){var o=e(this).find(".mobile-submenu");e(this).find(".more").text("+"),e(this).removeClass("opened-sub"),gsap.to(e(o),{height:"0px",duration:.6,margin:"0 0 0 0",ease:"easeOutExpo"})}else{o=e(this).find(".mobile-submenu");e(this).find(".more").text("-"),e(this).addClass("opened-sub"),gsap.to(e(o),{height:"100%",duration:.6,margin:"20px 0 10px 0",ease:"easeOutExpo"})}}),e(".cart-nav-opener").on("click",function(){e("body").addClass("js-my-cart-open")}),e(".cart-drawer--close").on("mousedown",function(){e("body").removeClass("js-my-cart-open")}),e(".theme-mode").on("click",function(){"dark"==localStorage.getItem("theme")?(localStorage.setItem("theme","lite"),e("body").attr("data-theme",localStorage.getItem("theme"))):(localStorage.setItem("theme","dark"),e("body").attr("data-theme",localStorage.getItem("theme")))}),e(".filter-trigger").on("click",function(){e(".sorting-wrapper").hasClass("opened")?(gsap.to(".sorting-wrapper",{height:"0px"}),e(".filter-icon").show(),e(".close-filters").hide(),e(".sorting-wrapper").removeClass("opened")):(e(".sorting-wrapper").addClass("opened"),gsap.to(".sorting-wrapper",{height:"auto"}),e(".filter-icon").hide(),e(".close-filters").show())}),e(".search-trigger").on("click",function(){e(".search-wrapper").hasClass("opened")?(e(".search-wrapper").removeClass("opened"),gsap.to(".search-wrapper",{height:"0px"}),e(".close-search").hide(),e(".search-icon").show()):(e(".search-wrapper").addClass("opened"),gsap.to(".search-wrapper",{height:"auto"}),gsap.to(".search-title > svg",{rotateY:"180deg",duration:.3,onComplete:function(){e(".close-search").show(),e(".search-icon").hide()}}))})}(jQuery);