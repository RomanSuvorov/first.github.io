/**
 * Created by Roman on 27.11.2016.
 */

$(function () {

    var run = true;

    var $input = $('div.inputs input');
    var $button = $('button');

    $input.hover(function () {
        $(this).next('.tooltip').stop(true).fadeTo(700, 1.0);
    }, function () {
        $(this).next('.tooltip').stop(true).fadeTo(700, 0);
    });



    $button.on('click', function (e) {
        if(run){
            e.preventDefault();
            $input.next('.tooltip').fadeTo(300, 1.0);
            run = false;
            this.innerHTML = 'Скрыть все подсказки';
        } else {
            e.preventDefault();
            $input.next('.tooltip').fadeTo(300, 0);
            run = true;
            this.innerHTML = 'Вывести все подсказки';
        }
    });

});