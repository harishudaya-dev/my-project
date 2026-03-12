
$(function(){
    let url = window.location.href;
    let hash = url.split('#')[1]
    if(hash && hash.length){
        let target = `a[data-bs-target="#${hash}"]`;
        let tablist = $(target).closest('.nav-tabs');
        if(!($(target).hasClass('active'))){
            let activeContent = tablist.find('a.active').data('bsTarget');
            $(activeContent).removeClass('show active')
            tablist.find('a.active').removeClass('active');
            $(target).addClass('active');
            let contentToShow = `#${hash}`;
            $(contentToShow).addClass('show active');
        }
    }
})
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $('header').addClass("sticky");
        // $('.left_menu').addClass("sticky");
        $('.inner_common_menu').addClass("sticky");
    } else {
        $('header').removeClass("sticky");
        // $('.left_menu').removeClass("sticky");
        $('.inner_common_menu').removeClass("sticky");
    }

    if ($(this).scrollTop() > 550) {
        $('.course-listing-search-area').addClass("sticky");
    } else {
        $('.course-listing-search-area').removeClass("sticky");

    }


});

/* start popup */
$(document).ready(function() {
    var id = '#dialog';
    var maskHeight = $(document).height();
    var maskWidth = $(window).width();
    $('#mask').css({ 'width': maskWidth, 'height': maskHeight });
    $('#mask').fadeIn(500);
    $('#mask').fadeTo("slow", 0.9);
    var winH = $(window).height();
    var winW = $(window).width();
    $(id).css('top', winH / 2 - $(id).height() / 2);
    $(id).css('left', winW / 2 - $(id).width() / 2);
    $(id).fadeIn(2000);
    $('.window .close').click(function(e) {
        e.preventDefault();
        $('#mask').hide();
        $('.window').hide();
    });
    $('#mask').click(function() {
        $(this).hide();
        $('.window').hide();
    });

});


//search
$(document).ready(function() {
    $(".slide-toggle").click(function() {
        $(".side-menu").addClass("open-slide");
        $(".close-icon").addClass("open-slide");
        $("body").addClass("scroll");
    });
    $(".close-icon").click(function() {
        $(".side-menu").removeClass("open-slide");
        $("body").removeClass("scroll");
    });
    $(".opacity-bg").click(function() {
        $(".side-menu").removeClass("open-slide");
        $("body").removeClass("scroll");
    });

    $(".notif-open").click(function() {
        $(".notif-popup").addClass("open-slide");
        $(".notification").addClass("open-slide");
    });
    $(".notif-close").click(function() {
        $(".notif-popup").removeClass("open-slide");
        $(".notification").removeClass("open-slide");
    });
    $(".other-links-f h6").click(function() {
        $(".other-links-f ul, .other-links-f h6").toggleClass("open-ul");
    });
    // $('.has-megamenu').hover(
    //     function() {
    //         console.log('mouse in');
    //         $('header').addClass('megamenu-open')
    //     },
    //     function() {
    //         console.log('mouse out');
    //         $('header').removeClass('megamenu-open')
    //     }
    // );
});

// Mobile Bottom Sticky
$(function() {
    $('section.mobile-bottom-menu li a').click(function() {
        $(this).parent().siblings().children().removeClass('active');
        $(this).addClass('active');
    });
});
//   $(document).ready(function(){
//     $(".notificat").on("click", function(){
//     $(".call-mobile").toggleClass("show");
//     $(".enquiry-mobile").removeClass("show1");
//     $(".insurance-mobile").removeClass("show2");
//     });
//   });
//   $(document).ready(function(){
//     $(".m-enquiry").on("click", function(){
//     $(".enquiry-mobile").toggleClass("show1");
//     $(".call-mobile").removeClass("show");
//     $(".insurance-mobile").removeClass("show2");
//     });
//   });
//   $(document).ready(function(){
//     $(".m-insurance").on("click", function(){
//     $(".insurance-mobile").toggleClass("show2");
//     $(".call-mobile").removeClass("show");
//     $(".enquiry-mobile").removeClass("show1");
//     });
//   });
$(document).ready(function() {
    $(".notificat").on("click", function() {
        $(".call-mobile").toggleClass("show");
        $(".enquiry-mobile").removeClass("show1");
        $(".insurance-mobile").removeClass("show2");
        $(".department-mobile").removeClass("show2");
    });
});
$(document).ready(function() {
    $(".m-enquiry").on("click", function() {
        $(".enquiry-mobile").toggleClass("show1");
        $(".call-mobile").removeClass("show");
        $(".insurance-mobile").removeClass("show2");
        $(".department-mobile").removeClass("show2");
    });
});
$(document).ready(function() {
    $(".m-insurance").on("click", function() {
        $(".insurance-mobile").toggleClass("show2");
        $(".call-mobile").removeClass("show");
        $(".enquiry-mobile").removeClass("show1");
        $(".department-mobile").removeClass("show2");
    });
});
$(document).ready(function() {
    $(".m-department").on("click", function() {

        $(".department-mobile").toggleClass("show2");
        $(".insurance-mobile").removeClass("show2");
        $(".call-mobile").removeClass("show");
        $(".enquiry-mobile").removeClass("show1");
    });
});
$(document).ready(function() {
    // Carousel
    jQuery(".carousel").carousel({
        interval: 3000,
        pause: true
    });

    // swipe start
    jQuery(".carousel").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll: "vertical"
    });
    // swipe end 
});

