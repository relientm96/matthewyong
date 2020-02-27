/*To Load Materialize/Website Components*/

$(document).ready(function() {
    InitWaypointAnimations();

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

    /*
    //Slider Initialization and Configurations
    $(".slider").slider({
        full_width: true,
        height: 475,
        interval: 6000,
        duration: 750,
        indicators: true
    });

    $(window).on("hashchange", function() {
        if (window.location.href.includes("projectSection")) {
            $(".slider").slider("start");
        }
    });

    $(".slider").ready(function() {
        $(".slider").slider("pause");
    });

    $("#projectSection").waypoint(function() {
        $(".slider").slider("start");
    });

    $('.carousel').carousel({
        noWrap: true,
        fullWidth: true,
        indicators: false
    });

    // move next carousel
    $('.moveNextCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('next');
    });

    // move prev carousel
    $('.movePrevCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.carousel').carousel('prev');
    });
    */
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