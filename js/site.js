//For Parallax Effect
$(document).ready(function(){
  $('.parallax').parallax();
});

//For Slider Initialization
$(document).ready(function(){
$('.slider').slider();
});

//For Modal PopUps
$(document).ready(function(){
  $('.modal').modal();
});

//For Smooth Scrolling to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

//Scroll to top button behaviour
jQuery(document).ready(function() {
  
  var btn = $('#BackToTopButton');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 350) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:150}, '200');
  });
    
});

