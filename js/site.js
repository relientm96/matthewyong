//For Slider Initialization
$(document).ready(function(){
$('.slider').slider();
});

//For Parallax Effect
$(document).ready(function(){
    $('.parallax').parallax();
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

