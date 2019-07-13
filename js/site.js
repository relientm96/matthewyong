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
    interval: 8500, //original 8500
    duration: 750,
  });
  
  $('.slider').ready(function(){
    $('.slider').slider('pause');
  })

  $('.slider').waypoint(function() {
    $('.slider').slider('start');
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

