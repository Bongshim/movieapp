// Get close and dropdown elements
const close_search = document.querySelector(".ld-close");
const search_dropdown = document.querySelector(".ld-search-dropdown");

// Get search button
const search_btn = document.querySelector(".ld-search-btn");

// close search box
close_search.addEventListener("click", () => {
  search_dropdown.style.top = "-100px";
  search_dropdown.style.transition = "all 0.5s ease-in-out";
});

// open search box
search_btn.addEventListener("click", () => {
  search_dropdown.style.top = "0";
  search_dropdown.style.transition = "all 0.5s ease-in-out";
});

// Get menu check
const menu_check = document.querySelector(".ld-checkbox");

//get slide out menu
const slide_out_menu = document.querySelector(".ld-slide-out-menu");

menu_check.addEventListener("click", () => {
  if (menu_check.checked == true) {
    // console.log("true");
    // slide_out_menu.style.transform = "transform: none;";
    // translate3d(0, 0, 0)
    slide_out_menu.style.top = "64px";
    slide_out_menu.style.transition = "transition: all 0.4s ease-in-out";
  } else {
    // console.log("false");
    slide_out_menu.style.top = "-100vh";
    slide_out_menu.style.transition = "transition: all 0.4s ease-in-out";
    // translate3d(120%, 0, 0)
  }
});


$(document).ready(function () {
  //your code here


  $(".owl-carousel").owlCarousel({
    mouseDrag: false,
    touchDrag: true,
    dots: false,
    loop: true,
    autoplay: false,
    smartSpeed: 700,
    margin: 20,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
        
      },
      992: {
        items: 4,
        
      },
      1200: {
        items: 5,
        
        slideBy: 5,
        smartSpeed: 400,
      },
    },
  });

  $(".ld-next").on("click", function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
  $(".ld-prev").on("click", function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });

});