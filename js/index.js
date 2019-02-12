var swiper = new Swiper('.s1', {
    speed: 500,
    autoplay: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.s2', {
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 4,
    speed: 1000,
    navigation: {
        nextEl: '.services-slider .swiper-button-next',
        prevEl: '.services-slider .swiper-button-prev',
    },
    breakpoints: {
        991: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        767: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        480: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    }
});

$(document).ready(function() {
    $('.services-slider .swiper-slide').hover(
        function () {
            $(this).stop().find('.image').hide(300);
        },
        function () {
            $(this).stop().find('.image').show(300);
        }
    );
});
