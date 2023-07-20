
$(document).ready(function () {
    var btn = $('#top_button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    var multipleCardCarousel = document.querySelector("#carouselExampleControls");

    if (window.matchMedia("(min-width: 576px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            interval: false
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#carouselExampleControls .carousel-control-next").on("click", function () {
            if (scrollPosition < carouselWidth - cardWidth * 2.5) {
                scrollPosition += cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
        $("#carouselExampleControls .carousel-control-prev").on("click", function () {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                $("#carouselExampleControls .carousel-inner").animate(
                    { scrollLeft: scrollPosition },
                    600
                );
            }
        });
    } else {
        $(multipleCardCarousel).addClass("slide");
    }

});

