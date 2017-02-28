/**
 * Created by Roman on 21.11.2016.
 */
$(function () {
    var run = true;
    var $tabs = $('.box ul li');
    var $paragraph = $('p');
    var $button = $('button');

    $tabs.on('click', function () {
        $paragraph.eq($tabs.index(this))
            .slideDown(500).siblings($paragraph).slideUp(500);
        $(this).addClass('active')
            .siblings($tabs).removeClass('active');
    });

    $button.on('click', function (e) {
        e.preventDefault();
        if(run == true) {
            showText();
        } else {
            hideText();
        }
    });

    function showText() {
        run = false;
        $button.html('Скрыть все комментарии');
        $paragraph.show(1000);
    }

    function hideText() {
        run = true;
        $button.html('Показать все комментарии');
        $paragraph.hide(1000);
    }

});