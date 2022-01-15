// Back To Top
$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function () {
   $("html, body").animate({scrollTop: 0}, 800);
});
// Header
$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();  
    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

//   Slick sliders
$('.bannerSlider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
});


// story part
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // infinite: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    infinite: true,
    dots: false,
    arrows: false,
  });

//   Veno Box
new VenoBox({
    selector: ".my-link"
});

// Team slick
$('.teamSlick').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive:[
        {
            breakpoint: 576,
            settings:{
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll:1,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings:{
                autoplay: true,
                slidesToShow: 2,
                slidesToScroll:1,
                dots: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ]
});
// Mixit Up
var containerEl = document.querySelector('.mymixit');

var mixer = mixitup(containerEl);

//   testi slick sliders
$('.testi-slick').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    dots: true,
});


// Wow Start
new WOW().init();