WOW.prototype.addBox = function(element) {
    this.boxes.push(element);
};
var wow = new WOW({ mobile: false });
wow.init();

// if ($(window).width() <= 991){ 
// $(".wow").removeClass("wow");
// }

var owl = $('.campuses-slide');
owl.owlCarousel({
    items: 1.5,
    loop: true,
    margin: 40,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        600: {
            items: 1,
            margin: 0
        },
        1000: {
            items: 1.5
        }
    }
});

var owl = $('.testimo-slide');
owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 40,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2,
            margin: 20
        },
        1000: {
            items: 3
        }
    }
});
var owl = $('.campus_slide');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 40,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        600: {
            items: 1,
            margin: 0
        },
        1000: {
            items: 1
        }
    }
});

var owl = $('.early-step-slide');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        600: {
            items: 1,
            margin: 0
        },
        1000: {
            items: 1
        }
    }
});
var owl = $('.std-achievements-slider');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 18,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        600: {
            items: 2,
            margin: 0
        },
        1000: {
            items: 3
        }
    }
});
var owl = $('.std-achievements-slider-1');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 18,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        600: {
            items: 2,
            margin: 0
        },
        1000: {
            items: 3
        }
    }
});

var owl = $('.nirbhay-kanya-slide');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 40,
    dots: false,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            margin: 0
        },
        600: {
            items: 1,
            margin: 0
        },
        1000: {
            items: 1
        }
    }
});


var owl = $('.comm-car');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

var owl = $('.text-slide');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});


var owl = $('.faculties-ceo-slider');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 40,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 3000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3,
            margin: 20
        },
        1000: {
            items: 3
        }
    }
});

var owl = $('.count-slide');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
var owl = $('.gallery-event-slider');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

var owl = $('.sport-ceo-slider');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 5000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


var owl = $('.research-home-slider');
owl.owlCarousel({
    items: 1,
    loop: false,
    margin: 40,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 3000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
var owl = $('.home_rearchslider');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 5000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});



var owl = $('.faculties-ceo-slider1');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 5000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

$(document).on('click','.megamenu-open', function(e){
    if(!(e.target.closest('.mega-menu'))){
       e.preventDefault();
       $('body').removeClass('megamenu-open');
       $('.has-megamenu.active').removeClass('active');
       $('.mega-menu').fadeOut(300);
       return false
    }
})

$(".menu-link").click(function(e){
    let hasSubmenu = $(this).closest('.has-megamenu');
    if(hasSubmenu.length){
        e.preventDefault();
        if(hasSubmenu.hasClass('active')){
            hasSubmenu.find('.mega-menu').fadeOut(300);
            hasSubmenu.removeClass('active');
            $('body').removeClass('megamenu-open');
        }else{
            $('body').removeClass('megamenu-open');
            $(".has-megamenu").removeClass('active')
            $('.mega-menu').fadeOut(100);
            hasSubmenu.addClass('active');
            hasSubmenu.find('.mega-menu').fadeIn(300);
            setTimeout(()=>{
                $('body').addClass('megamenu-open');
            }, 300)
        }
    }
 });
var owl = $('.faculties-ceo-slider-va');
owl.owlCarousel({
    items:3,
    loop:false,
    margin:10,
    dots:false,
    nav:true,
    autoplay:true,
    smartSpeed: 5000,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  });
var owl = $('.infr-facil-slide, .c-office-slide, .multi-slide, .lab-slide-dept');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

var owl = $('.icmr-car-slider');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1300: {
            items: 4
        },
        1600: {
            items: 5
        }
    }
});



var owl = $('.outreach-slider');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive: {
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
        1600: {
            items: 1
        }
    }
});


/*=============Product Slider One========*/

$('#owl-course-slide').owlCarousel({
    loop: true,
    autoplay: true,
    slideSpeed: 300,
    margin: 30,
    navText: ['<img src="images/laborty-arrow-1.png" width="40" height="38" alt="Arrow">', '<img src="images/laborty-arrow2.png" width="40" height="38" alt="Arrow">'],
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1200: {
            items: 1,
            nav: true,
            margin: 40,
            loop: true
        }
    }
})

