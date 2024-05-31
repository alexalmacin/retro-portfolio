const video = document.querySelector('.video');

video.addEventListener('mouseenter', function() {
    this.play();
});

video.addEventListener('mouseleave', function() {
    this.pause();
    this.currentTime = 0;
});
