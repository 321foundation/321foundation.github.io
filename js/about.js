$(document).ready(function () {
    var swiper1 = new Swiper('#timeline .swiper-container', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
        nextButton: '.timeline.swiper-button-next',
        prevButton: '.timeline.swiper-button-prev',
        grabCursor: true,
        navigation: {
            nextEl: '.timeline.swiper-button-next',
            prevEl: '.timeline.swiper-button-prev',
        },
        pagination: '.timeline-pagination',
        paginationClickable: true,
        speed: 2000,
        breakpoints: {
            768: {
                spaceBetween: 15,
                slidesPerGroup: 1,
                slidesPerView: 1,
                freeMode: true,
                loop: false,
            }
        },
    });
});