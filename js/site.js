//For Parallax Effect
$(document).ready(function(){
  $('.parallax').parallax();
});

//For Slider Initialization
$(document).ready(function(){
  $('.slider').slider({
		full_width: true, 
		height:475,
		});
});

//For Modal PopUps
$(document).ready(function(){
  $('.modal').modal({
    opacity: 0.3,
    inDuration: 650,
    outDuration: 650,
  });
});

//For Smooth Scrolling to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
      });
  });
});

//Fade in for cards
$( ".card" ).fadeIn(3000);

//Scroll to top button behaviour
jQuery(document).ready(function() {
  
  var btn = $('#BackToTopButton');

  //Display hover button once we enter aboutMe section
  $(window).scroll(function() {
    if ($(window).scrollTop() > 350) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  //Animate scroll to top effect when clicked
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:250}, '200');
  });
    
});

