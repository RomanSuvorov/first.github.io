$(function() {


    $('.jcarousel').jcarousel({
        animation: {
            duration: 500,
            easing:   'linear',
            complete: function() {
            }
        },
        wrap: 'circular'
    });

    $('.jcarousel-prev')
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-next')
        .jcarouselControl({
            target: '+=1'
        });


    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });

    // SELECT

    $("#addSelect").click(
        function()
        {
            var addedSelect ='<select id="add-select" name="add-select">'+
                '<option value="1">Сова №1</option>'+
                '<option value="2">Сова №2</option>'+
                '<option value="3">Сова №3</option>'+
                '<option value="4">Сова №4</option>'+
                '<option value="5">Сова №5</option>'+
                '<option value="6">Сова №6</option>'+
                '</select>';
            $(this).replaceWith(addedSelect);

            var params = {
                changedEl: ".lineForm select",
                visRows: 3
            };
            cuSel(params);

        });

    //CHECKBOX

    $('.niceCheck').each(function() {
        changeCheckStart($(this));
    });
    $('.niceCheck').mousedown(
        function () {
           changeCheck($(this))
        }
    );

    function changeCheck(el)
    {
        var el = el,
            input = el.find("input").eq(0);
        if(!input.attr("checked")) {
            el.css("background-position","0 -17px");
            input.attr("checked", true)
        } else {
            el.css("background-position","0 0");
            input.attr("checked", false)
        }
        return true;
    }

    function changeCheckStart(el)
    {
        var el = el,
            input = el.find("input").eq(0);
        if(input.attr("checked")) {
            el.css("background-position","0 -17px");
        }
        return true;
    }


    //MENU

    $( ".main_ul li:nth-child(2)" ).hover(
      function () {
          $(this).find('.sub_ul').stop(true,true).slideDown();
      }, function () {
            $(this).find('.sub_ul').stop(true,true).slideUp('fast');
        }
    );
    $( ".sub_ul li:nth-child(2)" ).hover(
        function () {
            $(this).find('.sub2_ul').stop(true,true).fadeIn(500);
        }, function () {
            $(this).find('.sub2_ul').stop(true,true).fadeOut(500);
        }
    );

    $(".menu li").mouseenter(
        function () {
            $(this).stop(true,true).animate({
                backgroundColor:"#9D0000"
                }, 500);
        });

    $(".menu li").mouseleave(
        function () {
            $(this).stop(true,true).animate({
                backgroundColor:"#CC0000"
            }, 250);
        });

    $(".menu li a").mouseenter(
        function () {
            $(this).stop(true,true).animate({
                color:"#54FFC3"
            }, 500);
        });

    $(".menu li a").mouseleave(
        function () {
            $(this).stop(true,true).animate({
               color:"#88D346"
            }, 250);
        });


});



