/**
 * Created by Roman on 28.02.2017.
 */
define(["jquery", "tmpl"],
    function ($, tmpl) {
        'use strict';

        return function View(model) {
            var self = this;
            function init() {
                var wrapper = tmpl($('#wrapper-template').html());
                $('body').append(wrapper);
                self.elements = {
                    btnAdd: $('.btn_item-add'),
                    input: $('.item_value'),
                    containerList: $('.toDo_list')
                };
                self.renderList(model.data)
            }

            self.renderList = function (data) {
                var list = tmpl($('#toDo_item-temlate').html(), {data:data});
                self.elements.containerList.html(list);
            };

            init();
        }
    }
);




