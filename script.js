console.log("hello");

$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 680);
});