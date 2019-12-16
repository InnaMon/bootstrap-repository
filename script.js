// Get nav-bar to change from transparent backgrounds upon scrolling past hero image, done with jQuery 

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

//ACTIVATE CURRENT/SELECTED NAV ITEM IN NAV BAR
const ul = document.getElementById("navbarSupportedContent");

const navItem = ul.getElementsByClassName("nav-item");

for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//COLLAPSE HAMBURGER NAVBAR IN MOBILE/TABLET MODE WHEN SELECT NAV-ITEM

$(document).ready(function () {
    $(".navbar-nav a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });
  });

//CAROUSEL FADE IN INTERVAL

$('.carousel').carousel({
    interval: 3000
})

// FIRST MODAL CODE
var firstModal = document.getElementById("firstModal");

var firstBtn = document.getElementById("firstBtn");

var spanOne = document.getElementsByClassName("closeOne")[0];

firstBtn.onclick = function(e) {
    firstModal.style.display = "block";
  e.preventDefault();
}

spanOne.onclick = function() {
    firstModal.style.display = "none";
}

// SECOND MODAL CODE
var secondModal = document.getElementById("secondModal");

var secondBtn = document.getElementById("secondBtn");

var spanTwo = document.getElementsByClassName("closeTwo")[0];

secondBtn.onclick = function(e) {
    secondModal.style.display = "block";
  e.preventDefault();
}

spanTwo.onclick = function() {
    secondModal.style.display = "none";
}

// THIRD MODAL CODE
var thirdModal = document.getElementById("thirdModal");

var thirdBtn = document.getElementById("thirdBtn");

var spanThree = document.getElementsByClassName("closeThree")[0];

thirdBtn.onclick = function(e) {
    thirdModal.style.display = "block";
  e.preventDefault();
}

spanThree.onclick = function() {
    thirdModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == firstModal) {
      firstModal.style.display = "none";
    } else if (event.target == secondModal) {
      secondModal.style.display = "none";
    } else if (event.target == thirdModal) {
      thirdModal.style.display = "none";
    }
}