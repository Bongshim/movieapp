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
        console.log("true");
        // slide_out_menu.style.transform = "transform: none;";
        // translate3d(0, 0, 0)
        slide_out_menu.style.top = "64px";
    }
        else {
            console.log("false");
            slide_out_menu.style.top = "-100vh";
            // translate3d(120%, 0, 0)

}
});
