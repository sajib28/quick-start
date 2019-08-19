 (function($) {
  "use strict"; // Start of use strict for strict mode
/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
var nav = $('nav');
var navHeight = nav.outerHeight();
  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  //Variables on page load
  var $myCarousel = $("#carouselExampleIndicators"),
    $firstAnimatingElems = $myCarousel
      .find(".carousel-item:first")
      .find("[data-animation ^= 'animated']");

  //Initialize carousel
  $myCarousel.carousel();

  //Animate captions in first slide on page load
  doAnimations($firstAnimatingElems);

  //Other slides to be animated on carousel slide event
  $myCarousel.on("slide.bs.carousel", function(e) {
    var $animatingElems = $(e.relatedTarget).find(
      "[data-animation ^= 'animated']"
    );
    doAnimations($animatingElems);
  });

// FancyBox
$('.fancybox').fancybox();

 // active mixitup
    var containerEl = document.querySelector('#project');
    var mixer = mixitup(containerEl);
 // End mixitup 
$(document).ready(function(){
  $('.team-slider').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    items:4
   
});
});

// Testimonial Slider
$(document).ready(function(){
  $('.testimonial').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    items:1,
    animateOut: 'fadeIn',
    animateIn: 'fadeOut'
   
});
});
// Testimonial Slider
$(document).ready(function(){
  $('.client-slider').owlCarousel({
    loop:true,
    margin:30,
    dots:true,
    items:5,
    animateOut: 'fadeIn',
    animateIn: 'fadeOut'
   
});
});
// Preloader
$(window).on('load', function () {
  if($(window).scrollTop()>40){
    $('#mainNav').addClass('navbar-reduce');
  }


   if ($('#preloader').length) {
     $('#preloader').delay(100).fadeOut('slow', function () {
       $(this).remove();
     });
   }
 });
 // Back to top button
 $(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});
$('.back-to-top').click(function(){
  $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
  return false;
});
/*--/ Star ScrollTop /--*/
$('.scrolltop-mf').on("click", function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
});

/*--/ Star Scrolling nav /--*/
$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: (target.offset().top - navHeight + 20)
      }, 1000, "easeInOutExpo");
      return false;
    }
  }
});

  // Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll').on("click", function () {
  $('.navbar-collapse').collapse('hide');
});

// Activate scrollspy to add active class to navbar items on scroll
$('body').scrollspy({
  target: '#mainNav',
  offset: navHeight
});
/*--/ End Scrolling nav /--*/

/*--/ Navbar Menu Reduce /--*/
$(window).trigger('scroll');
$(window).on('scroll', function () {
  var pixels = 80; 
  var top = 1200;
  if ($(window).scrollTop() > pixels) {
    $('.navbar-expand-md').addClass('navbar-reduce');
    $('.navbar-expand-md').removeClass('navbar-trans');
  } else {
    $('.navbar-expand-md').addClass('navbar-trans');
    $('.navbar-expand-md').removeClass('navbar-reduce');
  }
  if ($(window).scrollTop() > top) {
    
    $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
  } 
  else {
    $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
  }
});
})(jQuery); // End of use strict

