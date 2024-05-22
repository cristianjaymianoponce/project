$(document).ready(function() {
    // Filter functionality
    $('.buttons').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        var filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.photo .box').show(400);
        } else {
            $('.photo .box')
                .hide(200)
                .filter('.' + filter)
                .show(400);
        }
    });
})


$(document).ready(function() {
    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle video autoplay
    function handleVideoAutoplay() {
        var video = document.getElementById('about-video');
        if (isElementInViewport(video)) {
            video.play();
        } else {
            video.pause();
        }
    }

    // Trigger handleVideoAutoplay function on scroll
    $(window).on('scroll', function() {
        handleVideoAutoplay();
    });

    // Trigger handleVideoAutoplay function on page load
    handleVideoAutoplay();
});