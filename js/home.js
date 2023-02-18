$(document).ready(function () {
    var swiper2 = new Swiper('#journey .swiper-container', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 30,
        nextButton: '.journey.swiper-button-next',
        prevButton: '.journey.swiper-button-prev',
        grabCursor: true,
        navigation: {
            nextEl: '.journey.swiper-button-next',
            prevEl: '.journey.swiper-button-prev',
        },
        pagination: '.journey.swiper-pagination',
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