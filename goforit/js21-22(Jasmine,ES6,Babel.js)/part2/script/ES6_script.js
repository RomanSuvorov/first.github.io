/**
 * Created by Roman on 06.02.2017.
 */

'use strict';

$(function () {


    let dataForTest = JSON.parse(localStorage.getItem('dataForTest'));
    let test = $('#template').html();

    let content = tmpl(test, dataForTest);
    $('body').append(content);
    let answers = $('.answers').css('list-style', 'none');
    let checkboxes = $('input');

    $('.btn_result').click(function () {

        let message = "Тест пройдено. Вітаємо!";
        let result = 1;
        checkboxes.each(function (index, elem) {
            let boolValCheck = parseInt($(elem).attr('value'));

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
        let $overlay = $('<div class="overlay-modal"></div>');
        $('body').append($overlay);
        $('.modal').css('display', 'block');
    });

    $('.modal_button').click(function () {

        $('.modal').css('display', 'none');
        $('.overlay-modal').fadeOut('slow').remove();
    });
});