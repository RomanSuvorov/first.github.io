$(function() {

        $('.jcarousel').jcarousel({
        animation: {
            duration: 800,
            easing: 'linear',
            complete: function () {
            }
        }
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function() {
            $(this).find('.ins_square').css("background-color","#000");
        })
        .on('jcarouselpagination:inactive', 'a', function() {
            $(this).find('.ins_square').css("background-color","#fff");
        })
        .jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '"><div class="ins_square"></div></a>';
        }
    });

    $('.accordion__header').eq(1).addClass("accordion__active");
    $('.accordion__item .accordion__paragraph').eq(1).show();

    $('.accordion__item .accordion__header').click(function () {
        $(this).next('.accordion__paragraph').slideToggle("slow")
        .parent('.accordion__item').siblings('.accordion__item').find('.accordion__paragraph:visible').slideUp("slow");
        $(this).toggleClass("accordion__active");
        $(this).parent(".accordion__item").siblings('.accordion__item').find('.accordion__header').removeClass("accordion__active");
    })

});