$(document).ready(function () {
    $(".header ul li a").click(function (event) {
        if ((element.hash !== "") && (element.dataset.letmego != "true") && ($this.attr('class') !== 'menu-with-no-link')) {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
        $(".header, .header ul li.menu-item-has-children.opened").removeClass('opened');
        $("body").removeClass("menuopened");
    });
    $(".header ul lili.menu-item-has-children a").on('click', function (event) {
        event.preventDefault();
    });

    $(".hamburger").on('click', function () {
        setTimeout(function () {
            //$('.menulist').slideToggle(300);
            $('.header').toggleClass('opened');
            $('body').toggleClass('menuopened');
            $(".header ul li.menu-item-has-children.opened").removeClass('opened');
        }, 0);
    });
    $(".backdrop").on('click', function () {
        $('.header').toggleClass('opened');
        $('body').toggleClass('menuopened');
        $(".header ul li.menu-item-has-children.opened").removeClass('opened');
    });
    $(".header ul li.menu-item-has-children").on('click', function () {
        if ($(window).width() < 992) {
            $(this).toggleClass('opened');
        }
    });
    $('.header li.menu-item-has-children').hover(function () {
        if ($(window).width() > 991) {
            $(this).find('ul.sub-menu:first').show().css("opacity","1");
        }
    }, function () {
        if ($(window).width() > 991) {
            $(this).find('ul.sub-menu:first').hide().css("opacity","0");
        }
    });

    /* Video*/
    $(".videxp a, .videxp .playbut").on('click', function (ev) {
        var vidlink = $(".videxp").attr("vidlink");

        var vid1 = "<iframe id='banner-video' style='width: 100%; margin-bottom:-5px; height:" + $(".videxp").height() + "px;' src='" + vidlink;
        
        if(vidlink.includes('youtube')) {
            vid1 += "?enablejsapi=1&autoplay=1&rel=0";
        }
        
        vid1 += "' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";

        $(".videxp").css('opacity', '0');
        $(".videxp").css('background', 'none');
        $(".videxp").html(vid1);
        $(".videxp").css('opacity', '1');
        $(".videxp").css('cursor', 'auto');
        $(".videxp iframe").css('height', $(".videxp").outerHeight());
    });

    /*Banner Video - Landing Page*/
    $(".landing .topbanner a, .landing .topbanner .playbut").on('click', function (ev) {
        var vidlink = $(".landing .topbanner").attr("vidlink");

        var vidtop = "<iframe id='banner-video' style='width: 100%; margin-bottom:-5px; height:" + $(".landing .topbanner").outerHeight() + "px;' src='" + vidlink + "?enablejsapi=1&autoplay=1&rel=0' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>";

        $(".landing .topbanner").css('opacity', '0');
        $(".landing .topbanner").css('background', 'none');
        $(".landing .topbanner").html(vidtop);
        $(".landing .topbanner").addClass('videoon');
        $(".landing .topbanner").css('opacity', '1');
        $(".landing .topbanner").css('cursor', 'auto');
        $(".landing .topbanner iframe").css('height', $(".landing .topbanner").outerHeight());
    });

    /*Impact Slider*/
    if($('#impact .swiper-container').length){
        var swiperimpact = new Swiper('#impact .swiper-container', {
            pagination: '#impact .swiper-pagination',
            paginationClickable: true,
            spaceBetween: 0,
            loop: true,
            speed: 800,
            slidesPerView: 1
        });
    }

    /*Testimonial Slider*/
    if ($('#testimonial .swiper-container').length) {
        var swipertestimonial = new Swiper('#testimonial .swiper-container', {
            pagination: '#testimonial .swiper-pagination',
            paginationClickable: true,
            spaceBetween: 0,
            loop: true,
            speed: 800,
            slidesPerView: 1
        });
    }

    /*Programs Slider*/
    if ($('#csfe .swiper-container').length) {
        var swipertestimonial = new Swiper('#csfe .swiper-container', {
            pagination: '#csfe .swiper-pagination',
            paginationClickable: true,
            spaceBetween: 20,
            speed: 800,
            slidesPerView: 1.2
        });
    }
    if ($('#wsc .swiper-container').length) {
        var swipertestimonial = new Swiper('#wsc .swiper-container', {
            pagination: '#wsc .swiper-pagination',
            paginationClickable: true,
            spaceBetween: 20,
            speed: 800,
            slidesPerView: 1.2
        });
    }
    if ($('#ddp .swiper-container').length) {
        var swipertestimonial = new Swiper('#ddp .swiper-container', {
            pagination: '#ddp .swiper-pagination',
            paginationClickable: true,
            spaceBetween: 20,
            speed: 800,
            slidesPerView: 1.2
        });
    }
    if ($('#contcomm .swiper-container').length) {
        var swipertestimonial = new Swiper('#contcomm .swiper-container', {
            pagination: '#contcomm .swiper-pagination',
            paginationClickable: true,
            spaceBetween: 20,
            speed: 800,
            slidesPerView: 1.2
        });
    }
});