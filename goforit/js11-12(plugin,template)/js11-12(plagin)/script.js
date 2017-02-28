
$(function () {
    $('.carousel-heider').carousel(4, 100, 20, {
        textColor: 'darkorange'
    } );
});



(function ($) {

    $.fn.carousel = function (numOfImg, widthOfImg, imgMargin, optTextColor) {

        var defaults = {
            textColor: 'black'
        };

        var settings = $.extend(defaults, optTextColor);
        
        return this.each(function () {

            var leftUIEl = $('.carousel-arrow-left');
            var rightUIEl = $('.carousel-arrow-right');
            var elementList = $('.carousel-list');
            var elements = $('.carousel-element');
            var heider = $(".carousel-heider");
            var text = elements.find('p').css({
                'color': settings.textColor
            });

            heider.css('border', settings.textColor);

            var imageMargin = imgMargin ? imgMargin : 20;
            var numOfImage = numOfImg ? numOfImg : 5;
            var widthOfImage;
                if(widthOfImg && widthOfImg <= 200 && widthOfImg >=90){
                    widthOfImage = widthOfImg;
                } else {
                    widthOfImage = 100;
                }
            var pixelsOffset = widthOfImage + imageMargin;
            var widthHeider = pixelsOffset * numOfImage - imageMargin;

            elements.css('margin-right', imageMargin + 'px');
            $(".carousel-element img").css('max-width', widthOfImage + 'px');
            heider.css('width', widthHeider + 'px');


            var currentLeftValue = 0;
            var elementsCount = elementList.find('li').length;
            var minElementCount = -(elementsCount - numOfImage) * pixelsOffset;
            var maxElementCount = -(elementsCount * pixelsOffset);

            leftUIEl.click(function () {
                if(currentLeftValue % maxElementCount == 0 ){
                    currentLeftValue = maxElementCount;
                    elementList.css("left", currentLeftValue + 'px');
                    elements.clone().prependTo(elementList);
                }
                currentLeftValue += pixelsOffset;
                elementList.stop().animate({left: currentLeftValue + 'px'}, 500);
            });

            rightUIEl.click(function () {
                if((currentLeftValue % minElementCount == 0) && currentLeftValue){
                    elements.clone().appendTo(elementList);
                }
                currentLeftValue -=pixelsOffset;
                elementList.stop().animate({left: currentLeftValue + 'px'}, 500);
            });

        });

    }

})(jQuery);



        



