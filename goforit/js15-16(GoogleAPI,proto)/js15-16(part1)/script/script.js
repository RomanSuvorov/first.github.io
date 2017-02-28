/**
 * Created by Roman on 10.02.2017.
 */


$(function () {
    'use strict';

console.log();

    $('form').submit(function (event) {
        $.ajax({
            url: "https://www.googleapis.com/customsearch/v1?q="+encodeURIComponent(this.elements[0].value)+"&key=AIzaSyC1gH5rs4H70MxBFycsaGnF94h3ra2-LQE&cx=000283222127530457480:fcqttmqm5o0&callback=?",
            dataType: "jsonp",
            success: function (data) {
                var searRes = $("#search_result").html();
                var html = tmpl(searRes, data);
                var boxRes = $('.search_res_wrapper');
                $('#searchTitle').hide();
                boxRes.html(html);
            }
        });
        event.preventDefault();

    });


});