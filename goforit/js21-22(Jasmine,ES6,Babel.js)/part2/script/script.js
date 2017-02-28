/**
 * Created by Roman on 06.02.2017.
 */

'use strict';

$(function () {

    var dataForTest = JSON.parse(localStorage.getItem('dataForTest'));
    var test = $('#template').html();

    var content = tmpl(test, dataForTest);
    $('body').append(content);
    var answers = $('.answers').css('list-style', 'none');
    var checkboxes = $('input');

    $('.btn_result').click(function () {

        var message = "Тест пройдено. Вітаємо!";
        var result = 1;
        checkboxes.each(function (index, elem) {
            var boolValCheck = parseInt($(elem).attr('value'));

            if ($(elem).is(':checked') != boolValCheck) {
                if ($(elem).is(':checked') && !boolValCheck) {
                    message = 'Ех, десь є помилка :(';
                    result = 2;
                } else {
                    message = 'Відсутня або неповна відповідь на одне із полів';
                    result = 3;
                }
            }
        });

        $('#modal_text').text(message);
        var $overlay = $('<div class="overlay-modal"></div>');
        $('body').append($overlay);
        $('.modal').css('display', 'block');
    });

    $('.modal_button').click(function () {

        $('.modal').css('display', 'none');
        $('.overlay-modal').fadeOut('slow').remove();
    });
});