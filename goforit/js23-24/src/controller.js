/**
 * Created by Roman on 28.02.2017.
 */

define(["jquery", "model", "view"], function ($, model, view) {
    'use strict';
        return function Controller(model, view) {
            var self = this;
            view.elements.btnAdd.on('click', addItem);

            function addItem() {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            view.elements.containerList.on('click', '.btn_item-delete', removeItem);

            function removeItem() {
                var closeItem = $(this).attr('data-value');
                model.removeItem(closeItem);
                view.renderList(model.data);
            }

            view.elements.containerList.on('click', '.btn_item-edit', editItem);

            function editItem() {
                var x = $(this).attr('data-value');
                model.editItem(x);
                view.renderList(model.data);
            }

        };
    });


