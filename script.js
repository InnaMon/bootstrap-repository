// Get nav-bar to change from transparent backgrounds upon scrolling past hero image 

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

$(window).scroll(function() {
    if (viewportWidth < 570) {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 540);
    } else if (viewportWidth < 770) {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 980);
    } else {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 680);
    }
});

// Get the container element
const ul = document.getElementById("navbarSupportedContent");

// Get all nav-items inside the container
const navItem = ul.getElementsByClassName("nav-item");

// Loop through the nav-items and add the active class to the current/clicked item
for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}