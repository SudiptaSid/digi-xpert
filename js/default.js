// Fixed Menu
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $("#cs_menu").addClass("fixed_menu");
    } else {
        $("#cs_menu").removeClass("fixed_menu");
    }
});

// Banner Slider
$('#hero-slider').owlCarousel({
    margin: 0,
    items: 1,
    dots: true,
    nav: true,
    navText: ["<span class='fa fa-long-arrow-left'></span>", "<span class='fa fa-long-arrow-right'></span>"],
    loop: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    smartSpeed: 2000,
    autoplayTimeout: 4000,
    autoplay: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        300: {
            nav: false,
        },
        700: {
            nav: true,
        }
    }
});

// Testimonial Slider
$('#testi_slider').owlCarousel({
    dots: false,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    margin: 0,
    items: 1,
    smartSpeed: 1000,
    autoplay: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    responsiveClass: false,
});


// Stat Counter
$('.counter').each(function () {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({
        countNum: $this.text()
    }).animate({
        countNum: countTo
    }, {
        duration: 5000,
        easing: 'linear',
        step: function () {
            $this.text(Math.floor(this.countNum));
        },
        complete: function () {
            $this.text(this.countNum);
            //alert('finished');
        }
    });
});