var menu01 = new MobileMenu;
menu01.init();

function MobileMenu() {
    var $mobileNav = $('.main-links');
    var $dd = $('.m-drop > a');
    this.init = function() {
        var mobileNavOriginalHeight = $mobileNav.height();
        var mobileNavHeight = $mobileNav.height();
        $('.m-drop > a').addClass('dd-show');
        $('.m-drop > a').each(function() {
            var theHeight = $(this).next().height();
            $(this).next().attr('data-height', theHeight);
        });

        $('.m-drop > a').removeClass('dd-show');

        $dd.click(function() {
            if ($(this).hasClass('dd-show')) {
                mobileNavHeight = $mobileNav.outerHeight();
                $mobileNav.css('height', (mobileNavHeight - $(this).next().data('height')));
                $(this).next().removeAttr('style');
                $(this).removeClass('dd-show');
            } else {
                $dd.next().removeAttr('style');
                $dd.removeClass('dd-show');
                $mobileNav.css('height', (mobileNavOriginalHeight + $(this).next().data('height')));
                $(this).next().css('height', $(this).next().data('height'))
                $(this).addClass('dd-show');
            }
        })
    }
}





$(".drop-menu, .admission-btn").hover(
    function() {
        $(".inner-header").toggleClass("header_hover");
    },
);
// $(".drop-menu").hover(
//     function() {
//         $(".inner-header").toggleClass("header_hover");
//     },
// );
// $(".admission-btn").hover(
//     function() {
//         $(".inner-header").toggleClass("header_hover");
//     },
// );
$(".karya .corse-list-area").slice(5).hide();

var mincount = 2;
var maxcount = 5;


$(window).scroll(function() {
    if ($(window).scrollTop() + $(window).height() >=
        $(document).height() - 500) {
        $(".karya .corse-list-area").slice(mincount, maxcount).slideDown(1000);

        mincount = mincount + 2;
        maxcount = maxcount + 2


    }
});

/*Counter*/
function inVisible(element) {
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
        animate(element);
}

function animate(element) {
    if (!element.hasClass('ms-animated')) {
        var maxval = element.data('max');
        var html = element.html();
        element.addClass("ms-animated");
        $({
            countNum: element.html()
        }).animate({
            countNum: maxval
        }, {
            //duration 5 seconds
            duration: 2000,
            easing: 'swing',
            step: function() {
                element.html(Math.floor(this.countNum) + html);
            },
            complete: function() {
                element.html(this.countNum + html);
            }
        });
    }

}

$(function() {
    $(window).scroll(function() {
        $("[data-max]").each(function() {
            inVisible($(this));
        });
    })
});

/*end Counter*/

$('.stat-number').each(function() {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function(func) {
            $(this).text(parseFloat(func).toFixed(size));
        }
    });
});


//add a class in evs section
// $(window).scroll(function(){
//  if ($(this).scrollTop() > 50) {
//        $('.evs-data').addClass('topevs');
//  } else {
//       $('.evs-data').removeClass('topevs');
//     }
// });


// $(window).scroll(function() {

//  if($(window).scrollTop() + $(window).height() > ($(document).height() - 150) ) {

//         $(".evs-data").removeClass("topevs");
//     }
//  });



$(window).scroll(function () { var sticky = $('.international-data'), scroll = $(window).scrollTop(); if (scroll >= 200) sticky.addClass('sticky'); else sticky.removeClass('sticky'); });

$(document).ready(function () {
    $("#accordian a").click(function () {
        var link = $(this);
        var closest_ul = link.closest("ul");
        var parallel_active_links = closest_ul.find(".active")
        var closest_li = link.closest("li");
        var link_status = closest_li.hasClass("active");
        var count = 0; closest_ul.find("ul").slideUp(function () {
            if (++count == closest_ul.find("ul").length) parallel_active_links.removeClass("active");
        }); if (!link_status) { closest_li.children("ul").slideDown(); closest_li.addClass("active"); }
    })
})

let videomodals = document.querySelectorAll('.video-modal');
videomodals.forEach(function(modal){
    modal.addEventListener('hide.bs.modal', function(){
        let src = $(this).find('iframe').last().attr('src')
        $(this).find('iframe').last().attr('src', src)
    })
})

// $(document)('.video-modal').each(function(){
//     console.log($(this).find('iframe').attr('src'))
//     // $(this).on('hide.bs.modal', function(){

//     //     let src = $(this).find('iframe').attr('src')
//     //     console.log(src, 'ahjhah')
//     // })
// })
