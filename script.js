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

$('.carousel').carousel({
    interval: 3000
})

// MODAL CODE
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("firstBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}