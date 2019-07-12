/*To Load Materialize/Website Components*/

$(document).ready(function(){
  //Parallax Initialization
  $('.parallax').parallax();
  //Floating Button Initialization
  $('.fixed-action-btn').floatingActionButton({
    direction: 'top',
    hoverEnabled: false,
  });
  //Slider Initialization and Configurations
  $('.slider').slider({
		full_width: true, 
    height: 475,
    interval: 8500,
    duration: 750,
  });
  //Modal Initialization and Configurations  
  $('.modal').modal({
    opacity: 0.3,
    inDuration: 400,
    outDuration: 570,
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

/*
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
*/
