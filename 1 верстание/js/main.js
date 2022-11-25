$(function () {

// ---------------------------------------------------------------------------------------------------
   var mixer = mixitup('.direction__list');

   $('.direction__filter-btn').on('click', function () {
      $('.direction__filter-btn').removeClass('direction__filter-btn--active')
      $(this).addClass('direction__filter-btn--active')
   })
// ---------------------------------------------------------------------------------------------------
   $('.team__slider').slick({
      arrows: false,
      slidesToShow: 4,
      Infinity: true,
      draggable: false,
      waitForAnimate: true,
      
      responsive: [
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 3,
            },
         },

         {
            breakpoint: 800,
            settings: {
               autoplay: true,
               autoplaySpeed: 2000,
            },
         },


         {
            breakpoint: 750,
            settings: {
               slidesToShow: 2,
            },
         },
         
         {
            breakpoint: 500,
            settings: {
               slidesToShow: 1,
            },
         },
      ]
   })

   $('.team__slider-arrow--prev').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickPrev')
   })

   $('.team__slider-arrow--next').on('click', function (e) {
      e.preventDefault()
      $('.team__slider').slick('slickNext')
   })
// ---------------------------------------------------------------------------------------------------
   $('.testi__slider').slick({
      arrows: false,
      Infinity: true,
      draggable: true,
      waitForAnimate: true,
      slidesToShow: 1,
      dots: true,
      appendDots: $('.testi__slider-dots'),
   })

   $('.testi__arrow--prev').on('click', function (e) {
      e.preventDefault()
      $('.testi__slider').slick('slickPrev')
   })

   $('.testi__arrow--next').on('click', function (e) {
      e.preventDefault()
      $('.testi__slider').slick('slickNext')
   })
// ---------------------------------------------------------------------------------------------------
   $('.program__acc-link').on('click', function (e) {
      e.preventDefault()
      // $(this).toggleClass('program__acc-link--active')
      // $(this).children('.program__acc-text').slideToggle()
      if ($(this).hasClass('program__acc-link--active')) {
         $(this).removeClass('program__acc-link--active')
         $(this).children('.program__acc-text').slideUp()
      } else {
         $('.program__acc-link').removeClass('program__acc-link--active')
         $('.program__acc-text').slideUp()
         $(this).addClass('program__acc-link--active')
         $(this).children('.program__acc-text').slideDown()
      }
   })
// ---------------------------------------------------------------------------------------------------
   $('.burger-btn, .overlay').on('click', function (e) {
      e.preventDefault()
      $('.header__burger-inner').toggleClass('header__burger-inner--open')
      $('.overlay').toggleClass('overlay--show')
   })

   $('.header__top-btn').on('click', function () {
      $('.header__burger-inner').removeClass('header__burger-inner--open')
      $('.overlay').removeClass('overlay--show')
   })

   $('.header__nav-link').on('click', function () {
      $('.header__burger-inner').removeClass('header__burger-inner--open')
      $('.overlay').removeClass('overlay--show')
   })

   setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__burger-inner').hasClass('header__burger-inner--open') === false) {
         $('.burger-btn').addClass('burger-btn--follow')
      }
      else {
         $('.burger-btn').removeClass('burger-btn--follow')
      }
   }, 0);
// ---------------------------------------------------------------------------------------------------
})