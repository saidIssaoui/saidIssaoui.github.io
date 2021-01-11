$(".banner_part").mousemove(function(e){
  var moveX=  (e.pageX * -1/10);
  var moveY=   (e.pageY * -1/15);
  
  $(this).css("background-position",moveX+"px "+moveY+"px");
});
console.log($(window).scrollTop());
  if($(window).scrollTop()===0){
    console.log("in");
    $(".nav-link").addClass("text-dark");
    $(".main_menu .social_icon a").css("color","black");
    $('.main_menu').removeClass('bg-danger');
    $(".navbar-toggler span").css("color","black");
  }

$(window).on('scroll',()=>{
  if($(window).scrollTop()){
      $(".nav-link").removeClass("text-dark");
      $(".navbar-toggler span").css("color","white");
      $(".main_menu .social_icon a").css("color","white");
      $('.main_menu').addClass('bg-danger');
  }else{
      $('.main_menu').removeClass('bg-danger');
      $(".main_menu .social_icon a").css("color","black");
      $('.nav-link').addClass("text-dark");   
      $(".main_menu").css("background","none");
      $(".navbar-toggler span").css("color","black");
  }
});

(function($) {
  "use strict";
  // $(window).scroll(function () {
  //   var window_top = $(window).scrollTop() + 1;
  //   if (window_top > 50) {
  //     $('.main_menu').addClass('menu_fixed animated fadeInDown');
  //   } else {
  //     $('.main_menu').removeClass('menu_fixed animated fadeInDown');
  //   }
  // });
  
  $(".popup-youtube, .popup-vimeo").magnificPopup({
    // disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });

  $(document).ready(function() {
    $("select").niceSelect();
  });

  var client_logo = $(".client_logo_slider");
  if (client_logo.length) {
    client_logo.owlCarousel({
      items: 6,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      responsive: {
        0: {
          items: 3,
          margin: 15
        },
        600: {
          items: 3,
          margin: 15
        },
        991: {
          items: 5,
          margin: 15
        },
        1200: {
          items: 6,
          margin: 15
        }
      }
    });
  }

  $(window).on("load", function() {
    if (document.getElementById("portfolio")) {
      var $workGrid = $(".portfolio-grid").isotope({
        itemSelector: ".all"
      });
    }

    $(".portfolio-filter ul li").on("click", function() {
      $(".portfolio-filter ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $workGrid.isotope({
        filter: data
      });
    });

    var review = $(".review_part_text");
    if (review.length) {
      review.owlCarousel({
        items: 2,
        loop: true,
        dots: true,
        autoplay: true,
        margin: 40,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          480: {
            items: 1
          },
          768: {
            items: 2
          }
        }
      });
    }

    $(".popup-youtube, .popup-vimeo").magnificPopup({
      // disableOn: 700,
      type: "iframe",
      mainClass: "mfp-fade",
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  });

})(jQuery);
