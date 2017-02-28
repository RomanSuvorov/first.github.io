/**
 * Created by Roman on 04.02.2017.
 */

$(function () {

    var html = $('#myProfile').html();

    var suvorovRoman = {
        name: 'Суворов Роман Олександрович',
        avatar: 'img/avatar.jpg',
        whoIs: 'Cтудент "КПИ имени И.Сикорського"',
        liContent: ['Фронтенд - очень интересная сфера','Имеет место творчество','Нужна хорошая робота, которая будет приносить удовольствие и прибыль'],
        linkHref: 'https://vk.com/suvorov.roma',
        linkName: 'vk.com/suvorov.roma',
        phoneNum: '0507595188',
        feedback: 'Научу вставать в 6 утра'
    };

    var content = tmpl(html, suvorovRoman);
    $('body').append(content);

});