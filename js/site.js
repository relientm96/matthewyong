/*To Load Materialize/Website Components*/

$(document).ready(function(){

  InitWaypointAnimations();

  //Floating Button Initialization
  $('.fixed-action-btn').floatingActionButton({
    direction: 'top',
    hoverEnabled: false,
  });
  
  //Slider Initialization and Configurations
  $('.slider').slider({
		full_width: true, 
    height: 475,
    interval: 6000, 
    duration: 750,
    indicators: true,
  });

  //Tooltips addition
  $('.tooltipped').tooltip();  

  $(window).on('hashchange',function(){ 
    if(window.location.href.includes("projectSection")) {
      $('.slider').slider('start');
    }
  });
  
  $('.slider').ready(function(){
    $('.slider').slider('pause');
  });

  $('#projectSection').waypoint(function() {
    $('.slider').slider('start');
  });

  //Modal Initialization and Configurations  
  $('.modal').modal({
    inDuration: 400,
    outDuration: 400,
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

