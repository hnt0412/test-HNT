// slipster 3D transform of image content
$(document).ready(function(){
    var carousel = $('#flipster').flipster({
        itemContainer: '.content-main',
        itemSelector: '.content-item',
        start: 3,
        style: 'carousel',
        spacing: -0.3,
        click: true,
        buttons: 'custom',
        buttonPrev: '<img src="./images/prev-btn.png" alt="">',
        buttonNext: '<img src="./images/next-btn.png" alt="">',
        loop: true,
    })
    $('.content-img').click(function() {
            var idx = jQuery(this).attr('idx');
            $('.content-img').removeClass("active");
            $('.img-'+ idx).addClass("active");
            carousel.flipster('jump', parseInt(idx));
        })
})

    // update bottom content when change timeline
    let observer = new MutationObserver(function(mutations) {
        if(mutations) {
            const listItems = document.querySelectorAll('.content-img')
            for(let i = 0; i < listItems.length; i++) {
                listItems[i].classList.remove('active')
            }
            const contentItem = document.querySelector('.content-item')
            const img_0 = document.querySelector('.img-0') 
            const img_1 = document.querySelector('.img-1')
            const img_2 = document.querySelector('.img-2')
            const img_3 = document.querySelector('.img-3')
            const img_4 = document.querySelector('.img-4')
            const img_5 = document.querySelector('.img-5')
            const img_6 = document.querySelector('.img-6')

            if(contentItem.classList.contains('flipster__item--past-3')) {
                img_3.classList.add('active')
            }
            if(contentItem.classList.contains('flipster__item--past-4')) {
                img_4.classList.add('active')
            }
            if(contentItem.classList.contains('flipster__item--past-5')) {
                img_5.classList.add('active')
            }
            if(contentItem.classList.contains('flipster__item--past-6')) {
                img_6.classList.add('active')
            }
            if(contentItem.classList.contains('flipster__item--current')) {
                img_0.classList.add('active')
            }
            if(contentItem.classList.contains('flipster__item--past-1')) {
                img_1.classList.add('active')
            }
            if(contentItem.classList.contains('flipster__item--past-2')) {
                img_2.classList.add('active')
            }
        }
});

const target = document.querySelector('.content-main');
observer.observe(target, { attributes : true, attributeFilter : ['style'] });
