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

// FIRST MODAL CODE
// Get the modal

var firstModal = document.getElementById("firstModal");

// Get the button that opens the modal
var firstBtn = document.getElementById("firstBtn");

// Get the <span> element that closes the modal
var spanOne = document.getElementsByClassName("closeOne")[0];

// When the user clicks on the button, open the modal 
firstBtn.onclick = function(e) {
    firstModal.style.display = "block";
  e.preventDefault();
}

// When the user clicks on <span> (x), close the modal
spanOne.onclick = function() {
    firstModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == firstModal) {
    firstModal.style.display = "none";
  }
}

// SECOND MODAL CODE
var secondModal = document.getElementById("secondModal");

// Get the button that opens the modal
var secondBtn = document.getElementById("secondBtn");

// Get the <span> element that closes the modal
var spanTwo = document.getElementsByClassName("closeTwo")[0];

// When the user clicks on the button, open the modal 
secondBtn.onclick = function(e) {
    secondModal.style.display = "block";
  e.preventDefault();
}

// When the user clicks on <span> (x), close the modal
spanTwo.onclick = function() {
    secondModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == secondModal) {
    secondModal.style.display = "none";
  }
}

// THIRD MODAL CODE
// SECOND MODAL CODE
var thirdModal = document.getElementById("thirdModal");

// Get the button that opens the modal
var thirdBtn = document.getElementById("thirdBtn");

// Get the <span> element that closes the modal
var closeThree = document.getElementsByClassName("closeThree")[0];

// When the user clicks on the button, open the modal 
thirdBtn.onclick = function(e) {
    thirdModal.style.display = "block";
  e.preventDefault();
}

// When the user clicks on <span> (x), close the modal
closeThree.onclick = function() {
    thirdModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == thirdModal) {
    thirdModal.style.display = "none";
  }
}