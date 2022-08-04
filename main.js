$(document).ready(function(){
    var carousel = $('#flipster').flipster({
        itemContainer: '.content-main',
        itemSelector: '.content-item',
        start: 3,
        style: 'carousel',
        spacing: -0.3,
        click: true,
        buttons: 'custom',
        buttonPrev: '<img src="./assets/images/prev-btn.png" alt="">',
        buttonNext: '<img src="./assets/images/next-btn.png" alt="">',
        loop: true,
    })
    $('.content-img').click(function() {
            var idx = jQuery(this).attr('idx');
            $('.content-img').removeClass("active");
            $('.img-'+ idx).addClass("active")
            carousel.flipster('jump', parseInt(idx));
        })
})