/*To Load Materialize/Website Components*/

$(document).ready(function() {
    InitWaypointAnimations();

    // Tap target addition
    $('.tap-target').tapTarget();

    var abouMeWaypoint = new Waypoint({
        element: document.getElementById("aboutMeSection"),
        handler: function(direction) {
            if (direction == "down") {
                $('.tap-target').tapTarget().tapTarget("open");
            }
        }
    })

    //Floating Button Initialization
    $(".fixed-action-btn").floatingActionButton({
        direction: "top",
        hoverEnabled: false
    });

    //Tooltips addition
    $(".tooltipped").tooltip();

    //Modal Initialization and Configurations
    $(".modal").modal({
        inDuration: 400,
        outDuration: 400,
    });

    $('.collapsible').collapsible();

});

//For Smooth Scrolling to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Activate Card Reveal on Mouse Hover
$(function() {
    $('.card').hover(
        function() {
            $(this).find('> .card-image > img.activator').click();
        },
        function() {
            $(this).find('> .card-reveal > .card-title').click();
        }
    );
});